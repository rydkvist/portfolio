import { ReactChild } from 'react';

type PageWrapperProps = {
  children: ReactChild | ReactChild[];
};

export const PageWrapper = ({ children }: PageWrapperProps) => (
  <div className="container px-8 md:px-16 lg:px-32 xl:px-64">
    <div className="flex flex-col min-h-screen pb-32 md:pb-8 pt-8 md:pt-16 items-center text-1xl leading-7 text-black dark:text-white">
      {children}
    </div>
  </div>
);
