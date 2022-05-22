import { ReactChild } from 'react';

type PageWrapperProps = {
  children: ReactChild;
};

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className="container mx-8 md:mx-16 lg:mx-32 xl:mx-64">
      <div className="flex flex-col min-h-screen py-8 items-center text-1xl leading-7 text-black dark:text-white">
        {children}
      </div>
    </div>
  );
};
