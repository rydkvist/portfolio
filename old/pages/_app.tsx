import '../styles/globals.css';
import Script, { ScriptProps } from 'next/script';
import { QueryClient, QueryClientProvider } from 'react-query';

import type { AppProps } from 'next/app';
import { APP_DESCRIPTION, APP_SLOGAN, APP_TITLE_SUFFIX, APP_WEBSITE_URL } from '../config';
import { DefaultSeo, DefaultSeoProps } from 'next-seo';
import { SettingsProvider } from '../context/SettingsProvider';
import { SideNavigation } from '../components/Navigation/SideNavigation';
import { TabNavigation } from '../components/Navigation/TabNavigation';
import { ContactModal } from '../components/Contact/ContactModal';
import { ThemeToggler } from '../components/Navigation/ThemeToggler';
import { NavigationBrandLink } from '../components/Navigation/NavigationIcons';
import { ReactChildren } from 'react';

// TODO: Add overall accessibility functionality on all buttons, links, images

const queryClient = new QueryClient();

const defaultSeoSettings: DefaultSeoProps = {
  defaultTitle: APP_TITLE_SUFFIX,
  title: APP_SLOGAN,
  description: APP_DESCRIPTION,
  openGraph: {
    type: 'website',
    site_name: APP_TITLE_SUFFIX,
    title: APP_SLOGAN,
    description: APP_DESCRIPTION,
    url: APP_WEBSITE_URL,
  },
  canonical: APP_WEBSITE_URL,
  additionalMetaTags: [
    {
      property: 'keywords',
      content:
        'niklas rydkvist, software engineer, ios engineer, frontend developer, portfolio, software developer, frontend engineer, niklas, rydkvist',
    },
    {
      property: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      property: 'author',
      content: 'Niklas Rydkvist',
    },
  ],
  additionalLinkTags: [
    { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon.png', sizes: '180x180' },
    { rel: 'icon', href: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    { rel: 'icon', href: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    { rel: 'manifest', href: '/favicons/site.webmanifest' },
    { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#1a1a1a' },
    { rel: 'shortcut icon', href: '/favicons/favicon.ico' },
  ],
};

const googleTagManagerScript: ScriptProps = {
  async: true,
  id: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
  src: `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`,
};

const googleAnalyticsScript: ScriptProps = {
  id: `dangerouslySetInnerHTML-id-${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`,
  dangerouslySetInnerHTML: {
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
        page_path: window.location.pathname,
      });
    `,
  },
};

const googleOptimizeScript: ScriptProps = {
  id: process.env.NEXT_PUBLIC_GOOGLE_OPTIMIZE_ID,
  src: `https://www.googleoptimize.com/optimize.js?id=${process.env.NEXT_PUBLIC_GOOGLE_OPTIMIZE_ID}`,
};

const darkModeTailwindScript: ScriptProps = {
  id: 'dark-mode-tailwind',
  dangerouslySetInnerHTML: {
    __html: `
      if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark');
      } else {
          document.documentElement.classList.remove('dark')
      }
      `,
  },
};

const App = ({ Component, pageProps }: AppProps) => {
  // The Wrapper to get the Mobile Application Design look
  const PageWrapper = (children: ReactChildren) => <></>;

  return (
    <>
      <DefaultSeo {...defaultSeoSettings} />
      <Script {...googleTagManagerScript} />
      <Script {...googleAnalyticsScript} />
      <Script {...googleOptimizeScript} />
      <Script {...darkModeTailwindScript} />

      <QueryClientProvider client={queryClient}>
        <SettingsProvider>
          <section role="main" className="max-h-screen">
            {/* TODO: Add cooler background color */}
            <div className="flex flex-col md:flex-row min-h-screen max-h-screen bg-neutral-200 dark:bg-neutral-800">
              <div className="md:order-1 hidden md:flex md:sticky md:top-0">
                <SideNavigation />
              </div>

              <div className="md:hidden flex flex-row items-center justify-between p-2 dark:text-white text-black">
                <NavigationBrandLink />
                <div className="mr-2">
                  <ThemeToggler />
                </div>
              </div>

              <div className="order-2 flex md:w-full min-h-screen md:min-h-full justify-center mx-2 md:m-2 bg-neutral-100 dark:bg-neutral-900 rounded-lg overflow-scroll md:shadow-lg">
                <Component {...pageProps} />
              </div>

              <div className="order-3 block md:hidden sticky bottom-0">
                <TabNavigation />
              </div>
            </div>

            <ContactModal />
          </section>
        </SettingsProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
