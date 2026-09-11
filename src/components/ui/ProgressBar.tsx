import React, { useEffect, useState } from 'react';
import styles from './ProgressBar.module.css';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // 0 to 100
  dark?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  dark = false,
  className = '',
  ...props
}) => {
  const [mountedWidth, setMountedWidth] = useState(0);

  useEffect(() => {
    // Animate from 0 to value on mount per design system rule: "0 -> value, 600ms ease-out"
    const timeout = setTimeout(() => {
      setMountedWidth(Math.min(100, Math.max(0, value)));
    }, 50);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div
      className={`${styles.track} ${dark ? styles.darkTrack : ''} ${className}`}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      {...props}
    >
      <div
        className={styles.fill}
        style={{ width: `${mountedWidth}%` }}
      />
    </div>
  );
};
