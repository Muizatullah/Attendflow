import QrCode from '../qr-code/QrCode.jsx';
import { BellIcon, CalendarIcon, MoreVerticalIcon, ChevronDownIcon } from '../icons/Icons.jsx';
import { DASHBOARD_SIDEBAR_ITEMS, DASHBOARD_STATS, DASHBOARD_SESSIONS } from '../../data/content';
import logoMark from '../../assets/images/logo-mark.svg';
import avatarLecturer from '../../assets/images/avatar-lecturer.svg';
import styles from './DashboardPreview.module.css';

const DashboardPreview = () => (
  <div className={styles.frame}>
    <div className={styles.topBar}>
      <div className={styles.topBarBrand}>
        <img src={logoMark} alt="" width={26} height={26} className={styles.topBarLogo} />
        <span>AttendFlow</span>
      </div>
      <div className={styles.topBarActions}>
        <button type="button" className={styles.iconButton} aria-label="Notifications">
          <BellIcon size={18} />
          <span className={styles.badge}>2</span>
        </button>
        <button type="button" className={styles.userChip}>
          <img src={avatarLecturer} alt="" width={30} height={30} className={styles.userAvatar} />
          <span className={styles.userInfo}>
            <span className={styles.userName}>Dr. Adewale</span>
            <span className={styles.userRole}>Lecturer</span>
          </span>
          <ChevronDownIcon size={14} />
        </button>
      </div>
    </div>

    <div className={styles.body}>
      <aside className={styles.sidebar}>
        <ul className={styles.sidebarList}>
          {DASHBOARD_SIDEBAR_ITEMS.map(({ label, icon: Icon, active }) => (
            <li key={label}>
              <span className={`${styles.sidebarItem} ${active ? styles.sidebarItemActive : ''}`}>
                <Icon size={17} />
                {label}
              </span>
            </li>
          ))}
        </ul>
      </aside>

      <main className={styles.main}>
        <div className={styles.mainHeader}>
          <div>
            <p className={styles.welcome}>Welcome back,</p>
            <h3 className={styles.greeting}>Good morning, Dr. Adewale 👋</h3>
            <p className={styles.subtext}>Here's what's happening with your classes today.</p>
          </div>
          <div className={styles.dateChip}>
            <CalendarIcon size={16} />
            <span>
              Feb 9, 2026
              <br />
              <span className={styles.dateChipDay}>Monday</span>
            </span>
          </div>
        </div>

        <div className={styles.statGrid}>
          {DASHBOARD_STATS.map(({ label, value, delta, icon: Icon, tone }) => (
            <div key={label} className={styles.statCard}>
              <span className={`${styles.statLabel} ${styles[`tone-${tone}`]}`}>{label}</span>
              <span className={styles.statValue}>{value}</span>
              <div className={styles.statFooter}>
                <span className={styles.statDelta}>{delta}</span>
                <span className={`${styles.statIcon} ${styles[`iconBg-${tone}`]}`}>
                  <Icon size={15} />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.sessionsHeader}>
          <h4>Today's Sessions</h4>
          <span className={styles.viewAll}>View all</span>
        </div>

        <div className={styles.sessionList}>
          {DASHBOARD_SESSIONS.map((session) => (
            <div key={session.course} className={styles.sessionCard}>
              <div className={styles.sessionTime}>{session.time}</div>
              <div className={styles.sessionInfo}>
                <p className={styles.sessionCourse}>{session.course}</p>
                <p className={styles.sessionMeta}>{session.meta}</p>
                <p className={styles.sessionRoom}>{session.room}</p>
              </div>
              <span
                className={`${styles.statusPill} ${
                  session.status === 'Active' ? styles.statusActive : styles.statusUpcoming
                }`}
              >
                {session.status}
              </span>
              <QrCode value={session.course} size={52} />
              <button type="button" className={styles.moreButton} aria-label="More options">
                <MoreVerticalIcon size={16} />
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  </div>
);

export default DashboardPreview;
