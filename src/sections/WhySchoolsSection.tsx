import React from 'react';
import { Container } from '../components/layout/Container';
import { Eyebrow } from '../components/ui/Eyebrow';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './WhySchoolsSection.module.css';

interface BenefitItem {
  num: string;
  title: string;
  desc: string;
}

const BENEFITS: BenefitItem[] = [
  {
    num: '01',
    title: 'RELEVANT SKILLS',
    desc: 'AI, Programming, Cybersecurity and future-focused technology skills.',
  },
  {
    num: '02',
    title: 'PRACTICAL LEARNING',
    desc: 'Students learn through projects, challenges and applied experiences.',
  },
  {
    num: '03',
    title: 'EASY TO IMPLEMENT',
    desc: 'Start with a focused pilot and expand when the model works for your school.',
  },
  {
    num: '04',
    title: 'CLEAR OUTCOMES',
    desc: 'Students complete structured learning and earn a certificate.',
  },
];

export const WhySchoolsSection: React.FC = () => {
  const { ref: sectionRef, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className={`${styles.sectionWrapper} ${isRevealed ? styles.revealed : ''}`}
      id="why-schools"
      aria-label="Why Schools Partner With Theorly"
    >
      <Container>
        <div className={styles.grid}>
          {/* Left Column: Eyebrow, Large Headline, Supporting Copy */}
          <div className={styles.leftCol}>
            <div className={styles.eyebrowWrapper}>
              <Eyebrow>WHY SCHOOLS PARTNER WITH THEORLY</Eyebrow>
            </div>

            <h2 className={styles.headline}>
              Give Students Skills They Can Build With
            </h2>

            <p className={styles.supportingCopy}>
              Bring structured exposure to AI, programming, cybersecurity and future skills into the school environment through practical, project-based learning.
            </p>
          </div>

          {/* Right Column: Four Vertically Stacked Benefits */}
          <div className={styles.rightCol}>
            <div className={styles.benefitList} role="list">
              {BENEFITS.map((item) => (
                <div key={item.num} className={styles.benefitItem} role="listitem">
                  <div className={styles.accentIndicator} aria-hidden="true" />
                  <div className={styles.numCol}>
                    <span className={styles.benefitNum}>{item.num}</span>
                  </div>
                  <div className={styles.contentCol}>
                    <h3 className={styles.benefitTitle}>{item.title}</h3>
                    <p className={styles.benefitDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
