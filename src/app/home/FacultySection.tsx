// components/FacultySection.tsx
"use client";
import { useState } from "react";
import styles from "./home.module.css";

interface Faculty {
  name: string;
  title: string;
  img: string;
  message: string;
}

const facultyData: Faculty[] = [
  {
    name: "Dr. Rajeev Shorey",
    title: "Director, IIIT Surat",
    img: "/some2.jpg",
    message:
      "At IIIT Surat’s Ruminate Club, we believe that every idea holds the potential to spark a revolution...",
  },
  {
    name: "Dr. Nishad G. Deshpandey",
    title: "Faculty Advisor, Ruminate Club",
    img: "/some2.jpg",
    message:
      "Ruminate empowers students to challenge limits and think beyond convention...",
  },
  {
    name: "Dr. Nishad G. Deshpandey",
    title: "Faculty Advisor, Ruminate Club",
    img: "/some2.jpg",
    message: "Working with the Ruminate team has been a rewarding experience...",
  },
];

export default function FacultySection() {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);

  return (
    <section className={styles.faculty}>
      <h2 className={styles.facultyHeading}>
        <span className={styles.whiteText}>From</span>
        <span className={styles.orangeText}> Faculty </span>
        <span className={styles.whiteText}>Desk</span>
      </h2>

      {!selectedFaculty ? (
        <div className={styles.facultyGrid}>
          {facultyData.map((fac, idx) => (
            <div key={idx} className={styles.facultyCardMini} onClick={() => setSelectedFaculty(fac)}>
              <img src={fac.img} alt={fac.name} className={styles.facultyImageMini} />
              <p className={styles.facultyNameMini}>{fac.name}</p>
              <p className={styles.facultyTitleMini}>{fac.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.facultyExpanded}>
          <div className={styles.facultyMainCard}>
            <div className={styles.imageBlock}>
              <img src={selectedFaculty.img} alt={selectedFaculty.name} className={styles.mainImage} />
              <div className={styles.imageCaption}>
                <p className={styles.facultyName}>{selectedFaculty.name}</p>
                <p className={styles.facultyTitle}>{selectedFaculty.title}</p>
              </div>
            </div>
            <div className={styles.facultyTextBlock}>
              <p className={styles.facultyMessage}>{selectedFaculty.message}</p>
            </div>
          </div>
          <div className={styles.thumbnailSidebar}>
            {facultyData.map((fac, idx) => (
              <img
                key={idx}
                src={fac.img}
                alt={fac.name}
                className={styles.thumbnail}
                onClick={() => setSelectedFaculty(fac)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
