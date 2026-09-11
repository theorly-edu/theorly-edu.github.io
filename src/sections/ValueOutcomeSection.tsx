import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { Eyebrow } from '../components/ui/Eyebrow';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './ValueOutcomeSection.module.css';

const OUTCOMES = [
  {
    num: '01',
    title: 'SKILLS',
    text: 'AI, Programming, Cybersecurity and future-focused technology skills.',
  },
  {
    num: '02',
    title: 'PROJECTS',
    text: 'Practical projects students can build, complete, and showcase.',
  },
  {
    num: '03',
    title: 'CONFIDENCE',
    text: 'Experience learning by doing instead of only watching lessons.',
  },
  {
    num: '04',
    title: 'CERTIFICATION',
    text: 'A certificate after successfully completing a course.',
  },
];

export const ValueOutcomeSection: React.FC = () => {
  const { ref: sectionRef, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className={`${styles.sectionWrapper} ${isRevealed ? styles.revealed : ''}`}
      id="outcomes"
      aria-label="What your child gets from Theorly"
    >
      <Container>
        <div className={styles.grid}>
          {/* Left Column: Value / ROI & Outcomes */}
          <div className={styles.leftCol}>
            <div className={styles.eyebrowRow}>
              <Eyebrow>WHAT YOUR CHILD GETS</Eyebrow>
            </div>

            <h2 className={styles.headline}>
              What Your Child Leaves With
            </h2>

            <p className={styles.desc}>
              THEORLY is designed to turn learning into practical skills, completed projects, and measurable progress.
            </p>

            {/* Psychological progression sequence: LEARN → BUILD → COMPLETE → EARN */}
            <div className={styles.journeyStrip} aria-label="Learning progression sequence">
              <span className={styles.journeyStep}>LEARN</span>
              <span className={styles.journeyArrow} aria-hidden="true">&rarr;</span>
              <span className={styles.journeyStep}>BUILD</span>
              <span className={styles.journeyArrow} aria-hidden="true">&rarr;</span>
              <span className={styles.journeyStep}>COMPLETE</span>
              <span className={styles.journeyArrow} aria-hidden="true">&rarr;</span>
              <span className={`${styles.journeyStep} ${styles.journeyStepActive}`}>EARN</span>
            </div>

            {/* 4 Concise Concrete Outcomes */}
            <div className={styles.outcomesList}>
              {OUTCOMES.map((item) => (
                <div key={item.num} className={styles.outcomeCard}>
                  <span className={styles.outcomeNumber}>{item.num}</span>
                  <div className={styles.outcomeContent}>
                    <span className={styles.outcomeTitle}>{item.title}</span>
                    <p className={styles.outcomeText}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Tangible Certificate Preview */}
          <div className={styles.rightCol}>
            <div className={styles.certCardOuter}>
              <div className={styles.certFrame}>
                {/* Decorative Corner Marks */}
                <div className={styles.cornerTopLeft} aria-hidden="true" />
                <div className={styles.cornerTopRight} aria-hidden="true" />
                <div className={styles.cornerBottomLeft} aria-hidden="true" />
                <div className={styles.cornerBottomRight} aria-hidden="true" />

                {/* Certificate Header */}
                <div className={styles.certHeader}>
                  <div className={styles.certBrandGroup}>
                    <span className={styles.certBrandDiamond} aria-hidden="true" />
                    <span className={styles.certHeaderTitle}>THEORLY COURSE CERTIFICATE</span>
                  </div>
                  <span className={styles.certSpecimenBadge}>CERTIFIED COMPLETION</span>
                </div>

                {/* Certificate Body */}
                <div className={styles.certBody}>
                  <span className={styles.certIntroLabel}>COURSE COMPLETED</span>
                  <h3 className={styles.certCourseTitle}>Applied Artificial Intelligence &amp; Python</h3>
                  <p className={styles.certCourseDetail}>
                    Demonstrated competence across foundational AI principles, model training, and capstone project delivery.
                  </p>
                </div>

                {/* Certificate Metadata Grid */}
                <div className={styles.certMetaGrid}>
                  <div className={styles.certMetaItem}>
                    <span className={styles.certMetaLabel}>STUDENT ACHIEVEMENT</span>
                    <span className={styles.certMetaValue}>Course Completed</span>
                  </div>
                  <div className={styles.certMetaItem}>
                    <span className={styles.certMetaLabel}>COMPLETION PROOF</span>
                    <span className={styles.certMetaValue}>Project Verified</span>
                  </div>
                  <div className={styles.certMetaItem}>
                    <span className={styles.certMetaLabel}>DATE OF COMPLETION</span>
                    <span className={styles.certMetaValue}>Issued Upon Completion</span>
                  </div>
                </div>

                {/* Certificate Footer / Seal */}
                <div className={styles.certFooter}>
                  <div className={styles.certSealBadge}>
                    <div className={styles.certSealCircle} aria-hidden="true">
                      <Award size={16} strokeWidth={2.5} />
                    </div>
                    <div className={styles.certSealText}>
                      <span className={styles.certSealTitle}>THEORLY VERIFIED</span>
                      <span className={styles.certSealSubtitle}>Earned by Building</span>
                    </div>
                  </div>
                  <span className={styles.certIdBadge}>THEORLY-CERT-PROD</span>
                </div>
              </div>
            </div>

            {/* Supporting Copy under Certificate */}
            <p className={styles.certCaption}>
              Complete a THEORLY course and receive a certificate recognizing your achievement.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
