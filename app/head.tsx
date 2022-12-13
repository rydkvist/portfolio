import Script, { ScriptProps } from 'next/script';
import { APP_DESCRIPTION, APP_SLOGAN, APP_TITLE_SUFFIX, APP_WEBSITE_URL } from '../old/config';
import { DefaultSeo, DefaultSeoProps } from 'next-seo';

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

const Head = () => (
  <>
    <DefaultSeo {...defaultSeoSettings} />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <Script {...googleTagManagerScript} />
    <Script {...googleAnalyticsScript} />
    <Script {...googleOptimizeScript} />
    <Script {...darkModeTailwindScript} />
  </>
);

export default Head;
