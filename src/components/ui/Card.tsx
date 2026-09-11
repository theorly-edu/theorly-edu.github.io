import React from 'react';
import styles from './Card.module.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'surface' | 'alt' | 'dark';
  padding?: 'standard' | 'compact' | 'feature' | 'none';
  radius?: 'md' | 'lg';
  interactive?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'surface',
  padding = 'standard',
  radius = 'md',
  interactive = true,
  className = '',
  ...props
}) => {
  const classes = [
    styles.card,
    variant === 'dark' ? styles.dark : variant === 'alt' ? styles.alt : '',
    padding !== 'none' ? styles[padding] : '',
    radius === 'lg' ? styles.radiusLg : styles.radiusMd,
    interactive ? styles.interactive : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
