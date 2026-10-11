import { useState } from 'react';
import Reveal from '../../components/reveal/Reveal.jsx';
import Button from '../../components/button/Button.jsx';
import {
  SettingsIcon,
  UserIcon,
  CameraIcon,
  BellIcon,
  KeyIcon,
  LockIcon,
  LogOutIcon,
  CheckIcon,
} from '../../components/icons/Icons.jsx';
import { STUDENT_PROFILE, NOTIFICATION_PREFERENCES } from '../../data/content.js';
import styles from './Settings.module.css';

const Settings = () => {
  const [prefs, setPrefs] = useState(NOTIFICATION_PREFERENCES);
  const [saved, setSaved] = useState(false);

  const togglePref = (id) => {
    setPrefs((prev) => prev.map((pref) => (pref.id === id ? { ...pref, enabled: !pref.enabled } : pref)));
  };

  const handleSave = (event) => {
    event.preventDefault();
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2200);
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className={styles.headerIcon}>
          <SettingsIcon size={22} />
        </span>
        <div>
          <h1>Settings</h1>
          <p>Manage your profile, notifications, and account security.</p>
        </div>
      </div>

      <div className={styles.layout}>
        <div className={styles.main}>
          <Reveal as="section" className={styles.card}>
            <div className={styles.cardHead}>
              <span className={styles.cardIcon}>
                <UserIcon size={16} />
              </span>
              <div>
                <h2>Profile</h2>
                <p>Your personal and academic information.</p>
              </div>
            </div>

            <div className={styles.profileRow}>
              <div className={styles.avatarWrap}>
                <img src={STUDENT_PROFILE.avatar} alt="" className={styles.avatar} />
                <button type="button" className={styles.avatarEdit} aria-label="Change photo">
                  <CameraIcon size={14} />
                </button>
              </div>
              <div>
                <p className={styles.profileName}>{STUDENT_PROFILE.name}</p>
                <p className={styles.profileMeta}>
                  {STUDENT_PROFILE.role} &middot; {STUDENT_PROFILE.studentId}
                </p>
              </div>
            </div>

            <form className={styles.formGrid} onSubmit={handleSave}>
              <label className={styles.field}>
                <span>Full name</span>
                <input type="text" defaultValue={STUDENT_PROFILE.name} />
              </label>
              <label className={styles.field}>
                <span>Email address</span>
                <input type="email" defaultValue={STUDENT_PROFILE.email} />
              </label>
              <label className={styles.field}>
                <span>Department</span>
                <input type="text" defaultValue={STUDENT_PROFILE.department} />
              </label>
              <label className={styles.field}>
                <span>Level</span>
                <input type="text" defaultValue={STUDENT_PROFILE.level} />
              </label>

              <div className={styles.formActions}>
                <Button type="submit" size="sm">
                  Save Changes
                </Button>
                {saved && (
                  <span className={styles.savedNote}>
                    <CheckIcon size={14} /> Saved
                  </span>
                )}
              </div>
            </form>
          </Reveal>

          <Reveal as="section" className={styles.card} delay={60}>
            <div className={styles.cardHead}>
              <span className={styles.cardIcon}>
                <BellIcon size={16} />
              </span>
              <div>
                <h2>Notification Preferences</h2>
                <p>Choose what AttendFlow keeps you updated on.</p>
              </div>
            </div>

            <div className={styles.prefList}>
              {prefs.map((pref) => (
                <div key={pref.id} className={styles.prefRow}>
                  <div>
                    <p className={styles.prefLabel}>{pref.label}</p>
                    <p className={styles.prefDescription}>{pref.description}</p>
                  </div>
                  <button
                    type="button"
                    className={`${styles.toggle} ${pref.enabled ? styles.toggleOn : ''}`}
                    aria-pressed={pref.enabled}
                    aria-label={pref.label}
                    onClick={() => togglePref(pref.id)}
                  >
                    <span className={styles.toggleKnob} />
                  </button>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal as="section" className={styles.card} delay={120}>
            <div className={styles.cardHead}>
              <span className={styles.cardIcon}>
                <LockIcon size={16} />
              </span>
              <div>
                <h2>Security</h2>
                <p>Keep your account safe with a strong password.</p>
              </div>
            </div>

            <form className={styles.formGrid} onSubmit={handleSave}>
              <label className={styles.field}>
                <span>Current password</span>
                <input type="password" placeholder="••••••••" />
              </label>
              <label className={styles.field}>
                <span>New password</span>
                <input type="password" placeholder="••••••••" />
              </label>
              <label className={styles.field}>
                <span>Confirm new password</span>
                <input type="password" placeholder="••••••••" />
              </label>

              <div className={styles.formActions}>
                <Button type="submit" size="sm" icon={<KeyIcon size={15} />} iconPosition="left">
                  Update Password
                </Button>
              </div>
            </form>
          </Reveal>
        </div>

        <div className={styles.side}>
          <Reveal as="div" className={styles.sideCard}>
            <img src={STUDENT_PROFILE.avatar} alt="" className={styles.sideAvatar} />
            <p className={styles.sideName}>{STUDENT_PROFILE.name}</p>
            <p className={styles.sideMeta}>{STUDENT_PROFILE.department}</p>
            <p className={styles.sideMeta}>{STUDENT_PROFILE.level}</p>
          </Reveal>

          <Reveal as="div" className={`${styles.sideCard} ${styles.dangerCard}`} delay={60}>
            <p className={styles.sideTitle}>Account</p>
            <p className={styles.sideText}>Signing out will end your current session on this device.</p>
            <button type="button" className={styles.logoutButton}>
              <LogOutIcon size={15} />
              Log Out
            </button>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Settings;
