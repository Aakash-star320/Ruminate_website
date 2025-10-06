// app/components/HomePage.tsx
"use client";
import dynamic from "next/dynamic";
import HeroSection from "./heroSection";
import CardsSection from "./CardsSection";
import AboutSection from "./AboutSection";
import FacultySection from "./FacultySection";
import CollaborationSection from "./CollaborationSection";
import AlumniSection from "./AlumniSection";
import styles from "./home.module.css";
import GuestSpeakers from "./GuestSpeakers";
import ContactUs from "./ContactUs";
import ContactForm from "./form";
import Footer from "./Footer";

const EventHighlights = dynamic(() => import("./EventHighlights"), { ssr: false });
export default function HomePage() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <main className={styles.content}>
        <CardsSection />
        <AboutSection />
        <FacultySection />
        <CollaborationSection />
        <AlumniSection />
        <EventHighlights />
        <GuestSpeakers />
        <ContactUs />
        <ContactForm />

      </main>
      <Footer />
    </div>
  );
}
