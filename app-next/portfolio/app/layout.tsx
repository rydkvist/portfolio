import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';
import { SideNavigation } from './_domains/sitewide/SideNavigation';
import { common } from './_lib/labels/common';
import Script from 'next/script';
import { ReactNode } from 'react';
import { MobileOnly } from './_components/MobileOnly';
import { TabNavigation } from './_domains/sitewide/TabNavigation';
import { BrandLink } from './_domains/sitewide/BrandLink';
import { ToggleTheme } from './_components/ToggleTheme';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: common.seo.title,
  creator: common.myself.fullName,
  keywords: common.seo.keywords,
  description: common.seo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <div>
          <div className="flex flex-col md:flex-row min-h-screen max-h-screen bg-neutral-200 dark:bg-neutral-800">
            <div className="hidden md:flex md:order-1 sticky top-0">
              <SideNavigation />
            </div>

            <MobileOnly tag="header">
              <BrandLink />
              <div className="mr-2">
                <ToggleTheme />
              </div>
            </MobileOnly>

            <main className="flex md:w-full justify-center mx-2 md:m-2 bg-neutral-100 dark:bg-neutral-900 order-2 rounded-lg hide-scrollbar overflow-scroll md:shadow-lg">
              <MainPageWrapper>{children}</MainPageWrapper>
            </main>

            <MobileOnly className="order-3 sticky bottom-0">
              <TabNavigation />
            </MobileOnly>
          </div>
        </div>
      </body>

      <Script
        strategy="afterInteractive"
        id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />
      <Script
        id={`dangerouslySetInnerHTML-id-${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
        strategy="afterInteractive"
      />
    </html>
  );
}

const MainPageWrapper = ({ children }: { children: ReactNode }) => (
  <div className="container px-8 md:px-16 lg:px-32 xl:px-64">
    <div className="flex flex-col min-h-screen pb-32 md:pb-8 pt-8 md:pt-16 items-center text-1xl leading-7 text-black dark:text-white">
      {children}
    </div>
  </div>
);
