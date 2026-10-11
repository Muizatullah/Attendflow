import { Link } from 'react-router';
import Button from '../button/Button.jsx';
import Reveal from '../reveal/Reveal.jsx';
import { LayersIcon, UsersIcon, ArrowRightIcon } from '../icons/Icons.jsx';
import { CORE_VALUES } from '../../data/content';
import teamIllustration from '../../assets/images/illustration-team.svg';
import styles from './ValuesSection.module.css';

const ValuesSection = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <Reveal as="div" className={styles.left}>
        <span className={styles.badge}>
          <LayersIcon size={13} />
          Our Values
        </span>
        <h2>
          What Drives <span className={styles.accent}>Us</span>
        </h2>
        <p className={styles.subtext}>
          Our values guide every decision we make and shape the experience
          we deliver to our users.
        </p>

        <div className={styles.valueGrid}>
          {CORE_VALUES.map(({ icon: Icon, title, description }, index) => (
            <Reveal as="div" key={title} className={styles.value} delay={index * 80}>
              <span className={styles.valueIcon}>
                <Icon size={19} />
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="div" className={styles.right} delay={120}>
        <img src={teamIllustration} alt="" className={styles.teamPhoto} width={420} height={300} />
        <div className={styles.teamCard}>
          <span className={styles.teamBadge}>
            <UsersIcon size={13} />
            Our Team
          </span>
          <p>
            We're a passionate team of developers, designers, and problem
            solvers, united by a shared goal: to make university attendance
            better through technology.
          </p>
          <Button as={Link} to="/contact" variant="primary" size="sm" icon={<ArrowRightIcon size={14} />}>
            Get in Touch
          </Button>
        </div>
      </Reveal>
    </div>
  </section>
);

export default ValuesSection;
