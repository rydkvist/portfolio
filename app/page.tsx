import Image from 'next/image';

const yearsOfExperience = new Date().getFullYear() - 2018;

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

      <h2 className="size-xl">My Story</h2>
      <p className="description">
        Hey there! I&apos;m a Software Engineer based in Stockholm, with roots stretching all the way to the southern
        coast of Spain. My journey began in the pixelated landscapes of Minecraft Servers and Habbo Hotel, where I first
        experienced the thrill of building multiplayer servers and online communities. These early experiences, from
        leading staff teams in virtual worlds to running my own Minecraft server with a 10,000-strong user base and its
        online webstore, laid the groundwork for my career in software development, focusing on web and mobile app
        development.
        <br />
        <br />
        With over {yearsOfExperience} years of professional experience, I’ve transitioned from those playful beginnings
        to mastering technologies within the web and mobile landscapes, such as TypeScript, React, Node.js, Next.js,
        React Native, Swift, and many more. My approach to software development is deeply rooted in putting the user
        first, a perspective honed from my early experiences in creating engaging online communities. This user-focused
        mindset, coupled with a keen eye for UX/UI, drives me to craft interfaces that are intuitive, functional, and
        visually appealing.
        <br />
        <br />
        My work today is a reflection of that journey: a blend of creative innovation and technical skills. It&apos;s
        shaped by a lifelong curiosity and a dedication to personal and professional growth, adapting and thriving in
        the rapidly advancing world of software development.
      </p>
      <h2 className="size-xl">Outside of Work</h2>
      <p className="description">
        When I step away from my computer, there&apos; always something going on. Beyond keeping up with the latest tech
        trends, I&apos;m all about enjoying the world outside. You might find me exploring new places, working out, or
        updating my stock portfolio. I love trying out different cuisines, immersing myself in new environments, and
        just hanging out, exchanging stories and experiences with people I meet along the way.
        <br />
        <br />
        Growing up with the internet, playing games, and building things as a kid, my love for tech has always been a
        big part of my life. It&apos;s this love that keeps me excited about every new project I tackle, ensuring that I
        put my all into the work I do and the life I live.
      </p>

      <h2 className="size-xl">Tech Stack</h2>

      <p className="description mt-8">Web Applications</p>
      <ul className="mb-8 flex flex-row flex-wrap justify-center gap-2">
        {webTechStack.map(technology => (
          <TechStackItem key={technology.name} {...technology} />
        ))}
      </ul>

      <p className="description">Mobile Applications</p>
      <ul className="flex flex-row flex-wrap justify-center gap-2">
        {mobileTechStack.map(technology => (
          <TechStackItem key={technology.name} {...technology} />
        ))}
      </ul>

      <h2 className="size-xl">More Tech I&apos;m experienced in</h2>
      <p className="description italic">{skills.join(', ')}</p>
    </>
  );
};

const TechStackItem = ({ name, imageSrc }: TechStack) => (
  <li className="flex flex-col items-center px-4 py-2">
    <div className="relative mb-2 h-16 w-16 overflow-hidden rounded-md">
      <Image src={imageSrc} alt={name} width={64} height={64} />
    </div>
    <span className="flex max-w-[0.75rem] justify-center">{name}</span>
  </li>
);

type TechStack = {
  name: string;
  imageSrc: string;
};

const webTechStack: TechStack[] = [
  { name: 'Next.js', imageSrc: '/images/technologies/Next.png' },
  { name: 'React', imageSrc: '/images/technologies/React.png' },
  { name: 'TypeScript', imageSrc: '/images/technologies/TypeScript.png' },
  { name: 'JavaScript', imageSrc: '/images/technologies/JavaScript.png' },
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
  'C# .NET',
  'Git',
  'CI/CD',
  'TDD',
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
