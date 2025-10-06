"use client";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./events.module.css";

const slides = [
  {
    image: "/images/some2.jpg",
    title: "E-Summit 2024",
    description: "The largest entrepreneurship summit bringing together innovators, investors, and industry leaders.",
  },
  {
    image: "/images/some2.jpg",
    title: "Spring Fiesta Innovation",
    description: "Celebrating innovation and entrepreneurship with exciting competitions and networking opportunities.",
  },
  {
    image: "/images/some2.jpg",
    title: "Startup Talks & Mentorship",
    description: "Learn from successful entrepreneurs and get mentorship from industry experts.",
  },
  {
    image: "/images/some2.jpg",
    title: "Pitch Perfect Competition",
    description: "Showcase your startup ideas and compete for exciting prizes and funding opportunities.",
  },
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds for better UX

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrent(index);
  };

  const handlePrevClick = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className={styles.carouselWrapper}>
      <div
        className={styles.carouselTrack}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className={styles.carouselSlide} key={index}>
            <img
              src={slide.image}
              alt={slide.title}
              className={styles.slideImage}
            />
            <div className={styles.caption}>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevClick}
        className={`${styles.carouselNav} ${styles.carouselNavPrev}`}
        aria-label="Previous slide"
      >
        <FaChevronLeft />
      </button>
      
      <button
        onClick={handleNextClick}
        className={`${styles.carouselNav} ${styles.carouselNavNext}`}
        aria-label="Next slide"
      >
        <FaChevronRight />
      </button>

      {/* Dots Navigation */}
      <div className={styles.dotsContainer}>
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            className={`${styles.dot} ${
              current === index ? styles.active : ""
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
