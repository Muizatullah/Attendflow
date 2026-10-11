import { Link } from 'react-router';
import logoMark from '../../assets/images/logo-mark.svg';
import styles from './AuthSplitLayout.module.css';

/**
 * Two-column auth page shell: a green illustration panel on the left,
 * and whatever form content the page passes as children on the right.
 */
const AuthSplitLayout = ({
  leftBadge,
  leftHeading,
  leftDescription,
  leftTagline,
  photoSrc,
  features = [],
  featuresColumns = 2,
  footerNote,
  topRight,
  children,
}) => (
  <div className={styles.page}>
    <aside className={styles.leftPanel}>
      <div className={styles.leftInner}>
        <Link to="/" className={styles.brand}>
          <img src={logoMark} alt="" width={38} height={38} />
          <span>
            Attend<span className={styles.brandAccent}>Flow</span>
          </span>
        </Link>

        {leftBadge && <span className={styles.badge}>{leftBadge}</span>}
        <h1 className={styles.headline}>{leftHeading}</h1>
        <p className={styles.description}>{leftDescription}</p>
        {leftTagline && <p className={styles.tagline}>{leftTagline}</p>}

        {photoSrc && (
          <div className={styles.photoWrap}>
            <img src={photoSrc} alt="" className={styles.photo} />
          </div>
        )}

        {features.length > 0 && (
          <ul
            className={styles.features}
            style={{ '--feature-cols': featuresColumns }}
          >
            {features.map(({ icon: Icon, title, description }) => (
              <li key={title}>
                <span className={styles.featureIcon}>
                  <Icon size={18} />
                </span>
                <span>
                  <strong>{title}</strong>
                  <br />
                  {description}
                </span>
              </li>
            ))}
          </ul>
        )}

        {footerNote && <p className={styles.footerNote}>{footerNote}</p>}
      </div>

      <div className={styles.wave} aria-hidden="true" />
    </aside>

    <main className={styles.rightPanel}>
      {topRight && (
        <div className={styles.topRight}>
          <span>{topRight.text} </span>
          <Link to={topRight.to}>{topRight.linkText}</Link>
        </div>
      )}

      <div className={styles.formWrap}>{children}</div>
    </main>
  </div>
);

export default AuthSplitLayout;
