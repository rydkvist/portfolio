import { DefaultSeo } from 'next-seo';
import { Html, Head, Main, NextScript } from 'next/document';
import { APP_DESCRIPTION, APP_SLOGAN, APP_TITLE_SUFFIX, APP_WEBSITE_URL } from '../config';

export default function Document() {
  return (
    <Html>
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
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js" />
        <script src="https://kit.fontawesome.com/260eef81bd.js" crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
