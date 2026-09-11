import React from 'react';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './SchoolsSection.module.css';

export const SchoolsSection: React.FC = () => {
  const { ref: sectionRef, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className={`${styles.sectionWrapper} ${isRevealed ? styles.revealed : ''}`}
      id="schools"
    >
      <Container>
        {/* Tier 1: Proposition & Header */}
        <div className={styles.heroTier}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            <span>FOR SCHOOLS</span>
          </div>

          <h2 className={styles.headline}>Designed for Schools</h2>

          <p className={styles.desc}>
            Theorly partners with schools to bring Learn by Building into the classroom — alongside traditional academics, not in place of them.
          </p>

          <div className={styles.ctaWrapper}>
            <Button
              variant="primary"
              size="lg"
              href="mailto:hello@theorly.edu?subject=Theorly%20School%20Partnership%20Inquiry"
              interactiveArrow
            >
              Partner With Us
            </Button>
          </div>
        </div>

        {/* Subtle Tier Divider */}
        <div className={styles.tierDivider} />

        {/* Tier 2: Curriculum Integration & Delivery */}
        <div className={styles.curriculumTier}>
          <div className={styles.tierHeader}>
            <h3 className={styles.tierTitle}>Curriculum Integration &amp; Delivery</h3>
            <p className={styles.tierDesc}>
              Designed to complement existing academic timetables
            </p>
          </div>

          {/* Clean Horizontal 3-Column Layout */}
          <div className={styles.curriculumGrid}>
            <div className={styles.curriculumItem}>
              <span className={styles.itemNumber}>01</span>
              <h4 className={styles.itemTitle}>School Integration</h4>
              <p className={styles.itemText}>
                Programs delivered alongside existing curriculum with minimal effort.
              </p>
            </div>

            <div className={styles.curriculumItem}>
              <span className={styles.itemNumber}>02</span>
              <h4 className={styles.itemTitle}>Future Skills Exposure</h4>
              <p className={styles.itemText}>
                Early exposure to AI, cybersecurity and programming builds future-ready students.
              </p>
            </div>

            <div className={styles.curriculumItem}>
              <span className={styles.itemNumber}>03</span>
              <h4 className={styles.itemTitle}>Scalable Implementation</h4>
              <p className={styles.itemText}>
                Flexible programs for any school size — from pilots to institution-wide rollouts.
              </p>
            </div>
          </div>
        </div>

        {/* Subtle Tier Divider */}
        <div className={styles.tierDivider} />

        {/* Tier 3: Implementation Framework */}
        <div className={styles.frameworkTier}>
          <div className={styles.tierHeader}>
            <h3 className={styles.tierTitle}>Implementation Framework</h3>
            <p className={styles.tierDesc}>
              Structured four-stage adoption path for institutional rollout
            </p>
          </div>

          {/* 4-Stage Horizontal Progression */}
          <div className={styles.frameworkGrid}>
            {/* 01 Register */}
            <div className={styles.frameworkStage}>
              <div className={styles.stageHeader}>
                <span className={styles.stageNumber}>01</span>
                <span className={styles.stageLabel}>REGISTER</span>
                <span className={styles.stageArrow} aria-hidden="true">→</span>
              </div>
              <h4 className={styles.stageTitle}>School Registration</h4>
              <p className={styles.stageDesc}>
                Onboarding call to assess timetable and curriculum fit.
              </p>
            </div>

            {/* 02 Pilot */}
            <div className={styles.frameworkStage}>
              <div className={styles.stageHeader}>
                <span className={styles.stageNumber}>02</span>
                <span className={styles.stageLabel}>PILOT</span>
                <span className={styles.stageArrow} aria-hidden="true">→</span>
              </div>
              <h4 className={styles.stageTitle}>Pilot Cohort Launch</h4>
              <p className={styles.stageDesc}>
                Focused student pilot with an in-depth progress report.
              </p>
            </div>

            {/* 03 Rollout */}
            <div className={styles.frameworkStage}>
              <div className={styles.stageHeader}>
                <span className={styles.stageNumber}>03</span>
                <span className={styles.stageLabel}>ROLLOUT</span>
                <span className={styles.stageArrow} aria-hidden="true">→</span>
              </div>
              <h4 className={styles.stageTitle}>Full Program Rollout</h4>
              <p className={styles.stageDesc}>
                Scale to the full program with minimal disruption.
              </p>
            </div>

            {/* 04 Certify */}
            <div className={styles.frameworkStage}>
              <div className={styles.stageHeader}>
                <span className={styles.stageNumber}>04</span>
                <span className={styles.stageLabel}>CERTIFY</span>
              </div>
              <h4 className={styles.stageTitle}>Certificates Issued</h4>
              <p className={styles.stageDesc}>
                Verified certificates recognizing demonstrated skills.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};



