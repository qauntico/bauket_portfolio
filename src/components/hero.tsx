'use client';

import styles from './hero.module.css';
import ThreeDModel from './subComponents/threeDModel';


export default function Hero() {
 
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Left Accent Bar */}
        <div className={styles.accentBar}>
          <div className={styles.dot} />
          <div className={styles.line} />
        </div>

        {/* Text Content */}
        <div className={styles.textBlock}>
          <h1 className={styles.title}>
            Hi, I'm <span className={styles.highlight}>Bauket Fabrice</span>
          </h1>
          <p className={styles.subtitle}>
            A full stack web <br />
            and mobile developer, <br />
            Cloud Engineer
          </p>
        </div>
      </div>
      <div className={styles.threeDModel}>
        <ThreeDModel />
      </div>
    </section>
  );
}