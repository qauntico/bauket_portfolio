"use client";

import { useState } from "react";
import styles from "./contact.module.css";
import GlobeModel from "./subComponents/contactGlobe";

export default function ContactSection() {
  // Combined state for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Submitted Data:", formData);

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.contactSection}>
        <div className={styles.formContainer}>
          <h4 className={styles.subheading}>Get in touch</h4>
          <h2 className={styles.heading}>Contact</h2>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Your name</label>
              <input
                type="text"
                name="name"
                placeholder="what’s your name"
                className={styles.input}
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="what’s your email"
                className={styles.input}
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Your message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Enter your message"
                className={styles.textarea}
                value={formData.message}
                onChange={handleChange}
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