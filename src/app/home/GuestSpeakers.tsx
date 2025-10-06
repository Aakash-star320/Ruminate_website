"use client";
import styles from "./home.module.css";

const speakers = [
  "/some2.jpg",
  "/some2.jpg",
  "/some2.jpg",
  "/some2.jpg",
  "/some2.jpg",
  "/some2.jpg",
];
 // replace with real images
const testimonies = [
  {
    text: `At IIIT Surat’s Ruminate Club, we believe that every idea holds the potential to spark a revolution. We’re a community of passionate thinkers and fearless doers who thrive on curiosity, collaboration, and creativity.`,
    image: "/some2.jpg", // replace with actual
    reverse: false,
  },
  {
    text: `At IIIT Surat’s Ruminate Club, we believe that every idea holds the potential to spark a revolution. We’re a community of passionate thinkers and fearless doers who thrive on curiosity, collaboration, and creativity.`,
    image: "/some2.jpg",
    reverse: true,
  },
];

export default function GuestSpeakers() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        Guest and <span className={styles.orange}>Speakers</span>
      </h2>

      <div className={styles.speakerGrid}>
        {speakers.map((img, idx) => (
          <div key={idx} className={styles.speakerCard}>
            <img src={img} alt={`Speaker ${idx + 1}`} className={styles.speakerImage} />
          </div>
        ))}
      </div>

      {testimonies.map((item, index) => (
        <div
          key={index}
          className={`${styles.testimonyBlock} ${item.reverse ? styles.reverse : ""}`}
        >
          <div className={styles.textBlock}>
            <h4>Testimonies</h4>
            <p>{item.text}</p>
          </div>
          <div className={styles.imageBlock}>
            <img src={item.image} alt="Testimony" />
          </div>
        </div>
      ))}
    </section>
  );
}
