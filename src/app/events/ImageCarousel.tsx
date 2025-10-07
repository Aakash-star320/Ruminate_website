"use client";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./events.module.css";

const slides = [
  {
    image: "/images/some2.jpg",
    title: "E-Summit 2024",
    description: "Bringing together young entrepreneurs and industry experts through various workshops, empowering young innovators.",
  },
  {
    image: "/images/some2.jpg",
    title: "SSIP",
    description: "SSIP (Student Startup and Innovation Policy) Gujarat is a state-wide initiative promoting student-led innovation, entrepreneurship, and problem-solving across educational institutions.",
  },
  {
    image: "/images/some2.jpg",
    title: "KTB",
    description: "An opportunity to learn and analyze about the multiple businesses in the city, and learn about the business directly from the entrepreneurs.",
  }
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
