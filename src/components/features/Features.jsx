import Reveal from '../reveal/Reveal.jsx';
import { LANDING_FEATURES } from '../../data/content';
import styles from './Features.module.css';

const Features = () => (
  <section id="features" className={styles.section}>
    <div className={styles.inner}>
      <Reveal as="div" className={styles.heading}>
        <h2>
          Everything you need for <span className={styles.accent}>fraud-free attendance</span>
        </h2>
        <p>Built for lecture halls, labs, and every class size in between.</p>
      </Reveal>

      <div className={styles.grid}>
        {LANDING_FEATURES.map(({ icon: Icon, tone, title, description }, index) => (
          <Reveal as="article" key={title} className={styles.card} delay={index * 70}>
            <span className={`${styles.iconWrap} ${styles[`tone-${tone}`]}`}>
              <Icon size={22} />
            </span>
            <h3>{title}</h3>
            <p>{description}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
