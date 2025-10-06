"use client";
import styles from "./home.module.css";

const events = [
  { id: 1, image: "/some2.jpg", title: "Event 1" },
  { id: 2, image: "/some2.jpg", title: "Event 2" },
  { id: 3, image: "/some2.jpg", title: "Event 3" },
  { id: 4, image: "/some2.jpg", title: "Event 4" },
  { id: 5, image: "/some2.jpg", title: "Event 5" },
  { id: 6, image: "/some2.jpg", title: "Event 6" },
];


export default function EventHighlights() {
  console.log("Rendering Events Highlights...");
  return (
    
    <section className={styles.eventsSection}>
      <div className={styles.eventsTitleBlock}>
        <div className={styles.eventsLine}></div>
        <h2 className={styles.eventsHeading}>
          Events <span className={styles.orangeText}>Highlights</span>
        </h2>
        <div className={styles.eventsLine}></div>
      </div>

      <div className={styles.eventsGrid}>
        {events.map((event) => (
          <div key={event.id} className={styles.eventCard}>
            <div className={styles.eventImageWrapper}>
              <img
                src={event.image}
                alt={event.title}
                className={styles.eventImage}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
