import { Projects } from '@/features/projects/components/Projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hobby Projects',
};

const Page = () => (
  <>
    <h1 className="size-xxl text-center">Hobby Projects</h1>

    <p className="description">
      Get a glimpse into some of the side projects I&apos;ve tackled lately, including a personal finance mobile app,
      and a AI-powered travel assistant.
    </p>

    <Projects />
  </>
);

export default Page;
