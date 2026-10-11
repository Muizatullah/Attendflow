import { useState } from 'react';
import { IdBadgeIcon, MailIcon, ClipboardCheckIcon, SendIcon } from '../icons/Icons.jsx';
import Reveal from '../reveal/Reveal.jsx';
import { CONTACT_SUBJECTS } from '../../data/content';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <Reveal as="div" className={styles.wrap} delay={100}>
      <h2>Send Us a Message</h2>
      <p className={styles.subtext}>Fill out the form below and we'll get back to you shortly.</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.field}>
          <span>
            <IdBadgeIcon size={14} /> Full Name *
          </span>
          <input type="text" name="name" placeholder="Enter your full name" required />
        </label>

        <label className={styles.field}>
          <span>
            <MailIcon size={14} /> Email Address *
          </span>
          <input type="email" name="email" placeholder="Enter your email address" required />
        </label>

        <label className={styles.field}>
          <span>
            <ClipboardCheckIcon size={14} /> Subject *
          </span>
          <select name="subject" defaultValue="" required>
            <option value="" disabled>
              Select a subject
            </option>
            {CONTACT_SUBJECTS.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </label>

        <label className={styles.field}>
          <span>Message *</span>
          <textarea name="message" rows={5} placeholder="Type your message here..." required />
        </label>

        <button type="submit" className={styles.submit}>
          <SendIcon size={15} />
          Send Message
        </button>

        {submitted && (
          <p className={styles.confirmation} role="status">
            Thanks — your message has been noted. This form is UI-only for now;
            wire it up to your backend when ready.
          </p>
        )}
      </form>
    </Reveal>
  );
};

export default ContactForm;
