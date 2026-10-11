import { PaperPlaneIcon } from '../icons/Icons.jsx';
import Reveal from '../reveal/Reveal.jsx';
import styles from './PageHero.module.css';

/**
 * Centered hero heading used by content pages (How It Works, etc.)
 * `title` accepts a ReactNode so callers can wrap the accent word themselves,
 * e.g. <>How <span className="accent">AttendFlow</span> Works</>
 */
const PageHero = ({ eyebrow, title, subtitle }) => (
  <section className={styles.hero}>
    <div className={styles.dots} aria-hidden="true" />
    <PaperPlaneIcon size={30} className={styles.plane} />
    <div className={styles.circle} aria-hidden="true" />

    <Reveal as="div" className={styles.inner}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </Reveal>
  </section>
);

export default PageHero;
