import { DefaultSeo } from 'next-seo';
import { APP_TITLE_SUFFIX } from '../../config';

const Projects = () => {
  return (
    <div className="container max-w-screen-lg mx-auto">
      <DefaultSeo title={`Projects – ${APP_TITLE_SUFFIX}`} />

      <h1 className="text-3xl text-center mb-8 z-50">Coming soon..</h1>

      <h2 className="text-2xl text-center">Contact me otherwise to know more about my projects</h2>
    </div>
  );
};

export default Projects;
