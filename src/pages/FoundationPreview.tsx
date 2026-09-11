import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle,
  Clock,
  Layers,
  Code,
  BookOpen,
  ChevronRight,
} from 'lucide-react';
import {
  Button,
  Card,
  Badge,
  Eyebrow,
  ProgressBar,
  Container,
  Section,
} from '../components';

export const FoundationPreview: React.FC = () => {
  const [progressVal, setProgressVal] = useState(68);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  return (
    <div>
      {/* Overview Header Section */}
      <Section variant="light" gridPattern hero>
        <Container>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)', maxWidth: '780px' }}>
            <Eyebrow>Foundation & Design System Verification</Eyebrow>
            <h1 className="display">
              THEORLY <span className="accent-highlight">Design System</span> V1.0
            </h1>
            <p className="body-lg">
              The primary visual source of truth implemented from <code>THEORLY-DESIGN-SYSTEM.txt</code>. Single typeface (Sora), precise mathematical type scale, tactile button interactions, and restrained product UI tokens.
            </p>
            <div style={{ display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap', marginTop: 'var(--sp-2)' }}>
              <Badge variant="active" dot>WCAG AA Compliant</Badge>
              <Badge variant="inactive">Sora (Single Typeface)</Badge>
              <Badge variant="inactive">100% Tokenized CSS</Badge>
              <Badge variant="inactive">Zero Mascots</Badge>
            </div>
          </div>
        </Container>
      </Section>

      {/* 1. Color Palette Tokens */}
      <Section variant="surface">
        <Container>
          <div className="section-header">
            <span className="label">01 / Palette Tokens</span>
            <h2>Core Color Balance (65–75% Neutral · 15–25% Dark · 5–10% Lime)</h2>
            <p className="body">
              Secondary colors (blue, orange, purple) are used exclusively for subject badges and data visualization. Never in layout or buttons.
            </p>
          </div>

          <div className="theorly-grid">
            {/* Neutrals */}
            <div className="col-4">
              <Card>
                <div className="label" style={{ marginBottom: 'var(--sp-2)' }}>Neutrals (65–75%)</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)' }}>
                    <div style={{ width: 40, height: 40, background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)' }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 13 }}>--bg</div>
                      <div className="metadata">#F7F7F2 (18.5:1 AA)</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)' }}>
                    <div style={{ width: 40, height: 40, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)' }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 13 }}>--surface</div>
                      <div className="metadata">#FFFFFF</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)' }}>
                    <div style={{ width: 40, height: 40, background: 'var(--surface-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)' }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 13 }}>--surface-alt</div>
                      <div className="metadata">#E9EDE3</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Dark & Text */}
            <div className="col-4">
              <Card>
                <div className="label" style={{ marginBottom: 'var(--sp-2)' }}>Dark & Text (15–25%)</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)' }}>
                    <div style={{ width: 40, height: 40, background: 'var(--text-primary)', borderRadius: 'var(--radius-sm)' }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 13 }}>--text-primary / --dark-bg</div>
                      <div className="metadata">#11120D</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)' }}>
                    <div style={{ width: 40, height: 40, background: 'var(--dark-surface)', borderRadius: 'var(--radius-sm)' }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 13 }}>--dark-surface</div>
                      <div className="metadata">#1E1F19</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)' }}>
                    <div style={{ width: 40, height: 40, background: 'var(--text-secondary)', borderRadius: 'var(--radius-sm)' }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 13 }}>--text-secondary</div>
                      <div className="metadata">#4A4D44</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Accent Lime & Sparse Accents */}
            <div className="col-4">
              <Card>
                <div className="label" style={{ marginBottom: 'var(--sp-2)' }}>Accent & Subject (5–10%)</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)' }}>
                    <div style={{ width: 40, height: 40, background: 'var(--accent)', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-sm)' }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 13 }}>--accent ⚡</div>
                      <div className="metadata">#C6FF28 (12.1:1 on dark)</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)' }}>
                    <div style={{ width: 40, height: 40, background: 'var(--accent-soft)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)' }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 13 }}>--accent-soft</div>
                      <div className="metadata">#EAFFA0</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)' }}>
                    <span style={{ width: 14, height: 14, background: 'var(--blue)', borderRadius: 3 }} />
                    <span className="metadata">Blue: #3B82F6</span>
                    <span style={{ width: 14, height: 14, background: 'var(--orange)', borderRadius: 3, marginLeft: 8 }} />
                    <span className="metadata">Orange: #F97316</span>
                    <span style={{ width: 14, height: 14, background: 'var(--purple)', borderRadius: 3, marginLeft: 8 }} />
                    <span className="metadata">Purple: #8B5CF6</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Typography Hierarchy */}
      <Section variant="light">
        <Container>
          <div className="section-header">
            <span className="label">02 / Typography Hierarchy</span>
            <h2>Sora Font Scale & Editorial Details</h2>
            <p className="body">
              Single geometric typeface for the entire product. Clean hierarchy: Label → Headline → Body.
            </p>
          </div>

          <Card padding="feature">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-6)' }}>
              <div>
                <span className="metadata">Display (72px / w800 / ls: -0.05em / lh: 1.00)</span>
                <div className="display">Master Concepts Fast.</div>
              </div>
              <div>
                <span className="metadata">H1 (40px / w800 / ls: -0.04em / lh: 1.08)</span>
                <h1>Adaptive Practice with Real Feedback</h1>
              </div>
              <div>
                <span className="metadata">H2 (28px / w700 / ls: -0.03em / lh: 1.15)</span>
                <h2>Modular Curriculum for Ages 13–18</h2>
              </div>
              <div>
                <span className="metadata">H3 (20px / w700 / ls: -0.02em / lh: 1.25)</span>
                <h3>Active Recall vs. Passive Video Watching</h3>
              </div>
              <div>
                <span className="metadata">Body Large (18px / w400 / lh: 1.65)</span>
                <p className="body-lg">
                  Most platforms deliver content and hope students absorb it. THEORLY uses retrieval practice, spaced repetition, and adaptive difficulty to make knowledge stick.
                </p>
              </div>
              <div>
                <span className="metadata">Body (16px / w400 / lh: 1.65)</span>
                <p className="body">
                  Every lesson is interactive. Rather than watching 20-minute lectures, students interact with concept sandboxes, answer diagnostic prompts, and receive step-by-step reasoning.
                </p>
              </div>
              <div>
                <span className="metadata">Editorial Graphic Details (1 highlighted term max per headline)</span>
                <h2 style={{ marginTop: 'var(--sp-2)' }}>
                  Designed for <span className="accent-highlight">retention</span>, not just <span className="lime-underline">memorization</span> ↗
                </h2>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* 3. Reusable Buttons & Interactive Physics */}
      <Section variant="surface">
        <Container>
          <div className="section-header">
            <span className="label">03 / Button System</span>
            <h2>Tactile Shadows & Mechanical Feedback</h2>
            <p className="body">
              Buttons feature tactile mechanical offsets (<code>translateY(-1px)</code> + <code>3px 3px</code> box-shadow on hover; <code>translateY(1px)</code> + <code>1px 1px</code> on active press).
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-6)' }}>
            {/* Primary, Secondary, Accent, Ghost */}
            <Card>
              <div className="label" style={{ marginBottom: 'var(--sp-3)' }}>Button Variants (Medium / 44px Accessible Target)</div>
              <div style={{ display: 'flex', gap: 'var(--sp-4)', flexWrap: 'wrap', alignItems: 'center' }}>
                <Button variant="primary" iconRight={<ArrowRight size={16} />}>
                  Primary Action
                </Button>
                <Button variant="secondary">
                  Secondary Action
                </Button>
                <Button variant="accent" iconLeft={<Sparkles size={16} />}>
                  Accent Signal
                </Button>
                <Button variant="ghost" iconRight={<ArrowUpRight size={16} />}>
                  Ghost Link
                </Button>
                <Button variant="primary" disabled>
                  Disabled State
                </Button>
              </div>
            </Card>

            {/* Sizing & Pill Options */}
            <Card>
              <div className="label" style={{ marginBottom: 'var(--sp-3)' }}>Sizes & Pill Format</div>
              <div style={{ display: 'flex', gap: 'var(--sp-4)', flexWrap: 'wrap', alignItems: 'center' }}>
                <Button variant="primary" size="sm">
                  Small (36px)
                </Button>
                <Button variant="primary" size="md">
                  Medium (44px)
                </Button>
                <Button variant="primary" size="lg">
                  Large (52px)
                </Button>
                <Button variant="accent" pill iconRight={<ArrowRight size={16} />}>
                  Pill Accent Button
                </Button>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 4. Product UI & Cards Preview */}
      <Section variant="alt">
        <Container>
          <div className="section-header">
            <span className="label">04 / Product UI & Real Practice</span>
            <h2>Real-Looking THEORLY Product Components</h2>
            <p className="body">
              Product UI is the primary visual identity. No illustrations or mascots. Clean, functional UI with active recall mechanics.
            </p>
          </div>

          <div className="theorly-grid">
            {/* Interactive Concept Quiz Card */}
            <div className="col-7">
              <Card padding="feature" radius="lg">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--sp-4)' }}>
                  <Badge variant="blue" dot>Neural Architecture &bull; Concept Check</Badge>
                  <span className="metadata">Problem 3 of 5</span>
                </div>

                <h3 style={{ marginBottom: 'var(--sp-2)' }}>
                  How does backpropagation adjust synapse weights during model convergence?
                </h3>
                <p className="body-sm" style={{ marginBottom: 'var(--sp-6)' }}>
                  Select the explanation that accurately describes gradient descent behavior.
                </p>

                {/* Quiz options */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)', marginBottom: 'var(--sp-6)' }}>
                  {[
                    'By computing the partial derivative of the loss function with respect to each parameter.',
                    'By randomly shuffling weights until the test error reaches a local optimum threshold.',
                    'By normalizing input tensors without calculating gradients through chain rule.',
                  ].map((option, idx) => {
                    const isSelected = selectedAnswer === idx;
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedAnswer(idx)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--sp-3)',
                          padding: '14px 18px',
                          borderRadius: 'var(--radius-md)',
                          border: isSelected ? '1px solid var(--border-strong)' : '1px solid var(--border)',
                          backgroundColor: isSelected ? 'var(--surface-alt)' : 'var(--surface)',
                          cursor: 'pointer',
                          transition: 'all var(--dur-micro) var(--ease-out)',
                        }}
                      >
                        <span
                          style={{
                            width: 22,
                            height: 22,
                            borderRadius: '50%',
                            border: isSelected ? '2px solid var(--border-strong)' : '1px solid var(--border)',
                            backgroundColor: isSelected ? 'var(--accent)' : 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 11,
                            fontWeight: 700,
                          }}
                        >
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span style={{ fontSize: 14, color: 'var(--text-primary)', fontWeight: isSelected ? 600 : 400 }}>
                          {option}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)' }}>
                    <Clock size={14} color="var(--text-tertiary)" />
                    <span className="metadata">Average time: 42s</span>
                  </div>
                  <Button
                    variant="primary"
                    size="sm"
                    disabled={selectedAnswer === null}
                    iconRight={<CheckCircle size={14} />}
                  >
                    Submit Answer
                  </Button>
                </div>
              </Card>
            </div>

            {/* Sidebar / Progress Widget */}
            <div className="col-5">
              <Card padding="feature" radius="lg">
                <div className="label" style={{ marginBottom: 'var(--sp-3)' }}>Spaced Repetition Engine</div>
                <h3 style={{ marginBottom: 'var(--sp-1)' }}>Module Mastery</h3>
                <p className="body-sm" style={{ marginBottom: 'var(--sp-4)' }}>
                  Active practice scores adapt your spaced repetition review queue.
                </p>

                {/* Progress bar */}
                <div style={{ marginBottom: 'var(--sp-4)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, fontWeight: 700, marginBottom: 'var(--sp-2)' }}>
                    <span>Advanced Algorithms</span>
                    <span>{progressVal}%</span>
                  </div>
                  <ProgressBar value={progressVal} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)', marginTop: 'var(--sp-6)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: 'var(--surface-alt)', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)' }}>
                      <Code size={16} color="var(--text-primary)" />
                      <span style={{ fontSize: 13, fontWeight: 600 }}>Python Data Structures</span>
                    </div>
                    <Badge variant="success">Mastered</Badge>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: 'var(--surface-alt)', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)' }}>
                      <Layers size={16} color="var(--text-primary)" />
                      <span style={{ fontSize: 13, fontWeight: 600 }}>Calculus for Machine Learning</span>
                    </div>
                    <Badge variant="active">Due Today</Badge>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: 'var(--surface-alt)', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)' }}>
                      <BookOpen size={16} color="var(--text-primary)" />
                      <span style={{ fontSize: 13, fontWeight: 600 }}>Discrete Mathematics</span>
                    </div>
                    <Badge variant="orange">4 Concepts Left</Badge>
                  </div>
                </div>

                <div style={{ marginTop: 'var(--sp-6)' }}>
                  <Button
                    variant="secondary"
                    size="sm"
                    fullWidth
                    onClick={() => setProgressVal((p: number) => (p >= 90 ? 45 : p + 15))}
                  >
                    Simulate Concept Practice (+15%)
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. Dark Section Moment */}
      <Section variant="dark" gridPattern>
        <Container>
          <div className="section-header">
            <span className="label">05 / High Contrast Moment</span>
            <h2>Dark Section Contrast & Impact Blocks</h2>
            <p className="body" style={{ color: '#B5B9AF' }}>
              Used for contrast and proof points, not generic wallpaper. Lime is used as a signal at 5–10% proportion.
            </p>
          </div>

          <div className="theorly-grid">
            <div className="col-4">
              <Card variant="dark" padding="feature">
                <div className="label" style={{ color: 'var(--accent)' }}>Active Recall</div>
                <h3 style={{ marginTop: 'var(--sp-2)', marginBottom: 'var(--sp-2)' }}>Zero Passive Watching</h3>
                <p className="body-sm" style={{ color: '#9DA395' }}>
                  Students engage directly with interactive simulations every 90 seconds instead of passively watching lectures.
                </p>
              </Card>
            </div>
            <div className="col-4">
              <Card variant="dark" padding="feature">
                <div className="label" style={{ color: 'var(--accent)' }}>Spaced Intervals</div>
                <h3 style={{ marginTop: 'var(--sp-2)', marginBottom: 'var(--sp-2)' }}>Memory Retention Curve</h3>
                <p className="body-sm" style={{ color: '#9DA395' }}>
                  Concepts reappear at algorithmically calculated forgetting intervals to build long-term synaptic retention.
                </p>
              </Card>
            </div>
            <div className="col-4">
              <Card variant="dark" padding="feature">
                <div className="label" style={{ color: 'var(--accent)' }}>Credible Rigor</div>
                <h3 style={{ marginTop: 'var(--sp-2)', marginBottom: 'var(--sp-2)' }}>Academic Precision</h3>
                <p className="body-sm" style={{ color: '#9DA395' }}>
                  Built for ages 13–18 preparing for university computing, math, and AI curricula without dumbed-down games.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
