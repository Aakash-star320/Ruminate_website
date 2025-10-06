"use client";
import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";

const members = [
  {
    name: "Vedie Chawla",
    role: "Tech Head",
    image: "/placeholder.jpg",
  },
  {
    name: "Harshwardhan M. Tripathi",
    role: "Secretary",
    image: "/placeholder.jpg",
  },
  {
    name: "Arya Trivedi",
    role: "Joint Secretary",
    image: "/placeholder.jpg",
  },
];

export default function ContactUs() {
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.heading}>
        <span className={styles.orange}>Contact</span> Us
      </h2>

      <div className={styles.contactGrid}>
        {members.map((member, idx) => (
          <div key={idx} className={styles.memberCard}>
            <div className={styles.memberImageWrapper}>
              <Image
                src={member.image}
                alt={member.name}
                width={120}
                height={120}
                className={styles.memberImage}
              />
            </div>
            <p className={styles.memberRole}>{member.role}</p>
            <p className={styles.memberName}>{member.name}</p>
          </div>
        ))}
      </div>

      <div className={styles.buttonContainer}>
        <Link href="/team">
          <button className={styles.meetButton}>MEET OUR TEAM</button>
        </Link>
      </div>

      <blockquote className={styles.quote}>
        <p>
          “ We foster a culture of innovation, creativity, and
          entrepreneurial thinking — empowering students to explore, build, and
          lead. ”
        </p>
        <footer>— Team Ruminate</footer>
      </blockquote>
    </section>
  );
}
