import { useState } from 'react';
import { Link } from 'react-router';
import {
  AuthSplitLayout,
  SocialAuthButtons,
  RoleSelector,
  IdBadgeIcon,
  MailIcon,
  PhoneIcon,
  LockIcon,
  ArrowRightIcon,
} from '../../components';
import { SIGNUP_TRUST_POINTS } from '../../data/content';
import qrIllustration from '../../assets/images/illustration-student-qr.svg';
import styles from './Signup.module.css';

const Signup = () => {
  const [role, setRole] = useState('student');

  return (
    <AuthSplitLayout
      leftBadge="🚀 Get Started"
      leftHeading={
        <>
          Ready to <span style={{ color: 'var(--color-primary)' }}>Get Started?</span>
        </>
      }
      leftDescription="Join AttendFlow today and take the first step towards a smarter, faster, and more secure attendance experience."
      photoSrc={qrIllustration}
      features={SIGNUP_TRUST_POINTS}
      featuresColumns={3}
      footerNote="Smarter Attendance for a Brighter Tomorrow"
      topRight={{ text: 'Already have an account?', linkText: 'Log in →', to: '/login' }}
    >
      <div className={styles.formCard}>
        <h2 className={styles.title}>Create Your Account</h2>
        <p className={styles.subtitle}>Choose your role to get started with AttendFlow.</p>

        <RoleSelector value={role} onChange={setRole} />

        <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
          <p className={styles.sectionLabel}>Your Information</p>

          <div className={styles.grid2}>
            <label className={styles.field}>
              <IdBadgeIcon size={16} />
              <input type="text" name="fullName" placeholder="Full Name" required />
            </label>

            <label className={styles.field}>
              <MailIcon size={16} />
              <input type="email" name="email" placeholder="Email Address" required />
            </label>

            <label className={styles.field}>
              <PhoneIcon size={16} />
              <input type="tel" name="phone" placeholder="Phone Number" required />
            </label>

            <label className={styles.field}>
              <LockIcon size={16} />
              <input type="password" name="password" placeholder="Password" required />
            </label>
          </div>

          <button type="submit" className={styles.submit}>
            Create Account
            <ArrowRightIcon size={16} />
          </button>
        </form>

        <SocialAuthButtons providers={['google']} />

        <p className={styles.footerText}>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </AuthSplitLayout>
  );
};

export default Signup;
