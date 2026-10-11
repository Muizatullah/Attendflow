import styles from './RingProgress.module.css';

/**
 * A circular progress ring. Pass `percent` (0-100); `label`/`sublabel`
 * render centered text (defaults to "`percent`%" and nothing).
 */
const RingProgress = ({
  percent = 0,
  size = 72,
  strokeWidth = 8,
  tone = 'green',
  label,
  sublabel,
  showLabel = true,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(100, percent));
  const offset = circumference - (clamped / 100) * circumference;

  return (
    <div className={styles.wrap} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={styles.svg}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          className={styles.track}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={`${styles.progress} ${styles[`tone-${tone}`]}`}
        />
      </svg>
      {showLabel && (
        <span className={styles.label}>
          <strong>{label ?? `${Math.round(clamped)}%`}</strong>
          {sublabel && <span>{sublabel}</span>}
        </span>
      )}
    </div>
  );
};

export default RingProgress;
