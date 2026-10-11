import Reveal from '../reveal/Reveal.jsx';
import { LANDING_STATS } from '../../data/content';
import styles from './About.module.css';

const About = () => (
  <section id="about" className={styles.section}>
    <div className={styles.inner}>
      <Reveal as="div" className={styles.copy}>
        <h2>Built for classrooms, not just for demos</h2>
        <p>
          Roll call by voice or paper sheet doesn't scale past a few dozen
          students, and it's easy to game. AttendFlow was built for
          a practical answer: a QR code that only exists for
          one session, and a location check that confirms a student was
          actually in the room.
        </p>
        <p>
          The result is an attendance record lecturers can trust and
          students can't work around — without adding friction to how a
          class actually runs.
        </p>
      </Reveal>

      <Reveal as="dl" className={styles.stats} delay={150}>
        {LANDING_STATS.map(({ value, label }) => (
          <div key={label} className={styles.stat}>
            <dt>{value}</dt>
            <dd>{label}</dd>
          </div>
        ))}
      </Reveal>
    </div>
  </section>
);

export default About;
