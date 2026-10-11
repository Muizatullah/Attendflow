import { NavLink, Link } from 'react-router';
import { DASHBOARD_NAV, DASHBOARD_NAV_FOOTER } from '../../data/content.js';
import { ArrowRightIcon, BotIcon } from '../icons/Icons.jsx';
import logoMark from '../../assets/images/logo-mark.svg';
import styles from './DashboardSidebar.module.css';

const DashboardSidebar = ({ onNavigate }) => (
  <aside className={styles.sidebar}>
    <Link to="/" className={styles.brand}>
      <img src={logoMark} alt="" width={38} height={38} className={styles.logoMark} />
      <span className={styles.brandText}>
        <span className={styles.brandName}>
          Attend<span className={styles.brandAccent}>Flow</span>
        </span>
        <span className={styles.brandTagline}>One Move Ahead. Accuracy in Every Flow.</span>
      </span>
    </Link>

    <nav className={styles.nav} aria-label="Dashboard">
      <ul className={styles.navList}>
        {DASHBOARD_NAV.map(({ label, to, icon: Icon, end }) => (
          <li key={label}>
            <NavLink
              to={to}
              end={end}
              onClick={onNavigate}
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
            >
              <Icon size={18} />
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className={styles.divider} />

      <ul className={styles.navList}>
        {DASHBOARD_NAV_FOOTER.map(({ label, to, icon: Icon }) => (
          <li key={label}>
            <NavLink
              to={to}
              onClick={onNavigate}
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
            >
              <Icon size={18} />
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>

    <div className={styles.promo}>
      <span className={styles.promoBot}>
        <BotIcon size={20} />
      </span>
      <p className={styles.promoTitle}>Need help?</p>
      <p className={styles.promoTitle}>Ask AttendFlow AI</p>
      <p className={styles.promoText}>Get instant answers, tips, and support anytime.</p>
      <Link to="/dashboard/ai-assistant" className={styles.promoButton} onClick={onNavigate}>
        Chat Now
        <ArrowRightIcon size={14} />
      </Link>
    </div>
  </aside>
);

export default DashboardSidebar;
