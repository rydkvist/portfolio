import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';
import Script from 'next/script';
import { ReactNode } from 'react';
import { SideNavigation } from '@/features/sitewide/SideNavigation';
import { BrandLink } from '@/features/sitewide/BrandLink';
import { TabNavigation } from '@/features/sitewide/TabNavigation';
import { MobileOnly } from '@/components/MobileOnly';
import { ToggleTheme } from '@/components/ToggleTheme';
import { common } from '@/lib/common';

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

const avoidThemeFOUCHTMLScript = `
document.documentElement.classList.toggle('dark',
  localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
)
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <div>
          <div className="flex max-h-screen min-h-screen flex-col bg-neutral-200 md:flex-row dark:bg-neutral-800">
            <div className="sticky top-0 hidden md:order-1 md:flex">
              <SideNavigation />
            </div>

            <MobileOnly
              className="flex flex-row items-center justify-between p-2 text-black dark:text-white"
              tag="header"
            >
              <BrandLink />
              <div className="mr-2">
                <ToggleTheme />
              </div>
            </MobileOnly>

            <main className="hide-scrollbar order-2 mx-2 flex justify-center overflow-scroll rounded-lg bg-neutral-100 md:m-2 md:w-full md:shadow-lg dark:bg-neutral-900">
              <MainPageWrapper>{children}</MainPageWrapper>
            </main>

            <MobileOnly className="sticky bottom-0 order-3">
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
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: avoidThemeFOUCHTMLScript,
        }}
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
    <div className="text-1xl flex min-h-screen flex-col items-center pb-32 pt-8 leading-7 text-black md:pb-8 md:pt-16 dark:text-white">
      {children}
    </div>
  </div>
);
