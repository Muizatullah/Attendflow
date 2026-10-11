import Reveal from '../reveal/Reveal.jsx';
import { INFO_TRIO_ITEMS } from '../../data/content';
import styles from './InfoTrio.module.css';

const InfoTrio = () => (
  <section className={styles.section}>
    <div className={styles.grid}>
      {INFO_TRIO_ITEMS.map(({ icon: Icon, title, description, highlight }, index) => (
        <Reveal
          as="div"
          key={title}
          delay={index * 90}
          className={`${styles.card} ${highlight ? styles.cardHighlight : ''}`}
        >
          <span className={styles.iconWrap}>
            <Icon size={20} />
          </span>
          <h3>{title}</h3>
          <p>{description}</p>
        </Reveal>
      ))}
    </div>
  </section>
);

export default InfoTrio;
