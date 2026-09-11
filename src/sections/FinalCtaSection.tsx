import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { Eyebrow } from '../components/ui/Eyebrow';
import { Button } from '../components/ui/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './FinalCtaSection.module.css';

export const FinalCtaSection: React.FC = () => {
  const { ref: sectionRef, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className={`${styles.sectionWrapper} ${isRevealed ? styles.revealed : ''}`}
      id="final-cta"
    >
      <div id="signup" style={{ position: 'relative', top: '-80px' }} />
      <Container>
        <div className={styles.ctaCard}>
          <div className={styles.topStatusRow}>
            <Eyebrow variant="dark">START YOUR JOURNEY</Eyebrow>
          </div>

          <h2 className={styles.headline}>
            Ready to build your first project?
          </h2>

          <p className={styles.desc}>
            Get instant access to interactive courses, hands-on coding sandboxes, and Noelle™ AI mentorship. Start your future-ready journey today.
          </p>

          <div className={styles.outcomeChipsRow}>
            <span className={styles.outcomeChip}>
              <CheckCircle size={13} color="var(--accent)" />
              <span>Instant Sandbox Access</span>
            </span>
            <span className={styles.outcomeChip}>
              <CheckCircle size={13} color="var(--accent)" />
              <span>Noelle™ AI Included</span>
            </span>
            <span className={styles.outcomeChip}>
              <CheckCircle size={13} color="var(--accent)" />
              <span>Verified Certificate</span>
            </span>
          </div>

          <div className={styles.ctaButtonWrapper}>
            <Button
              variant="accent"
              size="lg"
              href="#courses"
              interactiveArrow
            >
              Start Learning Free
            </Button>
          </div>

          <div className={styles.note}>
            Free starter access &bull; No credit card required &bull; Built for Grades 8–12
          </div>
        </div>
      </Container>
    </section>
  );
};
