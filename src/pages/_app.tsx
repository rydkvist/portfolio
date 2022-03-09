import '../styles/globals.css';
import '../styles/hamburgers.css';
import Script from 'next/script';

import type { AppProps } from 'next/app';
import { Navigation } from '../components/Navigation/Navigation';
import { Footer } from '../components/Footer';
import { APP_DESCRIPTION, APP_SLOGAN, APP_TITLE_SUFFIX, APP_WEBSITE_URL } from '../config';
import { DefaultSeo } from 'next-seo';

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
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </section>
    </>
  );
};

export default App;
