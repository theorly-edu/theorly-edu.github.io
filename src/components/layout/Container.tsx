import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  fluid = false,
  className = '',
  ...props
}) => {
  return (
    <div className={`${fluid ? 'container-fluid' : 'container'} ${className}`} {...props}>
      {children}
    </div>
  );
};
