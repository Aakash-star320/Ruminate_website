"use client";

import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import "./gallery.css";

interface GalleryImage {
  img: string;
  event?: string;
}

export default function Gallery() {
  const [photos, setPhotos] = useState<GalleryImage[]>([]);
  const [year, setYear] = useState("2024");
  const [eventType, setEventType] = useState("All");
  const [activeImg, setActiveImg] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  const years = ["2024", "2023", "2022", "2021"];
  const events = ["All", "TechFest", "Cultural", "Workshop", "Sports"];

  useEffect(() => {
    setLoading(true);
    const baseUrl = `/api/gallary`;
    const query: string[] = [];

    if (year !== "All") query.push(`year=${year}`);
    if (eventType !== "All") query.push(`event=${eventType}`);

    const url = query.length ? `${baseUrl}?${query.join("&")}` : baseUrl;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch gallery data');
        }
        return res.json();
      })
      .then((data: GalleryImage[]) => {
        setPhotos(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setPhotos([]);
        setLoading(false);
      });
  }, [year, eventType]);

  const openImage = (img: string, index: number) => {
    setActiveImg(img);
    setActiveIndex(index);
  };

  const closeImage = () => {
    setActiveImg(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (photos.length === 0) return;
    
    let newIndex = activeIndex;
    if (direction === 'prev') {
      newIndex = activeIndex > 0 ? activeIndex - 1 : photos.length - 1;
    } else {
      newIndex = activeIndex < photos.length - 1 ? activeIndex + 1 : 0;
    }
    
    setActiveIndex(newIndex);
    setActiveImg(photos[newIndex].img);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!activeImg) return;
      
      if (e.key === 'Escape') {
        closeImage();
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [activeImg, activeIndex, photos]);

  return (
    <div className="gallery-container">
      <main>
        <h1>Photo Stream</h1>
        <p>The moments we capture become memories we never forget.</p>

        <div className="filters">
          <div className="dropdown-group">
            <label>Sort By Year</label>
            <select value={year} onChange={(e) => setYear(e.target.value)}>
              {years.map((yr) => (
                <option key={yr} value={yr}>
                  {yr}
                </option>
              ))}
            </select>
          </div>

          <div className="dropdown-group">
            <label>Sort By Events</label>
            <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
              {events.map((ev) => (
                <option key={ev} value={ev}>
                  {ev}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Image grid */}
        {loading ? (
          <p className="loading-text">Loading images...</p>
        ) : photos.length > 0 ? (
          <div className="photo-grid">
            {photos.map((photo, idx) => (
              <div
                key={idx}
                className="photo-card"
                onClick={() => openImage(photo.img, idx)}
              >
                <img
                  src={`/images/${photo.img}`}
                  alt={`Gallery ${idx + 1}`}
                  onError={(e) => {
                    e.currentTarget.src = '/images/some2.jpg'; // Fallback image
                  }}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="no-images">
            <h3>No images found</h3>
            <p>No images found for the selected filters. Try adjusting your search criteria.</p>
          </div>
        )}

        {/* Enlarged view modal */}
        {activeImg && (
          <div className="overlay" onClick={closeImage}>
            <button
              className="close-button"
              onClick={closeImage}
              aria-label="Close image"
            >
              <FaTimes />
            </button>
            
            <img
              className="enlarged"
              src={`/images/${activeImg}`}
              alt={`Gallery ${activeIndex + 1}`}
              onClick={(e) => e.stopPropagation()}
            />
            
            <div className="image-counter">
              {activeIndex + 1} of {photos.length}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
