import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './FaqSection.module.css';

interface FaqItemData {
  num: string;
  category: string;
  q: string;
  a: string;
}

const faqs: FaqItemData[] = [
  {
    num: '01',
    category: 'CURRICULUM',
    q: 'What is a Theorly course or project?',
    a: 'A structured learning journey built around creating something real — like training your first AI model or building a secure website — rather than watching videos or completing passive quizzes.',
  },
  {
    num: '02',
    category: 'AI MENTOR',
    q: 'Who is Noelle?',
    a: "Noelle™ is Theorly's AI learning companion. She's not a chatbot that hands out answers — she asks questions, offers hints, and helps students think through problems as they build.",
  },
  {
    num: '03',
    category: 'PREREQUISITES',
    q: 'Do students need prior coding experience?',
    a: 'No prior experience is required. Each course starts with foundational concepts and builds progressively as students create their project.',
  },
  {
    num: '04',
    category: 'CREDENTIALS',
    q: 'How are certificates earned?',
    a: 'Certificates are earned by completing authentic work — the project a student actually builds — not by finishing a set of videos.',
  },
  {
    num: '05',
    category: 'COHORTS',
    q: 'How are courses and challenges conducted?',
    a: 'In small, focused cohorts for real attention and mentorship. Courses are delivered on-campus in partnership with schools, or in an interactive online format.',
  },
  {
    num: '06',
    category: 'PARTNERSHIPS',
    q: 'How can my school partner with Theorly?',
    a: "Email hello@theorly.edu or use the Partner button in the Schools section. We'll schedule an intro call and talk through what a pilot could look like for your school.",
  },
];

export const FaqSection: React.FC = () => {
  const { ref: sectionRef, isRevealed } = useScrollReveal<HTMLElement>();
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

  const toggle = (idx: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  return (
    <section
      ref={sectionRef}
      className={`${styles.sectionWrapper} ${isRevealed ? styles.revealed : ''}`}
      id="faq"
    >
      <div className={styles.innerCard}>
        <Container>
          <div className={styles.contentColumn}>
            <div className={styles.header}>
              <div className={styles.eyebrowBadge}>Theorly FAQ</div>
              <h2 className={styles.headline}>Frequently Asked Questions</h2>
              <p className={styles.description}>
                Everything you need to know about Theorly courses, projects, mentoring with Noelle™, and school partnerships.
              </p>
            </div>

            <div className={styles.faqList} role="region" aria-label="Frequently Asked Questions list">
              {faqs.map((faq, i) => {
                const isOpen = openIndices.has(i);
                return (
                  <div
                    key={i}
                    className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
                  >
                    <button
                      type="button"
                      id={`faq-btn-${i}`}
                      className={styles.questionBtn}
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${i}`}
                    >
                      <div className={styles.questionLeft}>
                        <span className={styles.faqNum}>{faq.num}</span>
                        <div className={styles.questionTitleGroup}>
                          <span className={styles.faqCategory}>{faq.category}</span>
                          <span className={styles.questionText}>{faq.q}</span>
                        </div>
                      </div>
                      <span
                        className={`${styles.plusIcon} ${isOpen ? styles.plusIconOpen : ''}`}
                        aria-hidden="true"
                      >
                        <Plus size={18} strokeWidth={1.75} />
                      </span>
                    </button>
                    <div
                      id={`faq-answer-${i}`}
                      className={`${styles.answerWrapper} ${isOpen ? styles.answerWrapperOpen : ''}`}
                      role="region"
                      aria-labelledby={`faq-btn-${i}`}
                    >
                      <div className={styles.answerInner}>
                        <div className={styles.answer}>
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={styles.closingCta}>
              <p className={styles.closingText}>Got any more questions?</p>
              <a href="mailto:hello@theorly.edu" className={styles.closingBtn}>
                Get in touch
              </a>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

