import { GoogleIcon, MicrosoftIcon } from '../icons/Icons.jsx';
import styles from './SocialAuthButtons.module.css';

/**
 * `providers` lets Signup show just Google (matching the mockup) while
 * Login shows both Google and Microsoft.
 */
const SocialAuthButtons = ({ providers = ['google', 'microsoft'] }) => (
  <div className={styles.wrap}>
    <div className={styles.divider}>
      <span />
      <p>Or continue with</p>
      <span />
    </div>

    <div className={styles.buttonRow}>
      {providers.includes('google') && (
        <button type="button" className={styles.button}>
          <GoogleIcon size={17} />
          Continue with Google
        </button>
      )}
      {providers.includes('microsoft') && (
        <button type="button" className={styles.button}>
          <MicrosoftIcon size={17} />
          Continue with Microsoft
        </button>
      )}
    </div>
  </div>
);

export default SocialAuthButtons;
