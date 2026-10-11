import { Link } from 'react-router';
import { FOOTER_LINKS, BRAND_TAGLINE } from '../../data/content';
import logoMark from '../../assets/images/logo-mark.svg';
import styles from './Footer.module.css';

const Footer = () => (
  <footer id="contact" className={styles.footer}>
    <div className={styles.inner}>
      <div className={styles.top}>
        <div className={styles.brandBlock}>
          <Link to="/" className={styles.brand}>
            <img src={logoMark} alt="" width={34} height={34} className={styles.logoMark} />
            <span>
              Attend<span className={styles.brandAccent}>Flow</span>
            </span>
          </Link>
          <p className={styles.tagline}>
            {BRAND_TAGLINE} .
          </p>
          <p className={styles.contact}>support@attendflow.app · +234 913 176 7490</p>
        </div>

        <div className={styles.linkGrid}>
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading} className={styles.linkColumn}>
              <h4>{heading}</h4>
              <ul>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} AttendFlow. All rights reserved.</p>
        <div className={styles.legal}>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
