// ContactSection.tsx
"use client";

import styles from "./contact.module.css";
import GlobeModel from "./subComponents/contactGlobe";

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.contactSection}>
        <div className={styles.formContainer}>
          <h4 className={styles.subheading}>Get in touch</h4>
          <h2 className={styles.heading}>Contact</h2>

          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Your name</label>
              <input
                type="text"
                placeholder="what’s your name"
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Your Email</label>
              <input
                type="email"
                placeholder="what’s your email"
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Your message</label>
              <textarea
                rows={4}
                placeholder="Enter your message"
                className={styles.textarea}
              ></textarea>
            </div>

            <button type="submit" className={styles.button}>
              send
            </button>
          </form>
        </div>

        <div className={styles.modelWrapper}>
          <GlobeModel />
        </div>
      </div>
    </section>
  );
}
