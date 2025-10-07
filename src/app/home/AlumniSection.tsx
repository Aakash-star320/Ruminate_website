"use client";
import styles from "./home.module.css"; // make sure the path is correct

interface Startup {
  name: string;
  logo: string;
}

const startups: Startup[] = [
  { name: "Kaspertech", logo: "/allumniStartups/Kaspertech.png" },
  { name: "Startify", logo: "/allumniStartups/VysionTech.png" }
];

export default function AlumniSection() {
  return (
    <section className={styles.alumniSection}>
      <div className={styles.alumniTitleBlock}>
        <div className={styles.alumniLine}></div>
        <h2 className={styles.alumniHeading}>
          Alumni <span className={styles.orangeText}>Startups</span>
        </h2>
      </div>

      <div className={styles.alumniGrid}>
        {startups.map((startup, idx) => (
          <div key={idx} className={styles.alumniCard}>
            <div className={styles.alumniLogoBox}>
              <img
                src={startup.logo}
                alt={`${startup.name} Logo`}
                className={styles.alumniLogo}
              />
              <p className={styles.alumniName}>{startup.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
