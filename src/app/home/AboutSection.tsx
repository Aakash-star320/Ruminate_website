"use client";
import { useEffect, useRef } from 'react';
import styles from './home.module.css';

export default function AboutSection() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stats = entry.target.querySelectorAll('.stat-number');
            stats.forEach((stat) => {
              const target = parseInt(stat.getAttribute('data-target') || '0');
              animateNumber(stat as HTMLElement, target);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateNumber = (element: HTMLElement, target: number) => {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target.toString();
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current).toString();
      }
    }, 20);
  };

  return (
    <section className={styles.about}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2 className={styles.aboutTitle}>
              About <span className={styles.orangeText}>Ruminate</span>
            </h2>
            <p className={styles.aboutDescription}>
              A club driven by many young business minded students to foster a culture of entrepreneurship at campus of IIIT Surat, Not only promoting the entrepreneurship culture, the club also encourages the youth to develop the interpersonal and leadership skills which help them to ace in any field or department they are interested in, helps in fostering the curiosity, collaboration and creativity.
            </p>
            <div className={styles.aboutMission}>
              <h3>Our Mission</h3>
              <p>
                To foster entrepreneurial thinking, drive innovation, and create a platform where students can 
                transform their ideas into impactful solutions that shape the future.
              </p>
            </div>
          </div>
          
          <div className={styles.aboutStats} ref={statsRef}>
            <div className={styles.statCard}>
              <div className="stat-number" data-target="200">0</div>
              <div className={styles.statLabel}>Networks</div>
            </div>
            <div className={styles.statCard}>
              <div className="stat-number" data-target="50">0</div>
              <div className={styles.statLabel}>Projects</div>
            </div>
            <div className={styles.statCard}>
              <div className="stat-number" data-target="25">0</div>
              <div className={styles.statLabel}>Events</div>
            </div>
            <div className={styles.statCard}>
              <div className="stat-number" data-target="10">0</div>
              <div className={styles.statLabel}>Startups</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
