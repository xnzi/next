import styles from './Roadmap.module.css';

const roadmapData = [
  {
    date: "Q2 2024",
    title: "Consortium Foundation",
    desc: "Formation of Konsort-ff, initial partner onboarding, and governance model establishment.",
  },
  {
    date: "Q3 2024",
    title: "Platform Launch",
    desc: "Release MVP, open membership, and begin cross-organization collaboration.",
  },
  {
    date: "Q4 2024",
    title: "Token Presale",
    desc: "Launch public presale for the native token, integrate presale DApp.",
  },
  {
    date: "Q1 2025",
    title: "Ecosystem Growth",
    desc: "Expand partner network, deploy first smart contract utilities, and start community programs.",
  },
  {
    date: "Q2 2025",
    title: "Decentralized Governance",
    desc: "Implement DAO voting and distribute governance tokens.",
  },
];

export default function Roadmap() {
  return (
    <section className={styles.roadmapSection} id="roadmap">
      <h2 className={styles.roadmapTitle}>Roadmap</h2>
      <div className={styles.timeline}>
        {roadmapData.map((step, i) => (
          <div className={styles.timelineItem} key={i}>
            <div className={styles.timelineMarker}></div>
            <div className={styles.timelineContent}>
              <span className={styles.timelineDate}>{step.date}</span>
              <h3 className={styles.timelineStepTitle}>{step.title}</h3>
              <p className={styles.timelineDesc}>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
