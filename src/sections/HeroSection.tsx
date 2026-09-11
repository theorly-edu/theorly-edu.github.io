import React, { useState, useEffect } from 'react';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import styles from './HeroSection.module.css';

// Rotating THEORLY topics
const TOPICS = ['Artificial Intelligence', 'Web Development', 'Cybersecurity'];

interface TypewriterTextProps {
  topics?: string[];
}

const TypewriterText: React.FC<TypewriterTextProps> = React.memo(({ topics = TOPICS }) => {
  const [currentText, setCurrentText] = useState('');
  const longestPhrase = 'Artificial Intelligence';

  useEffect(() => {
    let isMounted = true;
    let timerId: ReturnType<typeof setTimeout> | null = null;

    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    const tick = () => {
      if (!isMounted) return;
      const currentPhrase = topics[phraseIdx] || '';

      if (!isDeleting) {
        // Type forward character-by-character
        charIdx++;
        setCurrentText(currentPhrase.slice(0, charIdx));

        if (charIdx >= currentPhrase.length) {
          // Full phrase typed: pause briefly to read
          isDeleting = true;
          timerId = setTimeout(tick, 2200);
        } else {
          // Continue typing next character
          timerId = setTimeout(tick, 75);
        }
      } else {
        // Backspace delete character-by-character
        charIdx--;
        setCurrentText(currentPhrase.slice(0, charIdx));

        if (charIdx <= 0) {
          // Phrase deleted: pause briefly, then advance to next phrase
          isDeleting = false;
          phraseIdx = (phraseIdx + 1) % topics.length;
          timerId = setTimeout(tick, 450);
        } else {
          // Continue deleting
          timerId = setTimeout(tick, 35);
        }
      }
    };

    // Initial short pause before starting first typing cycle
    timerId = setTimeout(tick, 350);

    return () => {
      isMounted = false;
      if (timerId !== null) {
        clearTimeout(timerId);
      }
    };
  }, [topics]);

  return (
    <span className={`${styles.twWrap} tw-wrap`}>
      {/* Invisible layout placeholder that reserves exact horizontal and vertical space for the longest phrase */}
      <span className={styles.twSizer} aria-hidden="true">
        {longestPhrase}.
      </span>
      <span className={styles.twActive}>
        <span className={`${styles.twTxt} tw-txt`} id="tw-txt">
          {currentText}
        </span>
        <span className={`${styles.twCur} tw-cur`} aria-hidden="true" />
        <span
          className={styles.twPeriod}
          style={{ opacity: currentText ? 1 : 0 }}
          aria-hidden="true"
        >
          .
        </span>
      </span>
    </span>
  );
});

export const HeroSection: React.FC = () => {
  const heroRef = React.useRef<HTMLElement | null>(null);

  // Subtle pointer response for desktop only with cached bounds (zero layout thrashing)
  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer || isReducedMotion) return;

    const heroEl = heroRef.current;
    if (!heroEl) return;

    let cachedRect: DOMRect | null = null;
    const updateRect = () => {
      cachedRect = heroEl.getBoundingClientRect();
    };

    let rafId: number | null = null;
    const handleMouseMove = (e: MouseEvent) => {
      if (!cachedRect) updateRect();
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        if (!cachedRect) return;
        const relX = (e.clientX - (cachedRect.left + cachedRect.width / 2)) / (cachedRect.width / 2);
        const relY = (e.clientY - (cachedRect.top + cachedRect.height / 2)) / (cachedRect.height / 2);
        heroEl.style.setProperty('--pointer-x', `${(relX * 3).toFixed(2)}px`);
        heroEl.style.setProperty('--pointer-y', `${(relY * 3).toFixed(2)}px`);
      });
    };

    const handleMouseEnter = () => {
      updateRect();
    };

    const handleMouseLeave = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      heroEl.style.setProperty('--pointer-x', '0px');
      heroEl.style.setProperty('--pointer-y', '0px');
    };

    heroEl.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    heroEl.addEventListener('mousemove', handleMouseMove, { passive: true });
    heroEl.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('resize', updateRect, { passive: true });

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      heroEl.removeEventListener('mouseenter', handleMouseEnter);
      heroEl.removeEventListener('mousemove', handleMouseMove);
      heroEl.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', updateRect);
    };
  }, []);

  return (
    <section ref={heroRef} className={styles.heroWrapper}>
      <Container>
        <div className={styles.heroCenter}>
          {/* 1. Small eyebrow above headline */}
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            <span>FOR SCHOOL STUDENTS &bull; GRADES 8–12</span>
          </div>

          {/* 2. Large centered headline with subtle sparkle on tomorrow. */}
          <h1 className={styles.headline}>
            Learn skills that
            <br />
            shape{' '}
            <span
              className={`${styles.sparkleWrapper} sparkle-wrapper`}
              id="heroSparkles"
            >
              tomorrow.
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`${styles.sparkle} ${styles.sparkle1} sparkle-svg`}
                aria-hidden="true"
              >
                <path d="M12 0C12 7.5 7.5 12 0 12C7.5 12 12 16.5 12 24C12 16.5 16.5 12 24 12C16.5 12 12 7.5 12 0Z" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`${styles.sparkle} ${styles.sparkle2} sparkle-svg`}
                aria-hidden="true"
              >
                <path d="M12 0C12 7.5 7.5 12 0 12C7.5 12 12 16.5 12 24C12 16.5 16.5 12 24 12C16.5 12 12 7.5 12 0Z" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`${styles.sparkle} ${styles.sparkle3} sparkle-svg`}
                aria-hidden="true"
              >
                <path d="M12 0C12 7.5 7.5 12 0 12C7.5 12 12 16.5 12 24C12 16.5 16.5 12 24 12C16.5 12 12 7.5 12 0Z" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`${styles.sparkle} ${styles.sparkle4} sparkle-svg`}
                aria-hidden="true"
              >
                <path d="M12 0C12 7.5 7.5 12 0 12C7.5 12 12 16.5 12 24C12 16.5 16.5 12 24 12C16.5 12 12 7.5 12 0Z" />
              </svg>
            </span>
          </h1>

          {/* 3. Description with Typewriter rotating keyword */}
          <p className={styles.subtext}>
            Master Artificial Intelligence, Web Development, Cybersecurity, and Future Skills through hands-on challenges and portfolio projects with your personal AI mentor in{' '}
            <TypewriterText topics={TOPICS} />
          </p>

          {/* 4 & 5. Primary and Secondary CTAs */}
          <div className={styles.ctaGroup}>
            <Button
              variant="accent"
              size="lg"
              href="#courses"
              arrow
              aria-label="Start Learning Free"
            >
              Start Learning Free
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href="#courses"
              arrow
              aria-label="Explore Courses"
            >
              Explore Courses
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};