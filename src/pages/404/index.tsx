import { DefaultSeo } from 'next-seo';
import { PageWrapper } from '../../components/PageWrapper';
import { APP_TITLE_SUFFIX } from '../../config';

const PageNotFound = () => {
  return (
    <PageWrapper>
      <>
        <DefaultSeo title={`Error 404 – ${APP_TITLE_SUFFIX}`} />
        <h1 className="text-3xl text-center">
          404
          <br />
          Page Not Found :(
        </h1>
      </>
    </PageWrapper>
  );
};

export default PageNotFound;
