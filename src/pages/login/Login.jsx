import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import {
  AuthSplitLayout,
  SocialAuthButtons,
  MailIcon,
  LockIcon,
  EyeIcon,
  EyeOffIcon,
  ArrowRightIcon,
} from '../../components';
import { LOGIN_FEATURES, BRAND_TAGLINE } from '../../data/content';
import logoMark from '../../assets/images/logo-mark.svg';
import studentIllustration from '../../assets/images/illustration-student-backpack.svg';
import styles from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  return (
    <AuthSplitLayout
      leftBadge="☀️ Welcome Back"
      leftHeading={
        <>
          Your Attendance
          <br />
          Journey <span style={{ color: 'var(--color-primary)' }}>Starts Here</span>
        </>
      }
      leftDescription="Log in to access your dashboard, mark attendance, track your progress, and stay connected with your lecturers and school activities."
      leftTagline={BRAND_TAGLINE}
      photoSrc={studentIllustration}
      features={LOGIN_FEATURES}
      footerNote="Smarter Attendance for a Brighter Tomorrow"
      topRight={{ text: 'New here?', linkText: 'Create an account →', to: '/signup' }}
    >
      <div className={styles.formCard}>
        <div className={styles.brandBlock}>
          <img src={logoMark} alt="" width={44} height={44} />
          <p className={styles.brandName}>
            Attend<span className={styles.brandAccent}>Flow</span>
          </p>
          <p className={styles.brandTagline}>{BRAND_TAGLINE}</p>
        </div>

        <h2 className={styles.title}>Welcome Back!</h2>
        <p className={styles.subtitle}>Log in to your account to continue</p>

        <form
          className={styles.form}
          onSubmit={(event) => {
            event.preventDefault();
            navigate('/dashboard');
          }}
        >
          <label className={styles.field}>
            <MailIcon size={16} />
            <input type="text" name="identifier" placeholder="Email address or Student/Staff ID" required />
          </label>

          <label className={styles.field}>
            <LockIcon size={16} />
            <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" required />
            <button
              type="button"
              className={styles.toggleVisibility}
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
            </button>
          </label>

          <div className={styles.row}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe((prev) => !prev)}
              />
              Remember me
            </label>
            <Link to="/login" className={styles.forgotLink}>
              Forgot password?
            </Link>
          </div>

          <button type="submit" className={styles.submit}>
            <ArrowRightIcon size={16} />
            Log In
          </button>
        </form>

        <SocialAuthButtons providers={['google', 'microsoft']} />

        <p className={styles.footerText}>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>

        <p className={styles.copyright}>© {new Date().getFullYear()} AttendFlow. All rights reserved.</p>
      </div>
    </AuthSplitLayout>
  );
};

export default Login;
