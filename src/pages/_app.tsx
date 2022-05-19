import '../styles/globals.css';
import '../styles/hamburgers.css';
import Script from 'next/script';

import type { AppProps } from 'next/app';
import { Navigation } from '../components/Navigation/Navigation';
import { Footer } from '../components/Footer';
import { APP_DESCRIPTION, APP_SLOGAN, APP_TITLE_SUFFIX, APP_WEBSITE_URL, SHOW_NEW_DESIGN } from '../config';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from '../context/ThemeProvider';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo
        defaultTitle={APP_TITLE_SUFFIX}
        title={APP_SLOGAN}
        description={APP_DESCRIPTION}
        openGraph={{
          type: 'website',
          site_name: APP_TITLE_SUFFIX,
          title: APP_SLOGAN,
          description: APP_DESCRIPTION,
          url: APP_WEBSITE_URL,
        }}
        canonical={APP_WEBSITE_URL}
        additionalMetaTags={[
          {
            property: 'keywords',
            content:
              'niklas rydkvist, software engineer, ios engineer, frontend developer, portfolio, software dveloper, frontend engineer, niklas, rydkvist',
          },
          {
            property: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
          {
            property: 'author',
            content: 'Niklas Rydkvist',
          },
        ]}
        additionalLinkTags={[
          { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon.png', sizes: '180x180' },
          { rel: 'icon', href: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
          { rel: 'icon', href: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
          { rel: 'manifest', href: '/favicons/site.webmanifest' },
          { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#1a1a1a' },
          { rel: 'shortcut icon', href: '/favicons/favicon.ico' },
        ]}
      />
      <section role="main" className="min-h-full h-full block">
        <Script src="https://kit.fontawesome.com/260eef81bd.js" crossOrigin="anonymous" />
        <Script
          async
          id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        />
        <Script
          id="dark-mode-tailwind"
          dangerouslySetInnerHTML={{
            __html: `
            if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark')
            }
            `,
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
        />
        {SHOW_NEW_DESIGN ? (
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        ) : (
          <>
            <Navigation />
            <Component {...pageProps} />
            <Footer />
          </>
        )}
      </section>
    </>
  );
};

export default App;
