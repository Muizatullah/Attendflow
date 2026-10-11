import { SIGNUP_ROLES } from '../../data/content';
import styles from './RoleSelector.module.css';

const RoleSelector = ({ value, onChange }) => (
  <div className={styles.wrap}>
    <p className={styles.label}>Select Your Role</p>
    <div className={styles.grid}>
      {SIGNUP_ROLES.map(({ id, icon: Icon, tone, title, description }) => {
        const isActive = value === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            className={`${styles.card} ${isActive ? styles.cardActive : ''}`}
            aria-pressed={isActive}
          >
            <span className={`${styles.iconWrap} ${styles[`tone-${tone}`]}`}>
              <Icon size={20} />
            </span>
            <span className={styles.title}>{title}</span>
            <span className={styles.description}>{description}</span>
            <span className={`${styles.radio} ${isActive ? styles.radioActive : ''}`} />
          </button>
        );
      })}
    </div>
  </div>
);

export default RoleSelector;
