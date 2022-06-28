import { DefaultSeo } from 'next-seo';
import { Heading } from '../components/Heading';
import { PageWrapper } from '../components/PageWrapper';
import { APP_TITLE_SUFFIX } from '../config';

// TODO: Add projects, following with a picture of the project, if possible a link to the repository, technologies used, and lessons learned

const Projects = () => {
  return (
    <PageWrapper>
      <>
        <DefaultSeo title={`Projects – ${APP_TITLE_SUFFIX}`} />
        <Heading as="h1">Coming soon..</Heading>
        <Heading as="h2" className="text-center">
          You may also contact me to know more about my projects and services.
        </Heading>
      </>
    </PageWrapper>
  );
};

export default Projects;
