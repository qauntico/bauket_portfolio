"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./navbar.module.css";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Close menu on click outside
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  // Close menu on link click (for smooth scrolling)
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/">
          <Image src="/logo.png" alt="Logo" className={styles.logo} width={80} height={40} />
        </Link>

        <button className={styles.menuBtn} onClick={toggleMenu}>
          <Menu size={24} />
        </button>

        <ul
          ref={menuRef}
          className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}
        >
          <li><Link href="#home" onClick={handleLinkClick}>Home</Link></li>
          <li><Link href="#overview" onClick={handleLinkClick}>Overview</Link></li>
          <li><Link href="#work" onClick={handleLinkClick}>Work Experiences</Link></li>
          <li><Link href="#project" onClick={handleLinkClick}>Projects</Link></li>
          <li><Link href="#contact" onClick={handleLinkClick}>Contact</Link></li>
          <li><Link href="#" onClick={handleLinkClick}>Resume</Link></li>
        </ul>
      </div>
    </nav>
  );
}