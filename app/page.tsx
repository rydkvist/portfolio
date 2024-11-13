import Image from 'next/image';

const currentDate = new Date();

const birthDate = new Date('2001-11-04');
let yearsOfLife = currentDate.getFullYear() - birthDate.getFullYear();
if (currentDate < new Date(currentDate.getFullYear(), birthDate.getMonth(), birthDate.getDate())) {
  yearsOfLife--;
}

const startOfExperience = new Date('2018-08-01');
let yearsOfExperience = currentDate.getFullYear() - startOfExperience.getFullYear();
if (currentDate < new Date(currentDate.getFullYear(), startOfExperience.getMonth(), startOfExperience.getDate())) {
  yearsOfExperience--;
}

const HALF_YEAR_IN_SECONDS = 60 * 60 * 24 * 180;
export const revalidate = HALF_YEAR_IN_SECONDS;

const About = () => {
  return (
    <>
      <h1 className="size-xxl text-center">Hi! I&apos;m Niklas 👋🏼</h1>
      <div className="relative h-40 w-40 overflow-hidden rounded-full border border-black md:h-48 md:w-48 dark:border-white">
        <Image
          src="/images/about/NiklasKrakowSquare.jpg"
          alt="Picture of Niklas Rydkvist"
          width={192}
          height={192}
          priority
        />
      </div>

      <hr className="mt-12" />
      <h2 className="size-xl">My Story</h2>
      <p className="description">
        Hey there! I&apos;m <b>Niklas Rydkvist</b>, a Senior Frontend Engineer based in Stockholm with roots down in the
        southern coast of Spain. My passion for technology started early in my teens when I began exploring programming
        and building multiplayer server and online communities in Minecraft. These hands-on experiences sparked my
        interest in software development and set me on the path I&apos;m on today.
        <br />
        <br />
        Over the past <b>{yearsOfExperience} years</b>, I&apos;ve had the opportunity to work in various industries like
        e-commerce, entertainment, and insurance, contributing to both startups and established companies. I&apos;m
        always curious and love learning new things, which has helped me grow both personally and professionally.
      </p>

      <hr className="mt-4" />
      <h2 className="size-xl">What I Do</h2>
      <p className="description">
        Currently, I&apos;m a <b>Senior Frontend Engineer at H&M Group</b>, enhancing e-commerce solutions for{' '}
        <a href="https://www.arket.com" className="font-semibold hocus:underline">
          ARKET
        </a>
        , reaching thousands of users daily. I take pride in creating intuitive interfaces and writing clean,
        maintainable code.
      </p>

      <hr className="mt-4" />
      <h2 className="size-xl">My Approach</h2>
      <p className="description">
        I believe technology should make people&apos;s lives better. My early experiences taught me the importance of
        focusing on the user. I strive to create interfaces that are not just functional and high-performing but also
        intuitive and enjoyable to use.
      </p>
      <ul className="space-y- mb-4 ml-8 list-disc">
        <li>
          <b>User-Focused Development</b>: Ensuring that what we build meets the needs of the users and the goals of the
          product.
        </li>
        <li>
          <b>Quality Matters</b>: Committed to best practices in <b>UX/UI design</b>, <b>accessibility</b>, and writing
          clean, maintainable code.
        </li>
        <li>
          <b>Team Collaboration</b>: I enjoy working with others and believe that teamwork leads to the best results.
        </li>
      </ul>

      <hr className="mt-4" />
      <h2 className="size-xl">Looking Ahead</h2>
      <p className="description">
        At {yearsOfLife}, I&apos;m excited about what’s next. I&apos;m aiming to step into roles where I can share my
        knowledge, contribute to meaningful projects, and explore new ways to innovate. I&apos;m excited to tackle new
        challenges that push my limits in product engineering and leadership
      </p>

      <hr className="mt-4" />
      <h2 className="size-xl">Outside of Work</h2>
      <p className="description">
        When I step away from my computer, there is always something going on.
        <br />
        Beyond keeping up with the latest tech trends, I&apos;m all about enjoying the world outside. You might find me
        exploring new places, working out, updating my stock portfolio, or investing in personal growth.
        <br />I love trying out different cuisines like Asian fusion, immersing myself in new environments in the world,
        and just hanging out, exchanging stories and experiences with people I meet along the way.
        <br />
        <br />
        Growing up with the internet, playing games, and building things as a kid, my love for tech has always been a
        big part of my life. It&apos;s this love that keeps me excited about every new project I tackle, ensuring that I
        put my all into the work I do and the life I live.
      </p>

      <hr className="mt-4" />
      <h2 className="size-xl">Tech Stack</h2>
      <p className="description mt-4 text-center md:mt-0">Web Applications</p>
      <ul className="mb-8 flex flex-row flex-wrap justify-center gap-2">
        {webTechStack.map(technology => (
          <TechStackItem key={technology.name} {...technology} />
        ))}
      </ul>
      <p className="description text-center">Mobile Applications</p>
      <ul className="flex flex-row flex-wrap justify-center gap-2">
        {mobileTechStack.map(technology => (
          <TechStackItem key={technology.name} {...technology} />
        ))}
      </ul>
      <h2 className="size-xl">More Tech I&apos;m Experienced In</h2>
      <p className="description italic">{skills.join(', ')}</p>

      {/* TODO: categorize skills for easier category mapping       
      <div className="flex flex-row flex-wrap gap-8">
        <div>
          <p className="description">Front-End Technologies</p>
          <ul className="mb-4 ml-8 mr-auto list-disc">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>TailwindCSS</li>
            <li>Svelte</li>
            <li>Sass</li>
            <li>Styled Components</li>
          </ul>
        </div>

        <div>
          <p className="description">Testing Frameworks</p>
          <ul className="mb-4 ml-8 mr-auto list-disc">
            <li>Cypress</li>
            <li>Jest</li>
            <li>End-to-End Testing</li>
            <li>Unit Testing</li>
          </ul>
        </div>

        <div>
          <p className="description">Design and UX/UI</p>
          <ul className="mb-4 ml-8 mr-auto list-disc">
            <li>Figma</li>
            <li>Storybook</li>
            <li>User Experience (UX)</li>
            <li>User Interface (UI)</li>
            <li>User Accessibility</li>
          </ul>
        </div>

        <div>
          <p className="description">Other Tools and Technologies</p>
          <ul className="mb-4 ml-8 mr-auto list-disc">
            <li>Redux</li>
            <li>Headless CMS</li>
            <li>Storyblok</li>
            <li>Centra</li>
            <li>Ingrid (SaaS)</li>
            <li>UIKit</li>
            <li>Multithreading Programming</li>
            <li>Quality Assurance (QA)</li>
            <li>SEO</li>
            <li>Copywriting</li>
            <li>TestFlight</li>
            <li>DevOps</li>
          </ul>
        </div>

        <div>
          <p className="description">Back-End and APIs</p>
          <ul className="mb-4 ml-8 mr-auto list-disc">
            <li>C# .NET</li>
            <li>APIs</li>
            <li>Socket.IO</li>
            <li>WebRTC</li>
          </ul>
        </div>

        <div>
          <p className="description">DevOps and Cloud</p>
          <ul className="mb-4 ml-8 mr-auto list-disc">
            <li>Git</li>
            <li>CI/CD</li>
            <li>TDD (Test-Driven Development)</li>
            <li>Azure</li>
            <li>Google Cloud</li>
            <li>AWS</li>
            <li>Docker</li>
            <li>Netlify</li>
          </ul>
        </div>
      </div> */}
    </>
  );
};

const TechStackItem = ({ name, imageSrc }: TechStack) => (
  <li className="flex flex-col items-center px-4 py-2">
    <div className="relative mb-2 h-16 w-16 overflow-hidden rounded-md">
      <Image src={imageSrc} alt={name} width={64} height={64} />
    </div>
    <span className="flex max-w-[0.75rem] justify-center font-semibold">{name}</span>
  </li>
);

type TechStack = {
  name: string;
  imageSrc: string;
};

const webTechStack: TechStack[] = [
  { name: 'Next.js', imageSrc: '/images/technologies/Next.png' },
  { name: 'TypeScript', imageSrc: '/images/technologies/TypeScript.png' },
  { name: 'JavaScript', imageSrc: '/images/technologies/JavaScript.png' },
  { name: 'React', imageSrc: '/images/technologies/React.png' },
];

const mobileTechStack: TechStack[] = [
  { name: 'Swift', imageSrc: '/images/technologies/Swift.png' },
  { name: 'SwiftUI', imageSrc: '/images/technologies/SwiftUI.png' },
  { name: 'React Native', imageSrc: '/images/technologies/React.png' },
];

const skills = [
  'HTML5',
  'CSS3',
  'TailwindCSS',
  'Cypress',
  'Jest',
  'Styled Components',
  'Svelte',
  'Sass',
  'End-to-end testing',
  'Unit testing',
  'Storybook',
  'HeadlessCMS',
  'Storyblok',
  'C# .NET',
  'Centra',
  'Git',
  'CI/CD',
  'TDD',
  'Ingrid (SaaS)',
  'APIs',
  'UIKit',
  'Redux',
  'Figma',
  'UX/UI',
  'User Accessibility',
  'QA (Quality Assurance)',
  'SEO',
  'Copywriting',
  'Multi-threading programming',
  'SocketIO',
  'WebRTC',
  'Azure',
  'Google Cloud',
  'Docker',
  'Test Flight',
  'DevOps',
  'AWS',
  'Netlify',
];

export default About;
