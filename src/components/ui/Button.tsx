import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  pill?: boolean;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  arrow?: boolean;
  interactiveArrow?: boolean; // backwards-compatible alias
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  pill = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  className = '',
  href,
  target,
  rel,
  disabled,
  arrow = false,
  interactiveArrow = false,
  ...props
}) => {
  const hasArrow = arrow || interactiveArrow;

  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    pill ? styles.pill : '',
    fullWidth ? styles.fullWidth : '',
    disabled ? styles.disabled : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
      <span className={styles.label}>{children}</span>
      {hasArrow && (
        <svg
          className={styles.arrow}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {iconRight && !hasArrow && <span className={styles.iconRight}>{iconRight}</span>}
    </>
  );

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={rel}
        onClick={props.onClick as any}
        aria-label={props['aria-label']}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...props}>
      {content}
    </button>
  );
};
