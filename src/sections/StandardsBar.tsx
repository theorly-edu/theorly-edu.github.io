import React from 'react';
import { Container } from '../components/layout/Container';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './StandardsBar.module.css';

export const StandardsBar: React.FC = () => {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${styles.barWrapper} ${isRevealed ? styles.revealed : ''}`}
      id="standards"
    >
      <Container>
        {/* Single clean horizontal row */}
        <div className={styles.logosRow}>
          {/* Python */}
          <div className={styles.techItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={styles.techIcon} aria-hidden="true">
              <path d="M11.9 2C6.4 2 6.8 4.4 6.8 4.4l.01 2.5h5.2v.75H4.8s-3.3.4-3.3 5.9 2.9 5.7 2.9 5.7h1.7v-2.4s-.1-2.9 2.8-2.9h4.9s2.8.05 2.8-2.8V4.8S17.4 2 11.9 2zm-2.8 1.8c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"/>
              <path d="M12.1 22c5.5 0 5.1-2.4 5.1-2.4l-.01-2.5h-5.2v-.75h7.21s3.3-.4 3.3-5.9-2.9-5.7-2.9-5.7h-1.7v2.4s.1 2.9-2.8 2.9h-4.9s-2.8-.05-2.8 2.8v5.85s-.8 3.2 4.7 3.2zm2.8-1.8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"/>
            </svg>
            <span className={styles.techName}>Python</span>
          </div>

          {/* Pytorch */}
          <div className={styles.techItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.techIcon} aria-hidden="true">
              <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
            </svg>
            <span className={styles.techName}>Pytorch</span>
          </div>

          {/* Linux Core */}
          <div className={styles.techItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.techIcon} aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="3"/>
              <path d="m7 10 3 2-3 2"/>
              <path d="M13 14h4"/>
            </svg>
            <span className={styles.techName}>Linux Core</span>
          </div>

          {/* TypeScript */}
          <div className={styles.techItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.techIcon} aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="3"/>
              <path d="M7 8h6M10 8v8"/>
              <path d="M15 13.5c.5.5 1 .8 1.7.8 1 0 1.3-.5 1.3-1 0-1.2-3-1.1-3-2.8 0-1 .8-1.7 2-1.7.8 0 1.5.3 1.9.7"/>
            </svg>
            <span className={styles.techName}>TypeScript</span>
          </div>

          {/* HTML5 */}
          <div className={styles.techItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={styles.techIcon} aria-hidden="true">
              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.234-2.625h11.406l.235-2.625H5.859l.704 7.875h9.117l-.352 3.938-3.351.937-3.352-.937-.234-2.625H6.094l.469 5.25 5.414 1.5 5.414-1.5.703-7.875H8.531z"/>
            </svg>
            <span className={styles.techName}>HTML5</span>
          </div>

          {/* Git Version */}
          <div className={styles.techItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.techIcon} aria-hidden="true">
              <circle cx="18" cy="18" r="3"/>
              <circle cx="6" cy="6" r="3"/>
              <path d="M18 15V9a9 9 0 0 0-9-9"/>
              <circle cx="6" cy="18" r="3"/>
              <path d="M6 9v6"/>
            </svg>
            <span className={styles.techName}>Git Version</span>
          </div>
        </div>
      </Container>
    </div>
  );
};