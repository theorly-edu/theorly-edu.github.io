import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';
import styles from './LoginModal.module.css';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const emailInputRef = useRef<HTMLInputElement>(null);

  // Body scroll locking
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      setTimeout(() => emailInputRef.current?.focus(), 50);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demonstration feedback
    alert('Student & School Cohort portals are accessed through your school invitation or registered email.');
    onClose();
  };

  return (
    <div
      id="login"
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-dialog-title"
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
          aria-label="Close login dialog"
        >
          <X size={18} />
        </button>

        <div className={styles.eyebrow}>PORTAL ACCESS</div>
        <h2 id="login-dialog-title" className={styles.title}>
          Sign in to Theorly
        </h2>
        <p className={styles.subtitle}>
          Access your interactive workspace, coding sandboxes, and Noelle™ mentorship.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="login-email" className={styles.label}>
              School or Student Email
            </label>
            <input
              ref={emailInputRef}
              id="login-email"
              type="email"
              required
              placeholder="student@school.edu"
              className={styles.input}
              autoComplete="email"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="login-password" className={styles.label}>
              Password or Access Code
            </label>
            <input
              id="login-password"
              type="password"
              required
              placeholder="••••••••"
              className={styles.input}
              autoComplete="current-password"
            />
          </div>

          <div style={{ marginTop: 8 }}>
            <Button variant="accent" size="lg" fullWidth arrow type="submit">
              Sign In
            </Button>
          </div>
        </form>

        <p className={styles.footerNote}>
          Enrolled through a partner school? Use your institutional login code.&nbsp;
          <a
            href="#courses"
            className={styles.switchLink}
            onClick={() => onClose()}
          >
            Start learning free →
          </a>
        </p>
      </div>
    </div>
  );
};
