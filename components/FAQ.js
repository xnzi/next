import { useState } from 'react';
import styles from './FAQ.module.css';

const faqData = [
  {
    question: "What is Konsort-ff?",
    answer:
      "Konsort-ff is a decentralized consortium platform enabling organizations to collaborate securely and transparently using blockchain technology.",
  },
  {
    question: "How do I join the consortium?",
    answer:
      "You can join by completing the application form in the Contact section. Our team will review your application and get in touch.",
  },
  {
    question: "When does the presale start?",
    answer:
      "The presale is live! Check the hero section for details and participate using the integrated presale DApp.",
  },
  {
    question: "What are the benefits of joining?",
    answer:
      "Members receive early access to new tools, shared governance, and opportunities to co-develop innovative solutions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = idx => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={styles.faqSection} id="faq">
      <h2 className={styles.faqTitle}>FAQ</h2>
      <div className={styles.faqList}>
        {faqData.map((item, idx) => (
          <div
            key={idx}
            className={`${styles.faqItem} ${
              openIndex === idx ? styles.open : ""
            }`}
          >
            <button
              className={styles.faqQuestion}
              onClick={() => handleToggle(idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`faq${idx}-answer`}
            >
              {item.question}
              <span className={styles.arrow}>
                {openIndex === idx ? "▲" : "▼"}
              </span>
            </button>
            <div
              id={`faq${idx}-answer`}
              className={styles.faqAnswer}
              style={{
                maxHeight: openIndex === idx ? "200px" : "0",
                padding: openIndex === idx ? "1rem" : "0 1rem",
              }}
            >
              {openIndex === idx && <p>{item.answer}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
