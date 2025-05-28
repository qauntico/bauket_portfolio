"use client";

import styles from "./social.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Socials() {
  const socials = [
    { title: "Github", icon: "/skills/github.png", link: "" },
    { title: "LinkedIn", icon: "/icons/linkedin.png", link: "" },
    { title: "Google", icon: "/icons/google.png", link: "" },
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
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.intro}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className={styles.social}>
          {socials.map((social, index) => (
            <Link key={index} href={social.link}>
              <Image
                src={social.icon}
                alt={social.title}
                width={80}
                height={100}
                className={styles.socialIcon}
              ></Image>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
