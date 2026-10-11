import QrCode from '../qr-code/QrCode.jsx';
import Reveal from '../reveal/Reveal.jsx';
import { LaptopIcon, MapPinIcon, ScanIcon, ShieldIcon, CheckCircleIcon, PieChartIcon } from '../icons/Icons.jsx';
import { PROCESS_STEPS } from '../../data/content';
import styles from './ProcessSteps.module.css';

const StepVisual = ({ type }) => {
  if (type === 'form') {
    return (
      <div className={styles.deviceCard}>
        <div className={styles.laptopBar}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.formRow}>
          <LaptopIcon size={13} />
          <span className={styles.formLine} style={{ width: '70%' }} />
        </div>
        <div className={styles.formRow}>
          <span className={styles.formDot} />
          <span className={styles.formLine} style={{ width: '55%' }} />
        </div>
        <div className={styles.formRow}>
          <span className={styles.formDot} />
          <span className={styles.formLine} style={{ width: '62%' }} />
        </div>
        <span className={styles.pinBadge}>
          <MapPinIcon size={14} />
        </span>
      </div>
    );
  }

  if (type === 'qr') {
    return (
      <div className={styles.qrCard}>
        <QrCode value="session-qr" size={78} />
      </div>
    );
  }

  if (type === 'scan') {
    return (
      <div className={styles.phoneCard}>
        <p className={styles.phoneLabel}>Scan QR Code</p>
        <div className={styles.scanFrame}>
          <ScanIcon size={30} />
        </div>
        <p className={styles.phoneHint}>Position the QR code within the frame</p>
      </div>
    );
  }

  if (type === 'location') {
    return (
      <div className={styles.phoneCard}>
        <span className={`${styles.statusIcon} ${styles.statusBlue}`}>
          <ShieldIcon size={22} />
        </span>
        <p className={styles.phoneLabel}>Verifying Location...</p>
        <p className={styles.phoneHint}>Checking your location</p>
      </div>
    );
  }

  if (type === 'recorded') {
    return (
      <div className={styles.phoneCard}>
        <span className={`${styles.statusIcon} ${styles.statusGreen}`}>
          <CheckCircleIcon size={22} />
        </span>
        <p className={styles.phoneLabel}>Attendance Recorded!</p>
        <p className={styles.phoneHint}>You have successfully marked attendance</p>
      </div>
    );
  }

  // analytics
  return (
    <div className={styles.analyticsCard}>
      <p className={styles.analyticsTitle}>Attendance Overview</p>
      <div className={styles.analyticsBody}>
        <span className={styles.ringWrap}>
          <PieChartIcon size={26} />
          <span className={styles.ringValue}>85%</span>
        </span>
        <ul className={styles.legend}>
          <li>
            <span className={`${styles.dot} ${styles.dotGreen}`} /> Present <strong>42</strong>
          </li>
          <li>
            <span className={`${styles.dot} ${styles.dotRed}`} /> Absent <strong>8</strong>
          </li>
          <li>
            <span className={`${styles.dot} ${styles.dotGrey}`} /> Total <strong>50</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

const ProcessSteps = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <ol className={styles.grid}>
        {PROCESS_STEPS.map((step, index) => (
          <Reveal as="li" key={step.title} className={styles.card} delay={(index % 3) * 80}>
            <div className={styles.cardHead}>
              <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
            </div>

            <StepVisual type={step.visual} />

            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default ProcessSteps;
