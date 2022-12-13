import { ReactText } from 'react';

type HeadingProps = {
  as: 'h1' | 'h2' | 'h3';
  className?: string;
  children: ReactText;
};

export const Heading = ({ as, className, children }: HeadingProps) => {
  if (as === 'h1') {
    return <h1 className={`text-3xl font-semibold text-center mb-6 ${className}`}>{children}</h1>;
  }

  if (as === 'h2') {
    return <h2 className={`text-2xl w-full mt-6 mb-1.5 ${className}`}>{children}</h2>;
  }

  return <h3 className={`text-xl w-full mt-4 mb-1 ${className}`}>{children}</h3>;
};
