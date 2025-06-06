"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./workExperience.module.css";

const experiences = [
  {
    title: "iHealth and Wellness Foundation",
    summary:
      "Full-stack Developer",
    details: [
      "Built several API endpoints for the system utilizing Express REst Framework, including ones for receiving user stories, patient blogs, comments, and user authentication, ensuring efficient and scalable communitcation between them.",
      "Designed and managed the MongoDB database structure used to store all user data for the API endpoints I was in charge of.",
      "Worked with the frontend team to connect my API endpoints to the React client, making sure communication between the client and server was smooth and efficient.",
      "Ensured good security measures for the endpoints i created, including encryption to safeguard sensitive data and protect user privacy in the backend, by doing things like properly sanitizing user inputs to prevent attack like XSS using packages like express-validator for the API endpoints i created and was managing.",
      "Conducted thorough manual testing for the API endpoints i created and had to manage, ensuring optimal functionality, usability and adherence to system specifications.",
      "Worked with the frontend team to design and build some React components that made good use of the API endpoints I created, making sure the data showed correctly on the user interface."
    ],
  },
   {
    title: "Munich Tes",
    summary:
      "Fullstack Developer",
    details: [
      "Modified and improved features on the company’s job application portal (Munich Tes) built with React, Node js, resulting in a smoother user experience and faster navigation.",
      "Set up a new database for the portal on Digital Ocean, handling the migration from the previous provider and adjusting access ports to strengthen security.",
      "Packaged the application using Docker, which made deployments easier and improved portability. Hosting on Digital Ocean’s managed service led to a 10% increase in performance and reduced maintenance needs, while keeping costs within the company’s budget.",
      "Ran tests comparing the updated system to the previous setup, confirming better reliability and efficiency; overall system performance improved by 13% after the updates.",
      "Connected the company’s WordPress application to the React app that's the job application portal, allowing users to access features and content from both platforms seamlessly."
    ],
  },
  {
    title: "Ayatickets",
    summary:
      "Backend Developer",
    details: [
      "Help manage the company’s cloud infrastructure, including regular data backups.",
      "Check application logs to monitor performance and catch errors early.",
      "Debug bugs and issues in the backend systems.",
      "Work closely with the team to build and add new features to the core application(ayatickets).",
      "Implement caching solutions for static data using AWS CloudFront to improve application speed and performance."
    ],
  },
  {
    title: "Zenera Technologies",
    summary:
      "Web Developer",
    details: [
    
    ],
  },
];

export default function ExperienceAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const handleArrowClick = (idx: number) => {
    setOpenIdx(idx === openIdx ? null : idx);
  };

  return (
    <section className={styles.section} id="work">
      {/* Animated intro */}
      <motion.div
        className={styles.intro}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p className={styles.subtitle} variants={fadeInUp}>
          What i have done so far
        </motion.p>
        <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
          Work experience.
        </motion.h2>
        <motion.p className={styles.description} variants={fadeInUp}>
          Here’s a look at some of the experiences that have shaped my journey
          so far:
        </motion.p>
      </motion.div>
      <div className={styles.wrapper}>
        {experiences.map((exp, idx) => {
          const isOpen = openIdx === idx;
          const isHovered = hoverIdx === idx;
          return (
            <div
              className={`${styles.card} ${isOpen ? styles.open : ""} ${
                isHovered && !isOpen ? styles.hovered : ""
              }`}
              key={exp.title}
              onMouseEnter={() => setHoverIdx(idx)}
              onMouseLeave={() => setHoverIdx(null)}
            >
              <div className={styles.number}>
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div className={styles.content}>
                <div className={styles.title}>{exp.title}</div>
                <div className={styles.summary}>{exp.summary}</div>
                {(isOpen || isHovered) && exp.details.length > 0 && (
                  <ul className={styles.details}>
                    {exp.details.map((item, i) => (
                      <li key={i}>
                        <span className={styles.check}>✓</span> {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <button
                className={`${styles.arrowBtn} ${
                  isOpen ? styles.arrowOpen : ""
                }`}
                onClick={() => handleArrowClick(idx)}
                aria-label="Expand experience"
                tabIndex={0}
                type="button"
              >
                <svg viewBox="0 0 24 24" width={24} height={24}>
                  <circle cx="12" cy="12" r="12" fill="url(#grad)" />
                  <defs>
                    <linearGradient
                      id="grad"
                      x1="0"
                      y1="0"
                      x2="24"
                      y2="24"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#A084E8" />
                      <stop offset="1" stopColor="#6F61E8" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M9 8l4 4-4 4"
                    stroke="#fff"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
