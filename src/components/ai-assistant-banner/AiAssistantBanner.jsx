import Reveal from '../reveal/Reveal.jsx';
import { BotIcon, ArrowRightIcon } from '../icons/Icons.jsx';
import styles from './AiAssistantBanner.module.css';

const AiAssistantBanner = () => (
  <section className={styles.section}>
    <Reveal as="div" className={styles.card}>
      <span className={styles.botWrap}>
        <BotIcon size={30} />
      </span>

      <div className={styles.copy}>
        <h2>Need Help? Ask Our AI Assistant</h2>
        <p>Get instant answers to your questions about attendance, reports, sessions, and more.</p>
      </div>

      <button type="button" className={styles.cta}>
        Chat with AI Assistant
        <ArrowRightIcon size={16} />
      </button>
    </Reveal>
  </section>
);

export default AiAssistantBanner;
