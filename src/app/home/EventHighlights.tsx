"use client";
import styles from "./home.module.css";

const events = [
  { id: 1, image: "/eventHighlights/AGC_20241008_145744337.jpg", title: "Event 1" },
  { id: 2, image: "/eventHighlights/Copy of 0j3A6821.jpg", title: "Event 2" },
  { id: 3, image: "/eventHighlights/Copy of 0j3A8218.JPG", title: "Event 3" },
  { id: 4, image: "/eventHighlights/Copy of 0j3A8225.JPG", title: "Event 4" },
  { id: 5, image: "/eventHighlights/Copy of 8A9A4583.JPG", title: "Event 5" },
  { id: 6, image: "/eventHighlights/Copy of 8A9A4791.JPG", title: "Event 6" },
  { id: 7, image: "/eventHighlights/Copy of 8A9A4879.JPG", title: "Event 7" },
  { id: 8, image: "/eventHighlights/copy of IMG_5071.JPG", title: "Event 8" },
  { id: 9, image: "/eventHighlights/E-summit(Speaker-session).JPG", title: "Event 9" },
  { id: 10, image: "/eventHighlights/ICCC_Visit.JPG", title: "Event 10" },
  { id: 11, image: "/eventHighlights/ktb.jpg", title: "Event 11" }
];


export default function EventHighlights() {
  console.log("Rendering Events Highlights........");
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
