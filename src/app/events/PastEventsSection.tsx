'use client';

import React, { useEffect, useState } from 'react';
import styles from './events.module.css';

interface PastEvent {
  title: string;
  description: string;
  image: string; // image file name like "event1.jpg"
}

export default function PastEvents() {
  const [pastEvents, setPastEvents] = useState<PastEvent[]>([]);

  useEffect(() => {
    fetch('/api/past-events') // ✅ Switched to relative API route
      .then((res) => res.json())
      .then((data) => setPastEvents(data))
      .catch((err) => console.error('Failed to fetch past events:', err));
  }, []);

  return (
    <section className={styles.pastEventsSection}>
      <h2 className={styles.sectionHeading}>
        <span className={styles.orange}>Past</span> Events
      </h2>

      <div className={styles.eventsGrid}>
        {pastEvents.map((event, index) => (
          <div
            key={index}
            className={`${styles.eventItem} ${index % 2 !== 0 ? styles.reverse : ''}`}
          >
            <div className={styles.textBlock}>
              <h4>{event.title}</h4>
              <p>{event.description}</p>
            </div>
            <div className={styles.imageBlock}>
              <img
                src={`/images/${event.image}`} // ✅ Uses public/images directory
                alt={event.title}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
