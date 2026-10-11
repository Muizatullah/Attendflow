import Reveal from '../reveal/Reveal.jsx';
import { MapPinIcon, BuildingIcon, ArrowRightIcon } from '../icons/Icons.jsx';
import { CONTACT_CARDS, SOCIAL_LINKS } from '../../data/content';
import styles from './ContactInfo.module.css';

const ContactInfo = () => (
  <Reveal as="div" className={styles.wrap}>
    <div className={styles.heading}>
      <h2>Our Contact Information</h2>
      <p>Reach out to us through any of the channels below. We'll get back to you as soon as possible.</p>
    </div>

    <div className={styles.cardRow}>
      {CONTACT_CARDS.map(({ icon: Icon, title, lines, note }, index) => (
        <Reveal as="div" key={title} className={styles.card} delay={index * 80}>
          <span className={styles.iconWrap}>
            <Icon size={18} />
          </span>
          <h3>{title}</h3>
          {lines.map((line) => (
            <p key={line} className={styles.line}>
              {line}
            </p>
          ))}
          <p className={styles.note}>{note}</p>
        </Reveal>
      ))}
    </div>

    <div className={styles.bottomRow}>
      <div className={styles.mapCard}>
        <div className={styles.mapPlaceholder}>
          <span className={styles.mapPin}>
            <MapPinIcon size={18} />
          </span>
        </div>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Lekki+Phase+1+Lagos+Nigeria"
          target="_blank"
          rel="noreferrer"
          className={styles.mapLink}
        >
          View larger map
          <ArrowRightIcon size={13} />
        </a>
      </div>

      <div className={styles.companyCard}>
        <span className={styles.companyIcon}>
          <BuildingIcon size={17} />
        </span>
        <h3>Marusoft Technology</h3>
        <p>
          We are based in oshodi, Lagos, Nigeria. Our team is always ready to
          assist you with any inquiries or support needs.
        </p>
        <div className={styles.socials}>
          {SOCIAL_LINKS.map(({ icon: Icon, label }) => (
            <a key={label} href="#contact" aria-label={label} className={styles.socialLink}>
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </div>
  </Reveal>
);

export default ContactInfo;
