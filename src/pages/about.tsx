import { DefaultSeo } from 'next-seo';
import { PageWrapper } from '../components/PageWrapper';
import { APP_TITLE_SUFFIX } from '../config';

const About = () => {
  return (
    <PageWrapper>
      <>
        <DefaultSeo title={`About – ${APP_TITLE_SUFFIX}`} />
        <h1 className="text-3xl text-center mb-8">Coming soon..</h1>
      </>
    </PageWrapper>
  );
};

export default About;
