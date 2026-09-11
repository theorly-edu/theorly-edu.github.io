import React, { useState, useEffect } from 'react';
import { Container } from '../layout/Container';
import styles from './Footer.module.css';

const TermsModal = React.lazy(() =>
  import('../ui/TermsModal').then((m) => ({ default: m.TermsModal }))
);

export const Footer: React.FC = () => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  // Hash listener for #terms
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#terms') {
        setIsTermsOpen(true);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <div className={styles.grid}>
            {/* Brand Info from Source */}
            <div className={styles.brandCol}>
              <div className={styles.logo}>
                THEORLY
                <span className={styles.logoDot} aria-hidden="true" />
              </div>
              <p className={styles.desc}>
                Theorly is an all-in-one learning platform for school students to learn, practice, build and grow future-ready skills.
              </p>
              <div style={{ fontSize: 13, color: '#A8E815', display: 'flex', flexDirection: 'column', gap: 3 }}>
                <span>hello@theorly.edu</span>
                <span style={{ color: '#7A7D74' }}>Kerala, INDIA &bull; Online</span>
              </div>
            </div>

            {/* Column 1: Courses & Paths from Source */}
            <div className={styles.column}>
              <div className={styles.colTitle}>Learning Paths</div>
              <ul className={styles.linkList}>
                <li><a href="#courses" className={styles.link}>AI for Everyone (6 Courses)</a></li>
                <li><a href="#courses" className={styles.link}>Web Development (8 Courses)</a></li>
                <li><a href="#courses" className={styles.link}>Cybersecurity Essentials (6 Courses)</a></li>
                <li><a href="#courses" className={styles.link}>App Development (7 Courses)</a></li>
                <li><a href="#outcomes" className={styles.link}>Skill Certification</a></li>
              </ul>
            </div>

            {/* Column 2: Community & Practice */}
            <div className={styles.column}>
              <div className={styles.colTitle}>Community & Projects</div>
              <ul className={styles.linkList}>
                <li><a href="#projects" className={styles.link}>Student Projects (500+)</a></li>
                <li><a href="#challenges" className={styles.link}>Solve Challenges (50+)</a></li>
                <li><a href="#companion" className={styles.link}>Meet Noelle (AI Copilot)</a></li>
                <li><a href="#challenges" className={styles.link}>Earn Badges & Rewards</a></li>
              </ul>
            </div>

            {/* Column 3: Schools & Resources */}
            <div className={styles.column}>
              <div className={styles.colTitle}>Institutions & Legal</div>
              <ul className={styles.linkList}>
                <li><a href="#schools" className={styles.link}>Designed for Schools</a></li>
                <li><a href="#why-schools" className={styles.link}>School Partnership Model</a></li>
                <li><a href="#faq" className={styles.link}>FAQs</a></li>
                <li>
                  <span id="terms" aria-hidden="true" style={{ position: 'absolute' }} />
                  <a
                    href="#terms"
                    className={styles.link}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsTermsOpen(true);
                    }}
                  >
                    Terms & Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div>
            &copy; {new Date().getFullYear()} Theorly Education Technologies. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>

    {/* Accessible Terms & Privacy Policy Modal (Code-split on demand) */}
    {isTermsOpen && (
      <React.Suspense fallback={null}>
        <TermsModal
          isOpen={isTermsOpen}
          onClose={() => {
            setIsTermsOpen(false);
            if (window.location.hash === '#terms') {
              history.replaceState(null, '', window.location.pathname + window.location.search);
            }
          }}
        />
      </React.Suspense>
    )}
  </>
  );
};
