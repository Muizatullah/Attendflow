import Reveal from '../reveal/Reveal.jsx';
import { UsersIcon, ShieldIcon } from '../icons/Icons.jsx';
import { BRAND_TAGLINE } from '../../data/content';
import studentIllustration from '../../assets/images/illustration-student-backpack.svg';
import styles from './AboutHero.module.css';

const AboutHero = () => (
  <section className={styles.hero}>
    <div className={styles.inner}>
      <Reveal as="div" className={styles.copy}>
        <span className={styles.badge}>
          <UsersIcon size={13} />
          About Us
        </span>

        <h1 className={styles.headline}>
          Building a Smarter
          <br />
          <span className={styles.accent}>Attendance Future</span>
        </h1>

        <p className={styles.lead}>
          At AttendFlow, we're on a mission to transform the way universities
          manage attendance. We combine technology, verification, and a
          user-friendly experience to create a smarter, safer, and more
          efficient attendance system for everyone.
        </p>

        <p className={styles.tagline}>{BRAND_TAGLINE}</p>
      </Reveal>

      <Reveal as="div" className={styles.photoWrap} delay={150}>
        <img src={studentIllustration} alt="" className={styles.photo} width={420} height={420} />
        <div className={styles.floatCard}>
          <span className={styles.floatIcon}>
            <ShieldIcon size={17} />
          </span>
          <p>Smarter Systems for Better Learning</p>
        </div>
      </Reveal>
    </div>
  </section>
);

export default AboutHero;
