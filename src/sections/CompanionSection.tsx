import React, { useState, useRef, useEffect } from 'react';
import { Check, Send, Sparkles } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { Eyebrow } from '../components/ui/Eyebrow';
import { Button } from '../components/ui/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './CompanionSection.module.css';

interface ChatInputBarProps {
  onSend: (text: string) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}

const ChatInputBar: React.FC<ChatInputBarProps> = React.memo(({ onSend, inputRef }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSend(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.inputBar}>
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask Noelle about your project, doubts, or code..."
        className={styles.mockInput}
        style={{ background: 'none', border: 'none', color: '#FFFFFF', outline: 'none' }}
      />
      <button
        type="submit"
        className={styles.submitBtn}
        aria-label="Send query to Noelle"
      >
        <Send size={14} />
      </button>
    </form>
  );
});

export const CompanionSection: React.FC = () => {
  const { ref: sectionRef, isRevealed } = useScrollReveal<HTMLElement>();
  const [isThinking, setIsThinking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatAreaRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [conversation, setConversation] = useState([
    {
      role: 'user',
      text: "const nextStep = askNoelle('what should I try next in my AI build?')",
    },
    {
      role: 'ai',
      text: "Good question. Before I answer — what have you already tried, and what did you notice?",
      subtext: "What Noelle Helps With: Thinking Through Problems ✓ · Reviewing Your Build ✓ · Debugging Together ✓",
    },
  ]);

  // Clean up any pending timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (chatAreaRef.current) {
      const isReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (isReduced) {
        chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
      } else {
        chatAreaRef.current.scrollTo({
          top: chatAreaRef.current.scrollHeight,
          behavior: 'smooth',
        });
      }
    }
  }, [conversation, isThinking]);

  const handleSend = (userText: string) => {
    setConversation((prev) => [...prev, { role: 'user', text: userText }]);
    setIsThinking(true);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setIsThinking(false);
      setConversation((prev) => [
        ...prev,
        {
          role: 'ai',
          text: `I noticed your question about "${userText}". Let's break this down step-by-step: what output did your code produce so far?`,
          subtext: "Noelle asks questions and offers hints rather than handing out raw answers.",
        },
      ]);
    }, 450);
  };

  const SUGGESTED_PROMPTS = [
    'Explain neural weights simply',
    'Why is my Python loop slow?',
    'How do I secure an API endpoint?',
  ];

  const handleAskPrompt = (promptText: string) => {
    setConversation((prev) => [...prev, { role: 'user', text: promptText }]);
    setIsThinking(true);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setIsThinking(false);
      let aiResponse = '';
      let aiSubtext = '';
      if (promptText.includes('weights')) {
        aiResponse = "Think of neural weights like dials on an audio mixer. Each dial controls how strongly a feature influences the final prediction. What happens when we turn a dial too high?";
        aiSubtext = "Noelle builds conceptual intuition using physical mental models.";
      } else if (promptText.includes('loop')) {
        aiResponse = "In Python, raw loops run in interpreted bytecode. If you're processing lists, list comprehensions or vectorized NumPy operations run in optimized C. What kind of data are you looping through?";
        aiSubtext = "Noelle teaches standard industry performance patterns.";
      } else {
        aiResponse = "Start with defense-in-depth: validate headers, sanitize payloads, enforce JWT token expiration, and rate-limit IP calls. Which tier are you defending first?";
        aiSubtext = "Noelle guides students through production security checklists.";
      }

      setConversation((prev) => [
        ...prev,
        {
          role: 'ai',
          text: aiResponse,
          subtext: aiSubtext,
        },
      ]);
    }, 450);
  };

  return (
    <section
      ref={sectionRef}
      className={`${styles.sectionWrapper} ${isRevealed ? styles.revealed : ''}`}
      id="companion"
    >
      <Container>
        <div className={styles.grid}>
          {/* Left Column: Context & Features from Source */}
          <div className={styles.leftCol}>
            <Eyebrow variant="dark">MEET NOELLE</Eyebrow>
            <h2 className={styles.headline}>
              Your AI learning companion
            </h2>
            <p className={styles.desc}>
              Noelle is here to help you learn better every day. Ask doubts, get explanations, and stay on track with your goals.
            </p>

            <div className={styles.featuresList}>
              {/* Feature 1 */}
              <div className={styles.featureRow}>
                <div className={styles.featureCheck}>
                  <Check size={12} strokeWidth={3} />
                </div>
                <div>
                  <div className={styles.featureTextTitle}>
                    <span>Instant answers</span>
                    <span className={styles.featureTag}>24/7 LIVE</span>
                  </div>
                  <div className={styles.featureTextBody}>Get clear explanations for any topic.</div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className={styles.featureRow}>
                <div className={styles.featureCheck}>
                  <Check size={12} strokeWidth={3} />
                </div>
                <div>
                  <div className={styles.featureTextTitle}>
                    <span>Personalised help</span>
                    <span className={styles.featureTag}>ADAPTIVE</span>
                  </div>
                  <div className={styles.featureTextBody}>Noelle adapts to your learning style.</div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className={styles.featureRow}>
                <div className={styles.featureCheck}>
                  <Check size={12} strokeWidth={3} />
                </div>
                <div>
                  <div className={styles.featureTextTitle}>
                    <span>Smart reminders</span>
                    <span className={styles.featureTag}>PACED</span>
                  </div>
                  <div className={styles.featureTextBody}>Stay consistent with friendly nudges.</div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className={styles.featureRow}>
                <div className={styles.featureCheck}>
                  <Check size={12} strokeWidth={3} />
                </div>
                <div>
                  <div className={styles.featureTextTitle}>
                    <span>Track progress</span>
                    <span className={styles.featureTag}>XP & BADGES</span>
                  </div>
                  <div className={styles.featureTextBody}>Understand your growth and improve.</div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 'var(--sp-4)' }}>
              <Button
                variant="accent"
                size="md"
                interactiveArrow
                onClick={() => {
                  inputRef.current?.focus();
                  inputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
              >
                Chat with Noelle
              </Button>
            </div>
          </div>

          {/* Right Column: Intelligent Product UI Console with Source Noelle Copy */}
          <div className={styles.companionConsole}>
            <div className={styles.consoleHeader}>
              <div className={styles.headerTitle}>
                <span className={styles.pulseDot} />
                <span>Noelle™ &bull; AI Learning Companion</span>
              </div>
              <div className={styles.headerRightBadges}>
                <span className={styles.latencyBadge}>&lt;120ms &bull; v2.4</span>
                <span className={styles.activeGuideBadge}>
                  <Sparkles size={13} /> Active Guide
                </span>
              </div>
            </div>

            <div className={styles.chatArea} ref={chatAreaRef}>
              {conversation.map((msg, i) => (
                <div
                  key={i}
                  className={msg.role === 'user' ? styles.userBubble : styles.aiBubble}
                >
                  <div style={{ fontWeight: msg.role === 'ai' ? 600 : 400 }}>{msg.text}</div>
                  {msg.subtext && (
                    <div className={styles.subtextTag}>
                      {msg.subtext}
                    </div>
                  )}
                </div>
              ))}
              {isThinking && (
                <div className={`${styles.aiBubble} ${styles.typingBubble}`} aria-label="Noelle is typing">
                  <span className={styles.typingDot} />
                  <span className={styles.typingDot} />
                  <span className={styles.typingDot} />
                </div>
              )}
            </div>

            {/* Interactive Prompt Chips */}
            <div className={styles.promptChipsRow}>
              <span className={styles.promptChipsLabel}>TRY PROMPT:</span>
              {SUGGESTED_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleAskPrompt(prompt)}
                  className={styles.promptChipBtn}
                >
                  "{prompt}"
                </button>
              ))}
            </div>

            <ChatInputBar onSend={handleSend} inputRef={inputRef} />
          </div>
        </div>
      </Container>
    </section>
  );
};
