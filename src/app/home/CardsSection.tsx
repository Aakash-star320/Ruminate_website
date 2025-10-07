"use client";
import { FaLightbulb, FaRocket, FaUsers } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import styles from "./home.module.css";

export default function CardsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(`.${styles.card}, .${styles.cardHighlight}`);
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add(styles.cardVisible);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.cardsSection} ref={sectionRef}>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            What Drives <span className={styles.orangeText}>Us</span>
          </h2>
          <div className={styles.sectionUnderline}></div>
        </div>
        
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardIconWrapper}>
              <div className={styles.cardIcon}>
                <FaLightbulb />
              </div>
              <div className={styles.cardIconBg}></div>
            </div>
            <h3 className={styles.cardTitle}>Innovation</h3>
            <p className={styles.cardDescription}>
             Ruminate encourages participants to think beyond textbooks and develop practical, scalable solutions and innovation is driven by curiosity, collaboration, and continuous learning. Ruminate transforms ideas into action.
            </p>
            <div className={styles.cardFooter}>
              <span className={styles.cardNumber}>01</span>
            </div>
          </div>
          
          <div className={styles.card}>
            <div className={styles.cardIconWrapper}>
              <div className={styles.cardIcon}>
                <FaRocket />
              </div>
              <div className={styles.cardIconBg}></div>
            </div>
            <h3 className={styles.cardTitle}>Growth</h3>
            <p className={styles.cardDescription}>
              The club has expanded in scope and influence evolving from small discussions to large-scale events, industry collaborations, and startup mentorship programs. A club where students not only learn but also lead.
            </p>
            <div className={styles.cardFooter}>
              <span className={styles.cardNumber}>02</span>
            </div>
          </div>
          
          <div className={styles.card}>
            <div className={styles.cardIconWrapper}>
              <div className={styles.cardIcon}>
                <FaUsers />
              </div>
              <div className={styles.cardIconBg}></div>
            </div>
            <h3 className={styles.cardTitle}>Community</h3>
            <p className={styles.cardDescription}>
              This growing community encourages open dialogue, cross-domain collaboration, and peer-to-peer learning, helping members expand their horizons and build lasting connections.
            </p>
            <div className={styles.cardFooter}>
              <span className={styles.cardNumber}>03</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}