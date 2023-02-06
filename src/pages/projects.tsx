import { DefaultSeo } from 'next-seo';
import { Description } from '../components/Description';
import { Heading } from '../components/Heading';
import { PageWrapper } from '../components/PageWrapper';
import { ProjectsList } from '../components/Projects/ProjectsList';
import { APP_TITLE_SUFFIX } from '../config';

const Projects = () => {
  const pageTitle = `Projects – ${APP_TITLE_SUFFIX}`;

  return (
    <PageWrapper>
      <DefaultSeo title={pageTitle} />

      <Heading as="h1">Projects</Heading>

      <Description>
        Get a glimpse into the various side projects I&apos;ve tackled. From personal finance apps to voice-controlled
        to-do lists, I bring a unique blend of technical know-how and creative flair to every project I take on. Whether
        I&apos;m building an accessible online store or uncovering the beauty of mathematical patterns, I am always
        seeking to challenge myself and bring my ideas to life. So have a look, and see for yourself the projects that
        embody a bit of my passions and skills.
      </Description>

      <ProjectsList />
    </PageWrapper>
  );
};

export default Projects;
