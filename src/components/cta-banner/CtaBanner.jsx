import { Link } from 'react-router';
import Button from '../button/Button.jsx';
import Reveal from '../reveal/Reveal.jsx';
import { ArrowRightIcon } from '../icons/Icons.jsx';
import styles from './CtaBanner.module.css';

const CtaBanner = () => (
  <section className={styles.section}>
    <Reveal as="div" className={styles.card}>
      <div>
        <h2>Ready to stop chasing sign-in sheets?</h2>
        <p>Set up your first course in AttendFlow in under ten minutes.</p>
      </div>
      <Button as={Link} to="/signup" variant="secondary" size="md" icon={<ArrowRightIcon size={17} />}>
        Get Started Now
      </Button>
    </Reveal>
  </section>
);

export default CtaBanner;
