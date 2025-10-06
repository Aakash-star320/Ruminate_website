import ImageCarousel from "./ImageCarousel";
import PastEvents from "./PastEventsSection";
import styles from "./events.module.css";
import Footer from "../home/Footer";

export default function EventsPage() {
  return (
    <div className={styles.eventsPage}>
      <ImageCarousel />
      <PastEvents />
      <Footer />
    </div>
  );
}
