import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Container } from '../layout/Container';
import styles from './Navbar.module.css';

const LoginModal = React.lazy(() =>
  import('../ui/LoginModal').then((m) => ({ default: m.LoginModal }))
);

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

const navItems: NavItem[] = [
  { label: 'Courses', href: '#courses' },
  { label: 'How It Works', href: '#projects' },
  { label: 'For Schools', href: '#schools' },
  { label: 'FAQs', href: '#faq' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Hash listener for #login
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#login') {
        setIsLoginOpen(true);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Body scroll locking when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Close on Escape key and automatically close if resized to desktop (only active when drawer is open)
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={styles.navbar}>
        <Container className={styles.inner}>
          {/* Brand Mark */}
          <a href="#" className={styles.brandGroup} aria-label="THEORLY Home">
            <span className={styles.logo}>
              THEORLY
              <span className={styles.logoDot} aria-hidden="true" />
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav aria-label="Main Navigation">
            <ul className={styles.navLinks}>
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={styles.navLink}>
                    {item.label}
                    {item.external && <ArrowUpRight size={12} style={{ display: 'inline', marginLeft: 2 }} />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Buttons */}
          <div className={styles.navActions}>
            <div className={styles.desktopOnly}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLoginOpen(true)}
              >
                Log in
              </Button>
            </div>
            <div className={styles.desktopOnly}>
              <Button
                variant="primary"
                size="sm"
                href="#courses"
              >
                Sign up
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className={styles.menuToggle}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className={styles.mobileOverlay}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setMobileMenuOpen(false);
            }
          }}
        >
          <div className={styles.mobileNavLinks}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={styles.mobileNavLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className={styles.mobileActions}>
            <Button
              variant="secondary"
              size="lg"
              fullWidth
              onClick={() => {
                setMobileMenuOpen(false);
                setIsLoginOpen(true);
              }}
            >
              Log in
            </Button>
            <Button
              variant="primary"
              size="lg"
              fullWidth
              href="#courses"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign up
            </Button>
          </div>
        </div>
      )}

      {/* Accessible Student & School Login Modal (Code-split on demand) */}
      {isLoginOpen && (
        <React.Suspense fallback={null}>
          <LoginModal
            isOpen={isLoginOpen}
            onClose={() => {
              setIsLoginOpen(false);
              if (window.location.hash === '#login') {
                history.replaceState(null, '', window.location.pathname + window.location.search);
              }
            }}
          />
        </React.Suspense>
      )}
    </>
  );
};


