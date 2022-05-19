import { DefaultSeo } from 'next-seo';
import { APP_TITLE_SUFFIX } from '../../config';

const Projects = () => {
  return (
    <div className="m-auto py-8">
      <DefaultSeo title={`Projects – ${APP_TITLE_SUFFIX}`} />

      <h1 className="text-3xl text-center mb-8 text-black dark:text-white">Coming soon..</h1>
      <h2 className="text-2xl text-center px-8 text-black dark:text-white">
        You may also contact me to know more about my projects and services.
      </h2>
    </div>
  );
};

export default Projects;
