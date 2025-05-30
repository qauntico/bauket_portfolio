// components/Navbar.tsx
"use client";

import { useState } from "react";
import styles from "./navbar.module.css";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/">
          <img src="/vercel.svg" alt="Logo" className={styles.logo} />
        </Link>

        <button className={styles.menuBtn} onClick={toggleMenu}>
          <Menu size={24} />
        </button>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#overview">Overview</Link></li>
          <li><Link href="#work">Work Experiences</Link></li>
          <li><Link href="#project">Projects</Link></li>
          <li><Link href="#contact">Contact</Link></li>
          <li><Link href="#">Resume</Link></li>
        </ul>
      </div>
    </nav>
  );
}