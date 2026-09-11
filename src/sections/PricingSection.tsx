import React from 'react';
import { Check } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { Eyebrow } from '../components/ui/Eyebrow';
import { Button } from '../components/ui/Button';
import styles from './PricingSection.module.css';

export const PricingSection: React.FC = () => {
  return (
    <section className={styles.sectionWrapper} id="pricing">
      <Container>
        <div className={styles.sectionHeader}>
          <Eyebrow>PRICING & PLANS</Eyebrow>
          <h2 className={styles.headline}>
            Transparent plans for ambitious students and forward-thinking schools.
          </h2>
          <p className={styles.subCaption}>
            Try it free. Upgrade anytime.
          </p>
        </div>

        <div className={styles.pricingGrid}>
          {/* Free Tier */}
          <div className={styles.planCard}>
            <div>
              <div className={styles.planName}>Free Starter</div>
              <div className={styles.planDesc}>
                Fundamental concepts, diagnostic checks, and entry sandboxes.
              </div>

              <div className={styles.priceRow}>
                <span className={styles.price}>$0</span>
                <span className={styles.period}>/ month</span>
              </div>

              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                  <Check size={16} color="var(--success)" />
                  <span>Access to beginner learning tracks</span>
                </li>
                <li className={styles.featureItem}>
                  <Check size={16} color="var(--success)" />
                  <span>10 active sandbox runs per day</span>
                </li>
                <li className={styles.featureItem}>
                  <Check size={16} color="var(--success)" />
                  <span>Core diagnostic concept checks</span>
                </li>
                <li className={styles.featureItem}>
                  <Check size={16} color="var(--success)" />
                  <span>Standard community challenges</span>
                </li>
              </ul>
            </div>

            <Button variant="secondary" fullWidth href="#get-started">
              Start Free
            </Button>
          </div>

          {/* Pro Scholar */}
          <div className={`${styles.planCard} ${styles.popularCard}`}>
            <div className={styles.popularBadge}>Most Popular</div>
            <div>
              <div className={styles.planName}>Pro Scholar</div>
              <div className={styles.planDesc}>
                Full curriculum access, unlimited sandboxes, and AI Socratic copilot.
              </div>

              <div className={styles.priceRow}>
                <span className={styles.price}>$18</span>
                <span className={styles.period}>/ month</span>
              </div>

              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                  <Check size={16} color="var(--accent-dark)" />
                  <span><strong>All 27+ course modules</strong></span>
                </li>
                <li className={styles.featureItem}>
                  <Check size={16} color="var(--accent-dark)" />
                  <span>Unlimited GPU & code sandbox execution</span>
                </li>
                <li className={styles.featureItem}>
                  <Check size={16} color="var(--accent-dark)" />
                  <span>Intelligent Socratic AI Assistant</span>
                </li>
                <li className={styles.featureItem}>
                  <Check size={16} color="var(--accent-dark)" />
                  <span>Spaced Repetition review automation</span>
                </li>
                <li className={styles.featureItem}>
                  <Check size={16} color="var(--accent-dark)" />
                  <span>Verified course certificates</span>
                </li>
              </ul>
            </div>

            <Button variant="accent" fullWidth href="#get-started">
              Get Pro Access
            </Button>
          </div>

          {/* School Partner */}
          <div className={styles.planCard}>
            <div>
              <div className={styles.planName}>School Partner</div>
              <div className={styles.planDesc}>
                For classes, STEM departments, and whole-school deployments.
              </div>

              <div className={styles.priceRow}>
                <span className={styles.price}>Custom</span>
                <span className={styles.period}>/ school year</span>
              </div>

              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                  <Check size={16} color="var(--success)" />
                  <span>Teacher & department dashboard</span>
                </li>
                <li className={styles.featureItem}>
                  <Check size={16} color="var(--success)" />
                  <span>Automated student diagnostic analytics</span>
                </li>
                <li className={styles.featureItem}>
                  <Check size={16} color="var(--success)" />
                  <span>Custom curriculum pacing & tests</span>
                </li>
                <li className={styles.featureItem}>
                  <Check size={16} color="var(--success)" />
                  <span>FERPA/COPPA compliant privacy</span>
                </li>
              </ul>
            </div>

            <Button variant="primary" fullWidth href="#contact">
              Contact School Team
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
