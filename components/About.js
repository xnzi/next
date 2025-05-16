import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.aboutCard}>
        <h2 className={styles.aboutTitle}>About the Consortium</h2>
        <p className={styles.aboutDesc}>
          Konsort-ff is a next-generation blockchain consortium, uniting organizations and innovators to build secure, transparent, and collaborative ecosystems. Our goal is to foster shared governance, drive technological advancement, and empower our members to unlock new business opportunities through decentralized technologies.
        </p>
        <p className={styles.aboutDesc}>
          With a strong focus on interoperability and real-world impact, Konsort-ff provides the foundation for trustworthy collaborations, transparent operations, and sustainable growth in the digital economy.
        </p>
      </div>
    </section>
  );
}
