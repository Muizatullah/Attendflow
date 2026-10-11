import Reveal from '../reveal/Reveal.jsx';
import { WHY_IT_MATTERS_POINTS } from '../../data/content';
import styles from './WhyItMatters.module.css';

const WhyItMatters = () => (
  <section className={styles.section}>
    <Reveal as="div" className={styles.card}>
      <h2>Why It Matters</h2>

      <div className={styles.grid}>
        {WHY_IT_MATTERS_POINTS.map(({ icon: Icon, title, description }, index) => (
          <Reveal as="div" key={title} className={styles.point} delay={index * 80}>
            <span className={styles.iconWrap}>
              <Icon size={20} />
            </span>
            <h3>{title}</h3>
            <p>{description}</p>
          </Reveal>
        ))}
      </div>
    </Reveal>
  </section>
);

export default WhyItMatters;
