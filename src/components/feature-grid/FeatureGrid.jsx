import Reveal from '../reveal/Reveal.jsx';
import { ArrowRightIcon } from '../icons/Icons.jsx';
import { FEATURE_GRID_ITEMS } from '../../data/content';
import styles from './FeatureGrid.module.css';

const FeatureGrid = () => (
  <section id="features" className={styles.section}>
    <div className={styles.inner}>
      <Reveal as="div" className={styles.heading}>
        <h2>Everything You Need</h2>
        <p>
          Discover all the tools and capabilities that make AttendFlow the
          perfect solution for modern attendance management.
        </p>
      </Reveal>

      <div className={styles.grid}>
        {FEATURE_GRID_ITEMS.map(({ icon: Icon, tone, title, description, isNew }, index) => (
          <Reveal as="article" key={title} className={styles.card} delay={(index % 4) * 60}>
            <div className={styles.cardTop}>
              <span className={`${styles.iconWrap} ${styles[`tone-${tone}`]}`}>
                <Icon size={20} />
              </span>
              {isNew && <span className={styles.newTag}>New</span>}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href="#home" className={styles.learnMore}>
              Learn more
              <ArrowRightIcon size={14} />
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureGrid;
