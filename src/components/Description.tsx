import React from 'react';

type DescriptionProps = {
  className?: string;
  children: React.ReactNode;
};

export const Description = ({ className, children }: DescriptionProps) => (
  <p className={`text-neutral-700 dark:text-neutral-300 w-100 mb-4 ${className}`}>{children}</p>
);
