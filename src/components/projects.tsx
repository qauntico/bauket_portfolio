"use client";

import styles from "./projects.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Internship Listing Site",
    category: "Web App",
    description:
      "a mobile platform that allows users contact and trade their crypto currencies.",
    image: "/projects/internship.png", // Replace with your image path
    tags: [
      { label: "#react native", color: "#74f9c5" },
      { label: "#mongodb", color: "#4ffbdf" },
    ],
    link: "https://www.explortern.online/",
  },
  {
    title: "Event Listing Site",
    category: "Web App",
    description:
      "Web application that enables students to upload couses, view their results,take quizes etc.",
    image: "/projects/event.png", // Replace with your image path
    tags: [
      { label: "#react", color: "#53baff" },
      { label: "#Django", color: "#41e3a3" },
      { label: "#postgreSQL", color: "#eb5e7a" },
    ],
    link: "https://event-listing-46bb7.web.app/",
  },
  {
    title: "Business Management Software",
    category: "Web App",
    description: "An admin section for Galio students",
    image: "/projects/business.png", // Replace with your image path
    tags: [
      { label: "#React and typescript", color: "#6eaaff" },
      { label: "#Nodejs", color: "#41e3a3" },
      { label: "#tailwindcss", color: "#ff63f6" },
      { label: "#PostgreSQL", color: "#eb5e7a" },
    ],
    link: "https://github.com/qauntico/Business-application-.git",
  },
  {
    title: "Note Taking Application",
    category: "Desktop App",
    description: "An admin section for Galio students",
    image: "/projects/note.png", // Replace with your image path
    tags: [
      { label: "#React and typescript", color: "#6eaaff" },
      { label: "#Nodejs", color: "#41e3a3" },
      { label: "#tailwindcss", color: "#ff63f6" },
      { label: "#PostgreSQL", color: "#eb5e7a" },
    ],
    link: "https://github.com/qauntico/NotePad-Application-.git",
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function ProjectCardsSection() {
  return (
    <section className={styles.section}>
      {/* Animated intro */}
      <motion.div
        className={styles.intro}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p className={styles.subtitle} variants={fadeInUp}>
          INTRODUCTION
        </motion.p>
        <motion.h2 className={styles.projectTitle} variants={fadeInUp}>
          Projects
        </motion.h2>
        <motion.p className={styles.description} variants={fadeInUp}>
          Skilled full-stack developer proficient in JavaScript, TypeScript,
          Python, React, Node.js, and Django. Experienced data scientist and
          machine learning engineer, adept at leveraging cutting-edge techniques
          to drive impactful business outcomes. Quick learner and collaborative
          partner, dedicated to creating efficient, scalable, and user-friendly
          solutions.
        </motion.p>
      </motion.div>

      <div className={styles.cardsGrid}>
        {projects.map((project, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.imageWrapper}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
              />
              <Link
                href={project.link}
                className={styles.goBtn}
                tabIndex={0}
                aria-label="Go to project"
                target="_blank"
              >
                Go
              </Link>
            </div>
            <div className={styles.info}>
              <h6 className={styles.title}>{project.title}</h6>
              <h4 className={styles.category}>Category: {project.category}</h4>
              <p className={styles.desc}>{project.description}</p>
              <Link href={project.link} target="_blank" className={styles.view}>
                View Case Project →
              </Link>
              <div className={styles.tags}>
                {project.tags.map((tag, idx) => (
                  <span
                    className={styles.tag}
                    style={{ color: tag.color }}
                    key={idx}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
