import { Link } from 'react-router';
import { Button } from '../../components';
import styles from './NotFound.module.css';

const NotFound = () => (
  <div className={styles.page}>
    <p className={styles.code}>404</p>
    <h1>This page doesn't exist</h1>
    <p className={styles.subtext}>
      The page you're looking for may have been moved or the link is incorrect.
    </p>
    <Button as={Link} to="/" variant="primary">
      Back to home
    </Button>
  </div>
);

export default NotFound;
