"use client";
import Link from "next/link";
import { useState } from "react"; 
import styles from "./home.module.css";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // To show success/error

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // simple email validation on frontend
    if (!email.trim() || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setMessage("Thanks for your message!");
        setEmail(""); // reset field
      } else {
        setMessage("Something went wrong. Please try again later.");
      }
    } catch (err) {
      console.error("Error sending email:", err);
      setMessage("An error occurred. Try again later.");
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <div className={styles.logoBlock}>
          <img src="/fire2.png" alt="Ruminate Logo" className={styles.logo} />
          <h2 className={styles.logoText}>Ruminate</h2>
          <span className={styles.subText}>E-Cell IIIT Surat</span>
        </div>
      </div>

      {/* SOCIAL SECTION */}
      <div className={styles.column}>
        <h3 className={styles.socialHeading}>Social</h3>
        <ul className={styles.socialList}>
          <li><FaInstagram className={styles.icon} /><span>Instagram</span></li>
          <li><FaFacebookF className={styles.icon} /><span>Facebook</span></li>
          <li><FaLinkedinIn className={styles.icon} /><span>LinkedIn</span></li>
        </ul>
      </div>

      {/* USEFUL LINKS */}
      <div className={styles.column}>
        <h3 className={styles.heading}>Useful links</h3>
        <ul className={styles.linkList}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/home#about">About Us</Link></li>
          <li><Link href="/blogs">Blogs</Link></li>
          <li><Link href="/gallary">Gallery</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
      </div>

      {/* SUBSCRIBE SECTION */}
      <div className={styles.column}>
        <h3 className={styles.heading}>Subscribe</h3>
        <p className={styles.subTextSmall}>
          Keep yourself updated. Subscribe to our newsletter
        </p>
        <form className={styles.subscribeForm} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your Email"
            className={styles.input_footer}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className={styles.arrowBtn}>&rarr;</button>
        </form>
        {message && <p style={{ color: "orange", marginTop: "0.5rem" }}>{message}</p>}
      </div>
    </footer>
  );
}
