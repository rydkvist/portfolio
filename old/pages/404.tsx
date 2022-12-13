import { DefaultSeo } from 'next-seo';
import { Heading } from '../components/Heading';
import { APP_TITLE_SUFFIX } from '../config';

const PageNotFound = () => {
  const seoTitle = `Error 404 – ${APP_TITLE_SUFFIX}`;

  return (
    <div className="container h-full text-center">
      <DefaultSeo title={seoTitle} />

      <Heading as="h1">404</Heading>
      <Heading as="h2">Page Not Found 😢</Heading>
    </div>
  );
};

export default PageNotFound;
