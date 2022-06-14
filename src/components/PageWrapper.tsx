import { ReactChild } from 'react';

type PageWrapperProps = {
  withTopInset?: boolean;
  children: ReactChild;
};

export const PageWrapper = ({ withTopInset = false, children }: PageWrapperProps) => {
  return (
    <div className={`container mx-8 md:mx-16 lg:mx-32 xl:mx-64`}>
      <div
        className={`flex flex-col min-h-screen pt-8 mb-32 pb-20 md:pb-8 ${
          withTopInset && 'pt-16 md:pt-32'
        } items-center text-1xl leading-7 text-black dark:text-white`}
      >
        {children}
      </div>
    </div>
  );
};
