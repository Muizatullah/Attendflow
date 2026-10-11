import { useState } from 'react';
import Reveal from '../../components/reveal/Reveal.jsx';
import Button from '../../components/button/Button.jsx';
import {
  HelpCircleIcon,
  ChevronDownIcon,
  MailIcon,
  PhoneIcon,
  BotIcon,
  SendIcon,
} from '../../components/icons/Icons.jsx';
import { FAQ_ITEMS } from '../../data/content.js';
import { Link } from 'react-router';
import styles from './HelpSupport.module.css';

const HelpSupport = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [sent, setSent] = useState(false);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    window.setTimeout(() => setSent(false), 2600);
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className={styles.headerIcon}>
          <HelpCircleIcon size={22} />
        </span>
        <div>
          <h1>Help &amp; Support</h1>
          <p>Find answers to common questions, or reach out to the AttendFlow team.</p>
        </div>
      </div>

      <div className={styles.layout}>
        <Reveal as="section" className={styles.card}>
          <h2 className={styles.cardTitle}>Frequently Asked Questions</h2>

          <div className={styles.faqList}>
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.question} className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}>
                  <button type="button" className={styles.faqQuestion} onClick={() => toggle(index)}>
                    <span>{item.question}</span>
                    <span className={styles.faqChevron}>
                      <ChevronDownIcon size={16} />
                    </span>
                  </button>
                  <div className={styles.faqAnswerWrap}>
                    <p className={styles.faqAnswer}>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <div className={styles.side}>
          <Reveal as="div" className={styles.aiCard} delay={60}>
            <span className={styles.aiIcon}>
              <BotIcon size={18} />
            </span>
            <p className={styles.aiTitle}>Ask AttendFlow AI</p>
            <p className={styles.aiText}>
              Get instant answers about your attendance, courses, or how the app works — any time.
            </p>
            <Button as={Link} to="/dashboard/ai-assistant" size="sm" variant="secondary">
              Open AI Assistant
            </Button>
          </Reveal>

          <Reveal as="div" className={styles.contactCard} delay={110}>
            <p className={styles.cardTitleSmall}>Still need help?</p>

            <div className={styles.contactRow}>
              <span className={styles.contactIcon}>
                <MailIcon size={15} />
              </span>
              <div>
                <p className={styles.contactLabel}>Email support</p>
                <p className={styles.contactValue}>support@attendflow.app</p>
              </div>
            </div>

            <div className={styles.contactRow}>
              <span className={styles.contactIcon}>
                <PhoneIcon size={15} />
              </span>
              <div>
                <p className={styles.contactLabel}>Call us</p>
                <p className={styles.contactValue}>+234 701 234 5678</p>
              </div>
            </div>

            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <textarea placeholder="Describe your issue..." rows={3} required />
              <button type="submit" className={styles.contactSubmit}>
                <span>Send Message</span>
                <SendIcon size={14} />
              </button>
              {sent && <p className={styles.sentNote}>Message sent — we'll get back to you shortly.</p>}
            </form>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
