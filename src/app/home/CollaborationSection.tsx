"use client";
import { useEffect, useRef } from "react";
import styles from "./home.module.css";

export default function CollaborationSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const userInteracting = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const el = scrollRef.current;

    // Listen to user scroll to pause auto-scroll
    const handleUserScroll = () => {
      userInteracting.current = true;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        userInteracting.current = false;
      }, 3000);
    };

    el?.addEventListener("wheel", handleUserScroll, { passive: true });
    el?.addEventListener("touchstart", handleUserScroll, { passive: true });
    el?.addEventListener("touchmove", handleUserScroll, { passive: true });

    const interval = setInterval(() => {
      if (el && !userInteracting.current) {
        el.scrollBy({ left: 1, behavior: "smooth" });
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 20);

    return () => {
      clearInterval(interval);
      el?.removeEventListener("wheel", handleUserScroll);
      el?.removeEventListener("touchstart", handleUserScroll);
      el?.removeEventListener("touchmove", handleUserScroll);
    };
  }, []);

  return (
    <section className={styles.collabSection}>
      <div className={styles.collabTitleBlock}>
        <div className={styles.collabLine}></div>
        <h2 className={styles.collabHeading}>Collaboration</h2>
      </div>
      <div className={styles.collabScroll} ref={scrollRef}>
        <img src="/collabs/Frame 2610542.png" alt="StockGro" />
        <img src="/collabs/Frame 2610543.png" alt="Finshots" />
        <img src="/collabs/Frame 2610544.png" alt="Suman Book Store" />
        <img src="/collabs/Frame 2610545.png" alt="KasperTech" />
      </div>
    </section>
  );
}
