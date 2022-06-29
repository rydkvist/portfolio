import { ReactChild } from 'react';

type PageWrapperProps = {
  withTopInset?: boolean;
  children: ReactChild;
};

export const PageWrapper = ({ withTopInset = false, children }: PageWrapperProps) => {
  return (
    <div className="container px-8 md:px-16 lg:px-32 xl:px-64">
      <div
        className={`flex flex-col min-h-screen pt-8 pb-32 md:pb-8 ${
          withTopInset && 'pt-16 md:pt-32'
        } items-center text-1xl leading-7 text-black dark:text-white`}
      >
        {children}
      </div>
    </div>
  );
};
