import styles from './ProgressBar.module.css';

const ProgressBar = ({ percent = 0, tone = 'green', size = 'md' }) => (
  <div className={`${styles.track} ${styles[`size-${size}`]}`}>
    <div
      className={`${styles.fill} ${styles[`tone-${tone}`]}`}
      style={{ width: `${Math.max(0, Math.min(100, percent))}%` }}
    />
  </div>
);

export default ProgressBar;
