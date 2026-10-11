import Reveal from '../reveal/Reveal.jsx';
import { MailIcon, PaperPlaneIcon } from '../icons/Icons.jsx';
import womanIllustration from '../../assets/images/illustration-woman-laptop.svg';
import styles from './ContactHero.module.css';

const ContactHero = () => (
  <section className={styles.hero}>
    <div className={styles.inner}>
      <Reveal as="div" className={styles.copy}>
        <span className={styles.badge}>
          <MailIcon size={13} />
          Get in Touch
        </span>
        <h1 className={styles.headline}>Contact Us</h1>
        <p className={styles.lead}>
          We'd love to hear from you! Whether you have a question, feedback,
          or need support, our team is here to help.
        </p>
      </Reveal>

      <Reveal as="div" className={styles.photoWrap} delay={150}>
        <img src={womanIllustration} alt="" className={styles.photo} width={480} height={340} />
        <span className={styles.note}>
          We're here
          <br />
          to help!
        </span>
        <PaperPlaneIcon size={24} className={styles.plane} />
      </Reveal>
    </div>
  </section>
);

export default ContactHero;
