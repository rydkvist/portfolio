import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';
import { SideNavigation } from './_domains/sitewide/SideNavigation';
import { common } from './_lib/labels/common';

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

            <main className="flex md:w-full justify-center mx-2 md:m-2 bg-neutral-100 dark:bg-neutral-900 order-2 rounded-lg hide-scrollbar overflow-scroll md:shadow-lg">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
