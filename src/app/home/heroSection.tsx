"use client";
import { useEffect, useState } from 'react';
import styles from "./home.module.css";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.heroOverlay}></div>
      </div>
      
      <div className={styles.heroContent}>
        <div className={`${styles.heroText} ${isVisible ? styles.fadeInUp : ''}`}>
          <h1 className={styles.heroTitle}>
            Foster The <span className={styles.heroSpark}>Spark</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Welcome to Ruminate – The E-Cell of IIIT Surat
          </p>
          <p className={styles.heroDescription}>
           "We foster a culture of innovation, creativity, and entrepreneurial thinking — empowering students to explore, build, and lead."
          </p>
          {/* <div className={styles.heroButtons}>
            <a href="/events" className={`${styles.heroButton} ${styles.heroBtnPrimary}`}>
              Explore Events
            </a>
            <a href="/team" className={`${styles.heroButton} ${styles.heroBtnSecondary}`}>
              Meet Our Team
            </a>
          </div> */}
        </div>
      </div>
      
      <div className={styles.heroScroll}>
        <div className={styles.scrollIndicator}>
          <span></span>
        </div>
      </div>
    </section>
  );
}