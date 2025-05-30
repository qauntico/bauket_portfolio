"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import styles from "./overview.module.css";

const services = [
  { title: "Web Developer", icon: "/icons/programmer.png" },
  { title: "Mobile Developer", icon: "/icons/mobile-phone.png" },
  { title: "Backend Developer", icon: "/icons/backend.png" },
  { title: "Database", icon: "/icons/database.png" },
  { title: "AWS", icon: "/icons/hosting.png" },
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

const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function OverviewSection() {
  return (
    <section className={styles.section} id="overview">
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
        <motion.h2 className={styles.title} variants={fadeInUp}>
          Overview
        </motion.h2>
        <motion.p className={styles.description} variants={fadeInUp}>
          Skilled full-stack developer proficient in JavaScript, TypeScript,
          Python, React, Node.js. Experienced cloud and
          software engineer, adept at leveraging cutting-edge techniques
          to drive impactful business outcomes. Quick learner and collaborative
          partner, dedicated to creating efficient, scalable, and user-friendly
          solutions.
        </motion.p>
      </motion.div>

      {/* Animated cards */}
      <div className={styles.cards}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.05}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              className={styles.card}
            >
              <Image
                src={service.icon}
                alt={service.title}
                className={styles.icon}
                width={700}
                height={500}
              />
              <h3 className={styles.cardTitle}>{service.title}</h3>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
