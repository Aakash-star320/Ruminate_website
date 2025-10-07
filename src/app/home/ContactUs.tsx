"use client";
import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";

const members = [
  {
    name: "Pratik Avhad",
    role: "Tech Head",
    image: "/contactUs/Copy of Pratik.JPG",
  },
  {
    name: "Vivek Baya",
    role: "Secretary",
    image: "/contactUs/Copy of Vivek.JPG",
  },
  {
    name: "Ronit Choudhary",
    role: "Joint Secretary",
    image: "/contactUs/Copy of Ronit.JPG",
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
          “ Want to build, explore or lead, Ruminate is in the campus to help you concretize your ideas and shape up your creativity, learn to lead the team and build a network of like minded pupils. ”
        </p>
        <footer>— Team Ruminate</footer>
      </blockquote>
    </section>
  );
}
