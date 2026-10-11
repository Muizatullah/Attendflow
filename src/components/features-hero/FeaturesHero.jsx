import QrCode from '../qr-code/QrCode.jsx';
import Reveal from '../reveal/Reveal.jsx';
import { CheckIcon } from '../icons/Icons.jsx';
import { FEATURES_HERO_SIDEBAR_ICONS, FEATURES_HERO_STATS } from '../../data/content';
import styles from './FeaturesHero.module.css';

// A gentle wave path used for the "Attendance Overview" mini chart
const CHART_PATH = 'M0 34 C 14 10, 28 42, 42 22 S 70 6, 84 26 S 112 40, 126 14 S 154 4, 168 20';

const FeaturesHero = () => (
  <section className={styles.hero}>
    <div className={styles.pattern} aria-hidden="true" />

    <div className={styles.inner}>
      <Reveal as="div" className={styles.copy}>
        <span className={styles.badge}>
          <CheckIcon size={13} />
          Secure · Reliable · Intelligent
        </span>

        <h1 className={styles.headline}>
          Powerful Features for
          <br />
          <span className={styles.headlineAccent}>Smarter</span> Attendance
        </h1>

        <p className={styles.lead}>
          AttendFlow is packed with features that make attendance
          management simple, accurate, and intelligent for everyone —
          lecturers, students, and department admins alike.
        </p>
      </Reveal>

      <Reveal as="div" className={styles.illustration} delay={150}>
        <div className={styles.dashboardCard}>
          <div className={styles.dashboardSidebar}>
            {FEATURES_HERO_SIDEBAR_ICONS.map((Icon, index) => (
              <span
                key={index}
                className={`${styles.sidebarDot} ${index === 1 ? styles.sidebarDotActive : ''}`}
              >
                <Icon size={14} />
              </span>
            ))}
          </div>

          <div className={styles.dashboardMain}>
            <p className={styles.dashboardTitle}>Dashboard</p>

            <div className={styles.statRow}>
              {FEATURES_HERO_STATS.map(({ label, value, icon: Icon, tone }) => (
                <div key={label} className={styles.statChip}>
                  <span className={styles.statChipLabel}>{label}</span>
                  <div className={styles.statChipFooter}>
                    <span className={styles.statChipValue}>{value}</span>
                    <span className={`${styles.statChipIcon} ${styles[`tone-${tone}`]}`}>
                      <Icon size={11} />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className={styles.chartLabel}>Attendance Overview</p>
            <svg viewBox="0 0 168 40" className={styles.chart} preserveAspectRatio="none">
              <path d={CHART_PATH} fill="none" stroke="var(--color-primary)" strokeWidth="2.4" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <div className={styles.phoneCard}>
          <p className={styles.phoneTitle}>Scan to Mark Attendance</p>
          <QrCode value="CSC 301" size={92} />
          <p className={styles.phoneSession}>Session: CSC 301</p>
          <span className={styles.phonePill}>Session Active</span>
        </div>
      </Reveal>
    </div>
  </section>
);

export default FeaturesHero;
