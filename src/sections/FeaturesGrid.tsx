import React from 'react';
import { Container } from '../components/layout/Container';
import { Eyebrow } from '../components/ui/Eyebrow';
import { Button } from '../components/ui/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './FeaturesGrid.module.css';

export const FeaturesGrid: React.FC = () => {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`${styles.sectionWrapper} ${isRevealed ? styles.isRevealed : ''}`}
      id="courses"
    >
      <Container>
        {/* Standardized Section Header */}
        <div className={`${styles.sectionHeader} ${styles.revealHeader}`}>
          <Eyebrow>POPULAR LEARNING PATHS</Eyebrow>
          <h2 className={styles.headline}>
            Curated learning tracks built around real-world projects.
          </h2>
          <p className={styles.subCaption}>
            Step-by-step paths designed for beginners and intermediate builders. Master core principles, code real applications, and earn verified credentials.
          </p>
        </div>

        {/* 3 Course Cards Grid */}
        <div className={styles.cardsGrid}>
          {/* Card 1: AI for Everyone */}
          <div className={`${styles.featureCard} ${styles.revealCard}`}>
            <div className={styles.cardMain}>
              <div className={styles.cardTopRow}>
                <div className={styles.pathMarker}>
                  <span className={styles.limeDot} aria-hidden="true" />
                  <span className={styles.pathLabel}>LEARNING PATH</span>
                </div>
                <span className={styles.trackIcon} aria-hidden="true">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2Z" />
                  </svg>
                </span>
              </div>

              <div className={styles.courseIdentity}>
                <span className={styles.levelLabel}>Beginner</span>
                <h3 className={styles.cardTitle}>AI for Everyone</h3>
              </div>

              <p className={styles.cardDesc}>
                Understand AI, build smart projects and explore the future.
              </p>
            </div>

            <div className={styles.cardFooter}>
              <span className={styles.courseMeta}>
                6 Courses &bull; Smart Projects
              </span>
              <Button
                variant="accent"
                size="sm"
                href="#courses"
                interactiveArrow
                className={styles.cardCta}
                aria-label="Explore More: AI for Everyone"
              >
                Explore More
              </Button>
            </div>
          </div>

          {/* Card 2: Web Development */}
          <div className={`${styles.featureCard} ${styles.revealCard}`}>
            <div className={styles.cardMain}>
              <div className={styles.cardTopRow}>
                <div className={styles.pathMarker}>
                  <span className={styles.limeDot} aria-hidden="true" />
                  <span className={styles.pathLabel}>LEARNING PATH</span>
                </div>
                <span className={styles.trackIcon} aria-hidden="true">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </span>
              </div>

              <div className={styles.courseIdentity}>
                <span className={styles.levelLabel}>Beginner</span>
                <h3 className={styles.cardTitle}>Web Development</h3>
              </div>

              <p className={styles.cardDesc}>
                Learn web development from basics to build real world apps.
              </p>
            </div>

            <div className={styles.cardFooter}>
              <span className={styles.courseMeta}>
                8 Courses &bull; Real World Apps
              </span>
              <Button
                variant="accent"
                size="sm"
                href="#courses"
                interactiveArrow
                className={styles.cardCta}
                aria-label="Explore More: Web Development"
              >
                Explore More
              </Button>
            </div>
          </div>

          {/* Card 3: Cybersecurity Essentials */}
          <div className={`${styles.featureCard} ${styles.revealCard}`}>
            <div className={styles.cardMain}>
              <div className={styles.cardTopRow}>
                <div className={styles.pathMarker}>
                  <span className={styles.limeDot} aria-hidden="true" />
                  <span className={styles.pathLabel}>LEARNING PATH</span>
                </div>
                <span className={styles.trackIcon} aria-hidden="true">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </span>
              </div>

              <div className={styles.courseIdentity}>
                <span className={styles.levelLabel}>Intermediate</span>
                <h3 className={styles.cardTitle}>Cybersecurity Essentials</h3>
              </div>

              <p className={styles.cardDesc}>
                Learn to protect systems and stay cyber safe.
              </p>
            </div>

            <div className={styles.cardFooter}>
              <span className={styles.courseMeta}>
                6 Courses &bull; Protect Systems
              </span>
              <Button
                variant="accent"
                size="sm"
                href="#courses"
                interactiveArrow
                className={styles.cardCta}
                aria-label="Explore More: Cybersecurity Essentials"
              >
                Explore More
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};