'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './workExperience.module.css';

const experiences = [
  {
    title: 'Web Development',
    summary: 'Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points.',
    details: [
      'Custom Website Development',
      'Frontend & Backend Solutions',
      'E-commerce Development',
      'API Integration',
    ],
  },
  {
    title: 'UI/UX Design',
    summary: 'Creating intuitive and engaging user experiences through research-driven design solutions.',
    details: [
        'Custom Website Development',
      'Frontend & Backend Solutions',
      'E-commerce Development',
      'API Integration',
    ],
  },
  {
    title: 'Content Writing',
    summary: 'Crafting compelling content that engages audiences and drives meaningful interactions.',
    details: [
        'Custom Website Development',
      'Frontend & Backend Solutions',
      'E-commerce Development',
      'API Integration',
    ],
  }
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
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const handleArrowClick = (idx: number) => {
    setOpenIdx(idx === openIdx ? null : idx);
  };

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
        <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
          Overview
        </motion.h2>
        <motion.p className={styles.description} variants={fadeInUp}>
          Skilled full-stack developer proficient in JavaScript, TypeScript, Python, React, Node.js, and Django. Experienced data scientist and machine learning engineer, adept at leveraging cutting-edge techniques to drive impactful business outcomes. Quick learner and collaborative partner, dedicated to creating efficient, scalable, and user-friendly solutions.
        </motion.p>
      </motion.div>
        <div className={styles.wrapper}>
      {experiences.map((exp, idx) => {
        const isOpen = openIdx === idx;
        const isHovered = hoverIdx === idx;
        return (
          <div
            className={`${styles.card} ${isOpen ? styles.open : ''} ${isHovered && !isOpen ? styles.hovered : ''}`}
            key={exp.title}
            onMouseEnter={() => setHoverIdx(idx)}
            onMouseLeave={() => setHoverIdx(null)}
          >
            <div className={styles.number}>{String(idx + 1).padStart(2, '0')}</div>
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
              className={`${styles.arrowBtn} ${isOpen ? styles.arrowOpen : ''}`}
              onClick={() => handleArrowClick(idx)}
              aria-label="Expand experience"
              tabIndex={0}
              type="button"
            >
              <svg viewBox="0 0 24 24" width={24} height={24}>
                <circle cx="12" cy="12" r="12" fill="url(#grad)" />
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A084E8" />
                    <stop offset="1" stopColor="#6F61E8" />
                  </linearGradient>
                </defs>
                <path d="M9 8l4 4-4 4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        );
      })}
    </div>
    </section>
  );
}