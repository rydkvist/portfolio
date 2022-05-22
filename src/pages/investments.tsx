import { DefaultSeo } from 'next-seo';
import { PageWrapper } from '../components/PageWrapper';
import { APP_TITLE_SUFFIX } from '../config';

// TODO: Add companies you're investing in, followed by the icon of the company and a short brief text explaining your goal with the investment
const Investments = () => {
  return (
    <PageWrapper>
      <>
        <DefaultSeo title={`Investments – ${APP_TITLE_SUFFIX}`} />
        <h1 className="text-3xl text-center mb-8">Coming soon..</h1>
      </>
    </PageWrapper>
  );
};

export default Investments;
