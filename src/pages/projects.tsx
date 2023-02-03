import { DefaultSeo } from 'next-seo';
import { Heading } from '../components/Heading';
import { PageWrapper } from '../components/PageWrapper';
import { ProjectItem } from '../components/ProjectItem';
import { APP_TITLE_SUFFIX } from '../config';
import { projects } from '../db';

const Projects = () => (
  <PageWrapper>
    <>
      <DefaultSeo title={`Projects – ${APP_TITLE_SUFFIX}`} />
      <Heading as="h1" className="mr-auto">
        Projects
      </Heading>

      <p className="text-neutral-700 dark:text-neutral-300 mr-auto mb-8">
        Get a glimpse into the various side projects I&apos;ve tackled. From personal finance apps to voice-controlled
        to-do lists, I bring a unique blend of technical know-how and creative flair to every project I take on. Whether
        I&apos;m building an accessible online store or uncovering the beauty of mathematical patterns, I am always
        seeking to challenge myself and bring my ideas to life. So have a look, and see for yourself the projects that
        embody a bit of my passions and skills.
      </p>

      {projects.map(project => (
        <ProjectItem key={project.title} {...project} />
      ))}
    </>
  </PageWrapper>
);

export default Projects;
