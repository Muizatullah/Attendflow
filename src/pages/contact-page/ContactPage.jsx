import { Navbar, ContactHero, ContactInfo, ContactForm, Footer } from '../../components';
import styles from './ContactPage.module.css';

const ContactPage = () => (
  <>
    <Navbar />
    <main>
      <ContactHero />
      <section className={styles.section}>
        <div className={styles.grid}>
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default ContactPage;
