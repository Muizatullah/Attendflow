import { Link } from 'react-router';
import Reveal from '../../components/reveal/Reveal.jsx';
import {
  ArrowRightIcon,
  ScanIcon,
  CameraIcon,
  RefreshIcon,
  MapPinIcon,
  ShieldIcon,
  CheckCircleIcon,
  CheckIcon,
  LightbulbIcon,
} from '../../components/icons/Icons.jsx';
import { SCAN_QUICK_TIPS, SCAN_LOCATION } from '../../data/content.js';
import styles from './ScanQr.module.css';

const ScanQr = () => (
  <div className={styles.page}>
    <Link to="/dashboard" className={styles.backLink}>
      <ArrowRightIcon size={14} className={styles.backIcon} /> Back to Dashboard
    </Link>

    <div className={styles.header}>
      <span className={styles.headerIcon}>
        <ScanIcon size={22} />
      </span>
      <div>
        <h1>Scan QR Code</h1>
        <p>Scan the QR code provided by your lecturer to mark your attendance.</p>
      </div>
    </div>

    <div className={styles.grid}>
      <div className={styles.col}>
        <Reveal as="div" className={styles.viewfinderCard}>
          <span className={styles.cameraBadge}>
            <CameraIcon size={13} /> Camera Ready <span className={styles.liveDot} />
          </span>
          <button type="button" className={styles.flipButton} aria-label="Flip camera">
            <RefreshIcon size={16} />
          </button>

          <div className={styles.viewfinder}>
            <div className={styles.qrMock}>
              <p>Scan to Mark Attendance</p>
              <div className={styles.qrGraphic} aria-hidden="true">
                <ScanIcon size={54} />
              </div>
            </div>
            <span className={`${styles.corner} ${styles.tl}`} />
            <span className={`${styles.corner} ${styles.tr}`} />
            <span className={`${styles.corner} ${styles.bl}`} />
            <span className={`${styles.corner} ${styles.br}`} />
            <span className={styles.scanLine} />
          </div>
        </Reveal>

        <Reveal as="div" className={styles.instructionBanner} delay={60}>
          <span className={styles.instructionIcon}>
            <ScanIcon size={16} />
          </span>
          <div>
            <p>Position the QR code inside the frame</p>
            <span>Make sure the code is clear and well lit.</span>
          </div>
        </Reveal>

        <Reveal as="div" className={styles.locationRow} delay={90}>
          <div className={styles.locationRowLeft}>
            <span className={styles.instructionIcon}>
              <ShieldIcon size={16} />
            </span>
            <div>
              <p>Location Verification</p>
              <span>We'll verify your location to prevent fraud.</span>
            </div>
          </div>
          <span className={styles.verifiedPill}>
            <span className={styles.liveDot} /> Location Verified
          </span>
        </Reveal>

        <Reveal as="div" className={styles.troubleBar} delay={120}>
          <div>
            <p>Having trouble?</p>
            <span>If the QR code isn't scanning, try refreshing the page or contact your lecturer.</span>
          </div>
          <button type="button" className={styles.refreshButton}>
            <RefreshIcon size={15} /> Refresh
          </button>
        </Reveal>
      </div>

      <div className={styles.col}>
        <Reveal as="div" className={styles.card} delay={40}>
          <div className={styles.cardHead}>
            <MapPinIcon size={16} />
            <h2>Current Location</h2>
          </div>
          <span className={styles.detectedPill}>
            <span className={styles.liveDot} /> Location detected
          </span>
          <p className={styles.cityLine}>{SCAN_LOCATION.city}</p>
          <p className={styles.coordsLine}>{SCAN_LOCATION.coords}</p>

          <div className={styles.mapPlaceholder}>
            <span className={styles.mapBadge}>Within range</span>
            <span className={styles.mapPin}>
              <MapPinIcon size={16} />
            </span>
          </div>

          <div className={styles.confirmBox}>
            <CheckCircleIcon size={16} />
            <div>
              <p>You are at the right location</p>
              <span>Distance from attendance location: {SCAN_LOCATION.distance}</span>
            </div>
          </div>
        </Reveal>

        <Reveal as="div" className={styles.card} delay={80}>
          <div className={styles.cardHead}>
            <LightbulbIcon size={16} />
            <h2>Quick Tips</h2>
          </div>
          <ul className={styles.tipList}>
            {SCAN_QUICK_TIPS.map((tip) => (
              <li key={tip}>
                <CheckIcon size={13} />
                {tip}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="div" className={styles.mattersCard} delay={120}>
          <span className={styles.mattersIcon}>
            <ShieldIcon size={17} />
          </span>
          <p className={styles.mattersTitle}>Your Attendance Matters</p>
          <p className={styles.mattersText}>
            Accurate attendance helps you stay on track and achieve your goals.
          </p>
          <p className={styles.mattersTagline}>Stay consistent!</p>
        </Reveal>
      </div>
    </div>
  </div>
);

export default ScanQr;
