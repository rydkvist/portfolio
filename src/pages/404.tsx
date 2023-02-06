import { DefaultSeo } from 'next-seo';
import { Heading } from '../components/Heading';
import { PageWrapper } from '../components/PageWrapper';
import { APP_TITLE_SUFFIX } from '../config';

const PageNotFound = () => (
  <PageWrapper>
    <DefaultSeo title={`Error 404 – ${APP_TITLE_SUFFIX}`} />
    <Heading as="h1">Page Not Found – Error 404</Heading>
  </PageWrapper>
);

export default PageNotFound;
