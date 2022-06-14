import Image from 'next/image';
import { TechnologyItem } from '../components/About/TechnologyItem';
import { Heading } from '../components/Heading';
import { PageWrapper } from '../components/PageWrapper';

const Landing = () => {
  return (
    <PageWrapper>
      <>
        <Heading as="h1">Hey there! I&apos;m Niklas 👋🏼</Heading>

        <div className="w-40 md:w-48 h-40 md:h-48 overflow-hidden rounded-full relative">
          <Image
            src="/images/NiklasVaxholm.png"
            alt="Picture of Niklas Rydkvist"
            layout="fill"
            objectFit="cover"
            objectPosition={'0% 5%'}
            priority
          />
        </div>

        <Heading as="h2">Who am I?</Heading>
        <p>
          I&apos;m a passionate and driven <span className="font-semibold">Software Engineer</span> from Stockholm,
          Sweden specializing in both <span className="font-semibold">web and app development</span>. I create
          enterprise end-to-end applications by building scalable architectures with{' '}
          <span className="font-semibold">great code quality</span> and{' '}
          <span className="font-semibold">excellent user experience (UX/UI)</span>.
          <br />
          I&apos;m <span className="font-semibold">highly product-oriented</span> and like to discuss different business
          perspectives with the team in order to lead the product to the right direction. Other than experimenting with
          new technologies I also invest some of my time into the stock market, working out, travelling and meeting new
          exciting people!
        </p>

        <Heading as="h2">My tech stack</Heading>
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

        <Heading as="h2">More tech I&apos;m experienced with</Heading>
        {/* TODO: Maybe show the other technologies with a scrolling carousel? Like when companies show sponsors etc */}
        <p className="italic">
          NextJS, TailwindCSS, Cypress, Jest, End-to-end testing, Unit testing, Storybook, Git, CI/CD, TDD, APIs, UIKit,
          Redux, Figma, User Accessibility, QA (Quality Assurance), SEO, Copywriting, multi-threading programming,
          SocketIO, WebRTC, Google Cloud, Docker, Test Flight, Azure DevOps, AWS and Netlify.
        </p>
      </>
    </PageWrapper>
  );
};

export default Landing;
