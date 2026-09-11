import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';
import styles from './TermsModal.module.css';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  // Body scroll locking
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Close on Escape key (only active when modal is open)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="terms"
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-dialog-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className={styles.modalCard}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close terms dialog"
        >
          <X size={18} />
        </button>

        <div className={styles.eyebrow}>STUDENT SAFETY &amp; PRIVACY</div>
        <h2 id="terms-dialog-title" className={styles.title}>
          Terms of Service &amp; Privacy Policy
        </h2>
        <p className={styles.subtitle}>
          Designed specifically for school students aged 13–18 in educational and institutional settings.
        </p>

        <div className={styles.contentBody}>
          <div className={styles.policyItem}>
            <h3 className={styles.policyHeading}>1. Educational Focus &amp; Age Safeguards</h3>
            <p className={styles.policyText}>
              Theorly provides structured computer science, web development, and artificial intelligence education for school students in Grades 8–12. Student participation is supported through verified school cohorts or guardian authorization.
            </p>
          </div>

          <div className={styles.policyItem}>
            <h3 className={styles.policyHeading}>2. Zero Commercial Data Monetization</h3>
            <p className={styles.policyText}>
              We do not sell student personal data, track learners across third-party websites for commercial advertising, or display targeted ads within the learning platform.
            </p>
          </div>

          <div className={styles.policyItem}>
            <h3 className={styles.policyHeading}>3. Student Project &amp; Code Ownership</h3>
            <p className={styles.policyText}>
              All web applications, algorithms, models, and code authored by students in Theorly sandboxes belong entirely to the student creator.
            </p>
          </div>

          <div className={styles.policyItem}>
            <h3 className={styles.policyHeading}>4. School Privacy &amp; Institutional Governance</h3>
            <p className={styles.policyText}>
              School partnerships adhere to educational compliance standards (FERPA/COPPA principles). Student performance metrics and progress badges are accessible only to authorized educators and guardians.
            </p>
          </div>

          <div className={styles.policyItem}>
            <h3 className={styles.policyHeading}>5. Inquiries &amp; Data Rights</h3>
            <p className={styles.policyText}>
              Students and schools may request verification or deletion of account records at any time by contacting our education team at hello@theorly.edu.
            </p>
          </div>
        </div>

        <div className={styles.footerActions}>
          <div className={styles.contactInfo}>
            Questions? <a href="mailto:hello@theorly.edu" className={styles.contactEmail}>hello@theorly.edu</a>
          </div>
          <Button variant="primary" size="sm" onClick={onClose}>
            I Understand
          </Button>
        </div>
      </div>
    </div>
  );
};
