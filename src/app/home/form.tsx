"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./home.module.css";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mrbkoqwz");

  if (state.succeeded) {
    return <p className={styles.thanks}>Thanks for your message!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formBox}>
      <label htmlFor="email" className={styles.label}>
        Email Address
      </label>
            <input
        id="email"
        type="email"
        name="email"
        className={styles.input}
        placeholder="you@domain.com"
        aria-label="Email address"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} className={styles.error} />

      <label htmlFor="message" className={styles.label}>
        Message
      </label>
          <textarea
      id="message"
      name="message"
      className={styles.textarea}
      placeholder="Tell us about your query or feedback..."
      aria-label="Message"
      required
    />
      <ValidationError prefix="Message" field="message" errors={state.errors} className={styles.error} />

      <button type="submit" disabled={state.submitting} className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
}
