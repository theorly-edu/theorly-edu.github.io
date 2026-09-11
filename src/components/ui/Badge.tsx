import React from 'react';
import styles from './Badge.module.css';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'active' | 'inactive' | 'dark' | 'blue' | 'orange' | 'purple' | 'success' | 'warning' | 'error';
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'inactive',
  dot = false,
  className = '',
  ...props
}) => {
  return (
    <span className={`${styles.badge} ${styles[variant]} ${className}`} {...props}>
      {dot && (
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'currentColor',
            display: 'inline-block',
            marginRight: '3px',
          }}
        />
      )}
      {children}
    </span>
  );
};
