import { ReactNode } from 'react';

type Tag = 'div' | 'header';

export const MobileOnly = ({
  tag: Tag = 'div',
  className = '',
  children,
}: {
  tag?: Tag;
  className?: string;
  children: ReactNode;
}) => {
  return <Tag className={`md:hidden ${className}`}>{children}</Tag>;
};
