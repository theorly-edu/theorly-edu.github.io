import React from 'react';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'light' | 'dark' | 'alt' | 'surface';
  gridPattern?: boolean;
  hero?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  variant = 'light',
  gridPattern = false,
  hero = false,
  className = '',
  ...props
}) => {
  const variantClass =
    variant === 'dark'
      ? 'section-dark'
      : variant === 'alt'
      ? 'section-alt'
      : variant === 'surface'
      ? 'section-surface'
      : 'section-light';

  const gridClass = gridPattern
    ? variant === 'dark'
      ? 'bg-grid-pattern-dark'
      : 'bg-grid-pattern'
    : '';

  const heroClass = hero ? 'hero-section' : 'section';

  return (
    <section
      className={`${heroClass} ${variantClass} ${gridClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </section>
  );
};
