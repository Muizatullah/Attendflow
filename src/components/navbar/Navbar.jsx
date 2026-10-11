import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import Button from '../button/Button.jsx';
import { MenuIcon, CloseIcon } from '../icons/Icons.jsx';
import { NAV_LINKS, BRAND_TAGLINE } from '../../data/content';
import logoMark from '../../assets/images/logo-mark.svg';
import styles from './Navbar.module.css';

const DESKTOP_BREAKPOINT = 960;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close the drawer if the viewport grows back to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > DESKTOP_BREAKPOINT) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Add a soft shadow to the header once the page has scrolled
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock page scroll while the mobile drawer is open + close on Escape
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    const handleKey = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const isActive = (to) => location.pathname === to;

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand} onClick={closeMenu}>
          <img src={logoMark} alt="" className={styles.logoMark} width={40} height={40} />
          <span className={styles.brandText}>
            <span className={styles.brandName}>
              Attend<span className={styles.brandAccent}>Flow</span>
            </span>
            <span className={styles.brandTagline}>{BRAND_TAGLINE}</span>
          </span>
        </Link>

        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`} aria-label="Primary">
          <ul className={styles.navList}>
            {NAV_LINKS.map((link, index) => (
              <li key={link.label} style={{ '--i': index }}>
                <Link
                  to={link.to}
                  className={`${styles.navLink} ${isActive(link.to) ? styles.navLinkActive : ''}`}
                  aria-current={isActive(link.to) ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.mobileActions}>
            <Button as={Link} to="/login" variant="secondary" size="sm" className={styles.fullWidth} onClick={closeMenu}>
              Login
            </Button>
            <Button as={Link} to="/signup" variant="primary" size="sm" className={styles.fullWidth} onClick={closeMenu}>
              Get Started
            </Button>
          </div>
        </nav>

        <div className={styles.actions}>
          <Button as={Link} to="/login" variant="secondary" size="sm">
            Login
          </Button>
          <Button as={Link} to="/signup" variant="primary" size="sm">
            Get Started
          </Button>
        </div>

        <button
          type="button"
          className={styles.menuToggle}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      {isOpen && <button type="button" className={styles.backdrop} aria-label="Close menu" onClick={closeMenu} />}
    </header>
  );
};

export default Navbar;
