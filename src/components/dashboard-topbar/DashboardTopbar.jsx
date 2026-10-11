import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import {
  SearchIcon,
  BellIcon,
  ChevronDownIcon,
  MenuIcon,
  UserIcon,
  SettingsIcon,
  LogOutIcon,
} from '../icons/Icons.jsx';
import { STUDENT_PROFILE, NOTIFICATIONS } from '../../data/content.js';
import styles from './DashboardTopbar.module.css';

const DashboardTopbar = ({ onMenuClick, title }) => {
  const [notifOpen, setNotifOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const notifRef = useRef(null);
  const userRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) setNotifOpen(false);
      if (userRef.current && !userRef.current.contains(event.target)) setUserOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <header className={styles.topbar}>
      <button type="button" className={styles.menuToggle} onClick={onMenuClick} aria-label="Open menu">
        <MenuIcon size={20} />
      </button>

      {title ? (
        <h1 className={styles.mobileTitle}>{title}</h1>
      ) : (
        <label className={styles.search}>
          <SearchIcon size={17} />
          <input type="search" placeholder="Search for classes, courses, or anything..." />
        </label>
      )}

      <div className={styles.actions}>
        <div className={styles.notifWrap} ref={notifRef}>
          <button
            type="button"
            className={styles.iconButton}
            onClick={() => setNotifOpen((prev) => !prev)}
            aria-label="Notifications"
          >
            <BellIcon size={19} />
            <span className={styles.dot} />
          </button>

          {notifOpen && (
            <div className={styles.notifPanel}>
              <div className={styles.notifHead}>
                <p>Notifications</p>
                <Link to="/dashboard" onClick={() => setNotifOpen(false)}>
                  View all
                </Link>
              </div>
              <ul>
                {NOTIFICATIONS.slice(0, 4).map(({ icon: Icon, tone, title: t, message, time }) => (
                  <li key={t}>
                    <span className={`${styles.notifIcon} ${styles[`tone-${tone}`]}`}>
                      <Icon size={14} />
                    </span>
                    <span>
                      <strong>{t}</strong>
                      <p>{message}</p>
                      <time>{time}</time>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className={styles.userWrap} ref={userRef}>
          <button type="button" className={styles.userChip} onClick={() => setUserOpen((prev) => !prev)}>
            <img src={STUDENT_PROFILE.avatar} alt="" width={36} height={36} className={styles.avatar} />
            <span className={styles.userInfo}>
              <span className={styles.userName}>{STUDENT_PROFILE.name}</span>
              <span className={styles.userRole}>{STUDENT_PROFILE.role}</span>
            </span>
            <ChevronDownIcon size={15} />
          </button>

          {userOpen && (
            <div className={styles.userPanel}>
              <Link to="/dashboard/settings" onClick={() => setUserOpen(false)}>
                <UserIcon size={15} /> My Profile
              </Link>
              <Link to="/dashboard/settings" onClick={() => setUserOpen(false)}>
                <SettingsIcon size={15} /> Settings
              </Link>
              <Link to="/" onClick={() => setUserOpen(false)} className={styles.logout}>
                <LogOutIcon size={15} /> Log Out
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardTopbar;
