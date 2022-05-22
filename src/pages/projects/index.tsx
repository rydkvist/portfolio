import { DefaultSeo } from 'next-seo';
import { PageWrapper } from '../../components/PageWrapper';
import { APP_TITLE_SUFFIX } from '../../config';

// TODO: Add projects, following with a picture of the project, if possible a link to the repository, technologies used, and lessons learned

const Projects = () => {
  return (
    <PageWrapper>
      <>
        <DefaultSeo title={`Projects – ${APP_TITLE_SUFFIX}`} />
        <h1 className="text-3xl text-center mb-8">Coming soon..</h1>
        <h2 className="text-2xl text-center ">You may also contact me to know more about my projects and services.</h2>
      </>
    </PageWrapper>
  );
};

export default Projects;
