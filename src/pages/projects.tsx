import { DefaultSeo } from 'next-seo';
import { Description } from '../components/Description';
import { Heading } from '../components/Heading';
import { PageWrapper } from '../components/PageWrapper';
import { ProjectsList } from '../components/Projects/ProjectsList';
import { APP_TITLE_SUFFIX } from '../config';

const pageTitle = `Projects – ${APP_TITLE_SUFFIX}`;

const Projects = () => (
  <PageWrapper>
    <DefaultSeo title={pageTitle} />

    <Heading as="h1">Personal Projects</Heading>

    <Description>
      Get a glimpse into some of the side projects I&apos;ve tackled lately, including a personal finance mobile app, an
      AI-powered travel assistant, and e-commerce wpebstore from my early beginnings.
    </Description>

    <ProjectsList />
  </PageWrapper>
);

export default Projects;
