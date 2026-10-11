import styles from './StatusPill.module.css';

const TONE_BY_STATUS = {
  Present: 'green',
  Active: 'green',
  Verified: 'green',
  Absent: 'red',
  Missed: 'red',
  Upcoming: 'blue',
  Pending: 'amber',
};

const StatusPill = ({ status, tone }) => (
  <span className={`${styles.pill} ${styles[`tone-${tone || TONE_BY_STATUS[status] || 'grey'}`]}`}>{status}</span>
);

export default StatusPill;
