import { Projects } from '@/_domains/projects/Projects';

const Page = () => (
  <>
    <h1 className="size-xxl">Personal Projects</h1>

    <p className="description">
      Get a glimpse into some of the side projects I&apos;ve tackled lately, including a personal finance mobile app, an
      AI-powered travel assistant, and e-commerce wpebstore from my early beginnings.
    </p>

    <Projects />
  </>
);

export default Page;
