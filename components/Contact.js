import styles from './Contact.module.css';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={styles.contactSection} id="contact">
      <h2 className={styles.contactTitle}>Contact</h2>
      <p className={styles.contactDesc}>
        Have a question or want to join the consortium? Fill out the form below and our team will get back to you!
      </p>
      <div className={styles.contactCard}>
        {!submitted ? (
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
            />
            <button type="submit">Send Message</button>
          </form>
        ) : (
          <div className={styles.successMsg}>
            <h4>Thank you!</h4>
            <p>Your message has been sent. We'll get in touch soon.</p>
          </div>
        )}
      </div>
    </section>
  );
}
