import React from 'react';
import { Container } from '../components/layout/Container';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './StatsSection.module.css';

interface StatItem {
  index: string;
  number: string;
  label: string;
  detail: string;
}

const STATS_DATA: StatItem[] = [
  {
    index: '01',
    number: '100+',
    label: 'Courses',
    detail: 'Curriculum Aligned',
  },
  {
    index: '02',
    number: '500+',
    label: 'Projects',
    detail: 'Real-world Builds',
  },
  {
    index: '03',
    number: '50+',
    label: 'Challenges',
    detail: 'Adaptive Problems',
  },
  {
    index: '04',
    number: '8–12',
    label: 'Grades',
    detail: 'Built for Students',
  },
];

export const StatsSection: React.FC = () => {
  const { ref: sectionRef, isRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={sectionRef}
      className={`${styles.statsWrapper} ${isRevealed ? styles.revealed : ''}`}
      id="stats"
    >
      <Container>
        {/* Section Header */}
        <div className={styles.headerBar}>
          <div className={styles.eyebrowPill}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            <span>THEORLY AT A GLANCE</span>
          </div>
          <div className={styles.platformBadge}>
            <span>THE LEARNING PLATFORM</span>
          </div>
        </div>

        {/* Platform Stats Grid */}
        <div className={styles.statsGrid}>
          {STATS_DATA.map((item) => (
            <div key={item.index} className={styles.statItem}>
              {/* Oversized background numeral per Design System §11 */}
              <span className={styles.watermarkIndex} aria-hidden="true">
                {item.index}
              </span>

              <div className={styles.statContent}>
                <div className={styles.statNumberWrap}>
                  <span className={styles.statNumber}>{item.number}</span>
                </div>
                <div className={styles.statLabel}>{item.label}</div>
                <div className={styles.statDetail}>{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};