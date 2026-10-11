import { Link } from 'react-router';
import Button from '../button/Button.jsx';
import DashboardPreview from '../dashboard-preview/DashboardPreview.jsx';
import Reveal from '../reveal/Reveal.jsx';
import { ArrowRightIcon, PlayIcon } from '../icons/Icons.jsx';
import { HERO_BADGES, HERO_AVATARS } from '../../data/content';
import styles from './Hero.module.css';

const Hero = () => (
  <section id="home" className={styles.hero}>
    <div className={styles.pattern} aria-hidden="true" />
    <div className={styles.inner}>
      <Reveal as="div" className={styles.copy}>
        <ul className={styles.badgeRow}>
          {HERO_BADGES.map(({ icon: Icon, label }) => (
            <li key={label} className={styles.badge}>
              <Icon size={13} />
              {label}
            </li>
          ))}
        </ul>

        <h1 className={styles.headline}>
          Attendance,
          <br />
          <span className={styles.headlineAccent}>Verified Instantly.</span>
        </h1>

        <p className={styles.lead}>
          AttendFlow helps universities manage attendance using QR code
          scanning and GPS verification, cutting out proxy attendance while
          making roll call faster and far more accurate.
        </p>

        <div className={styles.ctaRow}>
          <Button as={Link} to="/signup" variant="primary" icon={<ArrowRightIcon size={17} />}>
            Get Started Now
          </Button>
          <Button as="a" href="#how-it-works" variant="secondary" icon={<PlayIcon size={17} />}>
            Watch Demo
          </Button>
        </div>

        <div className={styles.trust}>
          <div className={styles.avatarStack}>
            {HERO_AVATARS.map((src, index) => (
              <img key={src} src={src} alt="" width={40} height={40} style={{ zIndex: HERO_AVATARS.length - index }} />
            ))}
          </div>
          <p>
            Trusted by <strong>50+</strong> university departments
          </p>
        </div>
      </Reveal>

      <Reveal as="div" className={styles.previewColumn} delay={150}>
        <DashboardPreview />
      </Reveal>
    </div>
  </section>
);

export default Hero;
