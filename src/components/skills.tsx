"use client";
import styles from "./skills.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useEffect } from "react";

const skills = [
  { title: "AWS", icon: "/skills/aws.png" },
  { title: "Docker", icon: "/skills/docker.png" },
  { title: "Kurbernetes", icon: "/skills/kurbernetes.png" },
  { title: "Firebase", icon: "/skills/firebase.png" },
  { title: "Github", icon: "/skills/github.png" },
  { title: "Javascript", icon: "/skills/javascript.png" },
  { title: "React Native", icon: "/skills/native.png" },
  { title: "Node js", icon: "/skills/node.png" },
  { title: "Python", icon: "/skills/python.png" },
  { title: "React", icon: "/skills/react.png" },
  { title: "Typescript", icon: "/skills/typescript.png" },
];
export default function Skills() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.2, // Fire when 20% of the card is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: {
      scale: 0.5,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className={styles.section}>
      <motion.div
        className={styles.intro}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
          Skills
        </motion.h2>
      </motion.div>
      <div className={styles.skillsSection}>
        <div className={styles.allSkills}>
          {skills.map((skill, index) => (
            <motion.div
              ref={ref}
              className={styles.cardSkills}
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={controls}
            >
              <Image
                className={styles.icon}
                src={skill.icon}
                alt={skill.title}
                width={65}
                height={70}
              />
              <h6>{skill.title}</h6>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
