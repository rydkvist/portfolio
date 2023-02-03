import Image from 'next/image';
import { TechnologyItem } from '../components/About/TechnologyItem';
import { Heading } from '../components/Heading';
import { PageWrapper } from '../components/PageWrapper';

const Landing = () => {
  return (
    <PageWrapper withTopInset>
      <>
        <Heading as="h1">Hey there! I&apos;m Niklas 👋🏼</Heading>

        <div className="w-40 md:w-48 h-40 md:h-48 overflow-hidden rounded-full relative">
          <Image
            src="/images/me/NiklasMalmo.png"
            alt="Picture of Niklas Rydkvist"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <Heading as="h2">Who am I?</Heading>
        <p>
          I&apos;m a Software Engineer with 5 years of experience under my belt, bringing a unique mix of technical
          skills, problem-solving abilities, and a passion for innovation to every project I work on. I&apos;m all about
          front-end and iOS development technologies like React, TypeScript, Next.js, React Native, Swift, SwiftUI and
          more. I love paying attention to detail and always strive to deliver the best user experience (UX/UI)
          possible, while also keeping accessibility and test automation in mind.
          <br />
          <br />
          When I&apos;m not knacking code, you can find me keeping an eye on the stock market, hitting the gym,
          exploring new destinations, or making connections with interesting individuals. I believe in a balanced
          approach to life and work, and make sure to allocate time for activities that keep me inspired and energized.
        </p>

        <Heading as="h2">My Tech Stack</Heading>
        <ul className="flex flex-row justify-center flex-wrap text-center">
          <TechnologyItem value="TypeScript" technologySourceImage="TypeScript" />
          <TechnologyItem value="React" technologySourceImage="React" />
          <TechnologyItem value="React Native" technologySourceImage="ReactNative" />
          <TechnologyItem value="Swift" technologySourceImage="Swift" />
          <TechnologyItem value="SwiftUI" technologySourceImage="SwiftUI" />
        </ul>

        <ul className="flex flex-row justify-center flex-wrap text-center">
          <TechnologyItem value="JavaScript" technologySourceImage="JavaScript" />
          <TechnologyItem value="HTML5" technologySourceImage="HTML5" />
          <TechnologyItem value="CSS3" technologySourceImage="CSS3" />
        </ul>

        <Heading as="h2">Further Tech I&apos;m experienced in</Heading>
        {/* TODO: Maybe show the other technologies with a scrolling carousel? Like when companies show sponsors etc */}
        <p className="italic">
          NextJS, TailwindCSS, Cypress, Jest, Styled Components, Svelte, Sass, End-to-end testing, Unit testing,
          Storybook, C# .NET, Git, CI/CD, TDD, APIs, UIKit, Redux, Figma, UX/UI, User Accessibility, QA (Quality
          Assurance), SEO, Copywriting, multi-threading programming, SocketIO, WebRTC, Azure, Google Cloud, Docker, Test
          Flight, DevOps, AWS and Netlify.
        </p>
      </>
    </PageWrapper>
  );
};

export default Landing;
