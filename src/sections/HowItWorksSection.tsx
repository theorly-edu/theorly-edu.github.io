import React, { useState } from 'react';
import { Target, Terminal, Award, Check } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './HowItWorksSection.module.css';

const PREVIEW_PROJECTS = [
  { name: 'Build Your First AI', pct: 72 },
  { name: 'Create a Secure Website', pct: 45 },
  { name: 'Design Your Own App', pct: 88 },
];

const ConsoleCard: React.FC = React.memo(() => {
  return (
    <div className={styles.consoleCard}>
      <div className={styles.previewHeader}>
        <div className={styles.previewEyebrow}>
          <span className={styles.activeDot} aria-hidden="true" />
          <span>Project Missions</span>
        </div>
        <span className={styles.previewStatus}>In Progress</span>
      </div>

      <div className={styles.projectList} role="region" aria-label="Project Missions Preview">
        {PREVIEW_PROJECTS.map((project) => (
          <div key={project.name} className={styles.projectItem}>
            <div className={styles.projectInfoRow}>
              <span className={styles.projectName}>{project.name}</span>
              <span className={styles.projectPct}>{project.pct}%</span>
            </div>
            <div
              className={styles.progressTrack}
              role="progressbar"
              aria-valuenow={project.pct}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${project.name} progress`}
            >
              <div
                className={styles.progressFill}
                style={{ width: `${project.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.previewFooter} aria-label="Learning flow">
        <span className={styles.footerStage}>Build</span>
        <span className={styles.footerArrow} aria-hidden="true">→</span>
        <span className={styles.footerStage}>Practice</span>
        <span className={styles.footerArrow} aria-hidden="true">→</span>
        <span className={styles.footerStage}>Complete</span>
      </div>
    </div>
  );
});

export const HowItWorksSection: React.FC = () => {
  const { ref: revealRef, isRevealed } = useScrollReveal<HTMLElement>();
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const step1Ref = React.useRef<HTMLDivElement | null>(null);
  const step2Ref = React.useRef<HTMLDivElement | null>(null);
  const step3Ref = React.useRef<HTMLDivElement | null>(null);

  const [activeStep, setActiveStep] = useState<0 | 1 | 2 | 3>(0);

  // Scroll progression observation with batched reads/writes (zero layout thrashing)
  React.useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const isReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) {
      setActiveStep(3);
      const s1 = step1Ref.current;
      const s2 = step2Ref.current;
      if (s1) s1.style.setProperty('--conn-progress', '1');
      if (s2) s2.style.setProperty('--conn-progress', '1');
      return;
    }

    let rafId: number | null = null;

    const updateScrollProgress = () => {
      rafId = null;
      const s1 = step1Ref.current;
      const s2 = step2Ref.current;
      const s3 = step3Ref.current;
      if (!s1 || !s2 || !s3) return;

      const triggerY = window.innerHeight * 0.72;
      const isDesktop = window.innerWidth > 768;

      // 1. Batch ALL DOM reads first (eliminates forced reflows)
      const r1 = s1.getBoundingClientRect();
      const r2 = s2.getBoundingClientRect();
      const r3 = s3.getBoundingClientRect();
      const secRect = isDesktop ? section.getBoundingClientRect() : null;

      // 2. Pure computations
      const dist1 = r2.top - r1.top;
      const p1 = dist1 > 0 ? Math.max(0, Math.min(1, (triggerY - r1.top) / dist1)) : 0;

      const dist2 = r3.top - r2.top;
      const p2 = dist2 > 0 ? Math.max(0, Math.min(1, (triggerY - r2.top) / dist2)) : 0;

      let watermarkOffset = 0;
      if (secRect) {
        watermarkOffset = ((window.innerHeight - secRect.top) / (window.innerHeight + secRect.height) - 0.5) * 32;
      }

      let nextStep: 0 | 1 | 2 | 3 = 0;
      if (r3.top <= triggerY) {
        nextStep = 3;
      } else if (r2.top <= triggerY) {
        nextStep = 2;
      } else if (r1.top <= triggerY) {
        nextStep = 1;
      }

      // 3. Batch ALL DOM writes together
      s1.style.setProperty('--conn-progress', p1.toFixed(3));
      s2.style.setProperty('--conn-progress', p2.toFixed(3));
      if (secRect) {
        section.style.setProperty('--watermark-offset', `${watermarkOffset.toFixed(1)}px`);
      }

      setActiveStep((prev) => (prev !== nextStep ? nextStep : prev));
    };

    const onScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(updateScrollProgress);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', onScroll, { passive: true });
          window.addEventListener('resize', onScroll, { passive: true });
          updateScrollProgress();
        } else {
          window.removeEventListener('scroll', onScroll);
          window.removeEventListener('resize', onScroll);
          if (rafId !== null) {
            cancelAnimationFrame(rafId);
            rafId = null;
          }
        }
      },
      { threshold: 0, rootMargin: '120px 0px 120px 0px' }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const handleSectionRef = (el: HTMLElement | null) => {
    revealRef.current = el;
    sectionRef.current = el;
  };

  const getStepStateClass = (stepNum: 1 | 2 | 3) => {
    if (activeStep === 0) return styles.stepItemIdle;
    if (activeStep === stepNum) return styles.stepItemActive;
    if (activeStep > stepNum) return styles.stepItemCompleted;
    return styles.stepItemIdle;
  };

  return (
    <section
      ref={handleSectionRef}
      className={`${styles.sectionWrapper} ${isRevealed ? styles.isRevealed : ''}`}
      id="projects"
    >
      {/* Giant faint typographic watermark across bottom */}
      <div className={styles.watermarkText} aria-hidden="true">
        THEORLY
      </div>

      <Container>
        <div className={styles.innerGrid}>
          {/* Left Column: Clean Editorial Product Preview Card */}
          <ConsoleCard />

          {/* Right Column: 3 Steps from Source: Learn. Practice. Build real projects. Get certified. */}
          <div className={styles.rightCol}>
            <div className={styles.eyebrowBadgeWrap}>
              <span className={styles.eyebrowPill}>
                <span className={styles.eyebrowDot} aria-hidden="true" />
                <span>HOW IT WORKS</span>
              </span>
            </div>

            <h2 className={styles.stepsTitle}>
              Build Real Skills in 3 Easy Steps
            </h2>

            <div className={styles.stepsList}>
              {/* Step 1 */}
              <div
                ref={step1Ref}
                className={`${styles.stepItem} ${getStepStateClass(1)}`}
              >
                <div className={styles.stepBadgeColumn}>
                  <div className={styles.stepIconBadge}>
                    <Target size={20} />
                    {activeStep >= 2 && (
                      <span className={styles.checkBadge} aria-label="Step 1 completed">
                        <Check size={10} strokeWidth={3} />
                      </span>
                    )}
                  </div>
                  <div className={styles.stepConnector} aria-hidden="true">
                    <div
                      className={`${styles.stepConnectorLine} ${
                        activeStep >= 2
                          ? styles.connectorCompleted
                          : activeStep >= 1
                          ? styles.connectorDrawing
                          : ''
                      }`}
                    />
                  </div>
                </div>
                <div className={styles.stepContent}>
                  <div className={styles.stepHeaderRow}>
                    <div className={styles.stepHeading}>
                      1. Learn & Practice
                    </div>
                    <span className={styles.stepIndexTag}>STEP 01</span>
                  </div>
                  <p className={styles.stepBody}>
                    Understand foundational concepts in AI, web development, cybersecurity, and future skills with active problem prompts.
                  </p>
                  <div className={styles.stepMicroPills}>
                    <span className={styles.stepPill}>Adaptive Prompts</span>
                    <span className={styles.stepPill}>Retrieval Practice</span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div
                ref={step2Ref}
                className={`${styles.stepItem} ${getStepStateClass(2)}`}
              >
                <div className={styles.stepBadgeColumn}>
                  <div className={styles.stepIconBadge}>
                    <Terminal size={20} />
                    {activeStep >= 3 && (
                      <span className={styles.checkBadge} aria-label="Step 2 completed">
                        <Check size={10} strokeWidth={3} />
                      </span>
                    )}
                  </div>
                  <div className={styles.stepConnector} aria-hidden="true">
                    <div
                      className={`${styles.stepConnectorLine} ${
                        activeStep >= 3
                          ? styles.connectorCompleted
                          : activeStep >= 2
                          ? styles.connectorDrawing
                          : ''
                      }`}
                    />
                  </div>
                </div>
                <div className={styles.stepContent}>
                  <div className={styles.stepHeaderRow}>
                    <div className={styles.stepHeading}>
                      2. Build Real Projects
                    </div>
                    <span className={styles.stepIndexTag}>STEP 02</span>
                  </div>
                  <p className={styles.stepBody}>
                    Create real-world applications, train real machine learning models, and build defended websites from scratch.
                  </p>
                  <div className={styles.stepMicroPills}>
                    <span className={styles.stepPill}>In-Browser Sandbox</span>
                    <span className={styles.stepPill}>Real Datasets</span>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div
                ref={step3Ref}
                id="challenges"
                className={`${styles.stepItem} ${getStepStateClass(3)}`}
              >
                <div className={styles.stepBadgeColumn}>
                  <div className={styles.stepIconBadge}>
                    <Award size={20} />
                  </div>
                </div>
                <div className={styles.stepContent}>
                  <div className={styles.stepHeaderRow}>
                    <div className={styles.stepHeading}>
                      3. Solve Challenges & Get Certified
                    </div>
                    <span className={styles.stepIndexTag}>STEP 03</span>
                  </div>
                  <p className={styles.stepBody}>
                    Solve challenges, earn badges, showcase your skills, and earn certified recognition of demonstrated ability.
                  </p>
                  <div className={styles.stepMicroPills}>
                    <span className={styles.stepPill}>Verified Credential</span>
                    <span className={styles.stepPill}>Portfolio Proof</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};