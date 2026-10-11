import Reveal from '../reveal/Reveal.jsx';
import { LANDING_STEPS } from '../../data/content';
import styles from './HowItWorks.module.css';

const HowItWorks = () => (
  <section id="how-it-works" className={styles.section}>
    <div className={styles.inner}>
      <Reveal as="div" className={styles.heading}>
        <h2>How AttendFlow works</h2>
        <p>Three steps between opening a class and having a verified attendance record.</p>
      </Reveal>

      <ol className={styles.steps}>
        {LANDING_STEPS.map(({ icon: Icon, title, description }, index) => (
          <Reveal as="li" key={title} className={styles.step} delay={index * 100}>
            <div className={styles.stepMarker}>
              <span className={styles.stepIndex}>{index + 1}</span>
              <Icon size={20} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default HowItWorks;
