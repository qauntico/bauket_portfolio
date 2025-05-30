"use client";

import styles from "./projects.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Internship Listing Site",
    category: "Web App",
    description:
      "A web application where companies can easily list out internships and management them while students or interns can easily apply for them base on certain system policies.",
    image: "/projects/internship.png", // Replace with your image path
    tags: [
      { label: "#Next js", color: "#74f9c5" },
      { label: "#mongodb", color: "#4ffbdf" },
      { label: "#Express", color: "#53baff" },
      { label: "#Node", color: "#eb5e7a" },
      { label: "#Javascript", color: "#4ffbdf" },
      { label: "#Firebase", color: "#53baff" },
      { label: "#Render", color: "#eb5e7a" },
    ],
    link: "https://www.explortern.online/",
  },
  {
    title: "Event Listing Site",
    category: "Web App",
    description:
      "This is a web application that help manage listing of events and selling tickets with a braintree credit payment system..",
    image: "/projects/event.png", // Replace with your image path
    tags: [
      { label: "#react", color: "#53baff" },
      { label: "#Express", color: "#41e3a3" },
      { label: "#MongoDB", color: "#eb5e7a" },
      { label: "#react", color: "#53baff" },
      { label: "#Node", color: "#41e3a3" },
      { label: "#Javascript", color: "#eb5e7a" },
    ],
    link: "https://event-listing-46bb7.web.app/",
  },
  {
    title: "Business Management Software",
    category: "Web App",
    description: "A desktop application designed to streamline inventory management, track products, and monitor purchases. Built with a user-friendly interface to simplify business operations.",
    image: "/projects/business.png", // Replace with your image path
    tags: [
      { label: "#PyQt", color: "#6eaaff" },
      { label: "#QtDesigner", color: "#41e3a3" },
      { label: "#python", color: "#ff63f6" },
      { label: "#MySQL", color: "#eb5e7a" },
    ],
    link: "https://github.com/qauntico/Business-application-.git",
  },
  {
    title: "Note Taking Application",
    category: "Desktop App",
    description: "A customize note taking application",
    image: "/projects/note.png", // Replace with your image path
    tags: [
      { label: "#PyQt", color: "#6eaaff" },
      { label: "#MySQL", color: "#41e3a3" },
      { label: "#QtDesigner", color: "#ff63f6" },
      { label: "#Python", color: "#eb5e7a" },
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
    <section className={styles.section} id="project">
      {/* Animated intro */}
      <motion.div
        className={styles.intro}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p className={styles.subtitle} variants={fadeInUp}>
          My work
        </motion.p>
        <motion.h2 className={styles.projectTitle} variants={fadeInUp}>
          Projects
        </motion.h2>
        <motion.p className={styles.description} variants={fadeInUp}>
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
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
