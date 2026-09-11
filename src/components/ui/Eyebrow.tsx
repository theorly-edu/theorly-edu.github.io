import React from 'react';
import styles from './Eyebrow.module.css';

export interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'light' | 'dark';
  dotColor?: string;
}

export const Eyebrow: React.FC<EyebrowProps> = ({
  children,
  variant = 'light',
  dotColor,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`${styles.eyebrow} ${variant === 'dark' ? styles.dark : ''} ${className}`}
      {...props}
    >
      <span
        className={styles.dot}
        style={dotColor ? { backgroundColor: dotColor } : undefined}
      />
      <span>{children}</span>
    </div>
  );
};
