import Image from 'next/image';

const yearsOfExperience = new Date().getFullYear() - 2018;

export type TechStack = {
  value: string;
  imageSrc: string;
};

const webDevTechnologies: Array<TechStack> = [
  { value: 'JavaScript', imageSrc: 'JavaScript' },
  { value: 'TypeScript', imageSrc: 'TypeScript' },
  { value: 'React', imageSrc: 'React' },
  { value: 'Next.js', imageSrc: 'Next' },
];

const appDevTechnologies: Array<TechStack> = [
  { value: 'React Native', imageSrc: 'React' },
  { value: 'Swift', imageSrc: 'Swift' },
  { value: 'SwiftUI', imageSrc: 'SwiftUI' },
];

const About = () => {
  return (
    <>
      <h1 className="size-xxl text-center">Hi! I&apos;m Niklas 👋🏼</h1>

      <div className="w-40 md:w-48 h-40 md:h-48 overflow-hidden rounded-full border-black dark:border-white border relative">
        <Image
          src="/images/about/Niklas.png"
          alt="Picture of Niklas Rydkvist"
          layout="fill"
          objectFit="cover"
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
      <ul className="flex flex-row justify-center gap-1 flex-wrap mb-8">
        {webDevTechnologies.map(technology => (
          <TechStackItem key={technology.value} {...technology} />
        ))}
      </ul>

      <p className="description">Mobile Applications</p>
      <ul className="flex flex-row justify-center gap-1 flex-wrap">
        {appDevTechnologies.map(technology => (
          <TechStackItem key={technology.value} {...technology} />
        ))}
      </ul>

      <h2 className="size-xl">More Tech I&apos;m experienced in</h2>
      <p className="description italic">
        HTML5, CSS3, TailwindCSS, Cypress, Jest, Styled Components, Svelte, Sass, End-to-end testing, Unit testing,
        Storybook, C# .NET, Git, CI/CD, TDD, APIs, UIKit, Redux, Figma, UX/UI, User Accessibility, QA (Quality
        Assurance), SEO, Copywriting, multi-threading programming, SocketIO, WebRTC, Azure, Google Cloud, Docker, Test
        Flight, DevOps, AWS and Netlify.
      </p>
    </>
  );
};

const TechStackItem = ({ value, imageSrc }: TechStack) => {
  return (
    <li className={`flex flex-col items-center px-4 py-2`}>
      <div className={`w-16 h-16 overflow-hidden rounded-md mb-2 relative`}>
        <Image src={`/images/technologies/${imageSrc}.png`} alt={imageSrc} layout="fill" objectFit="contain" priority />
      </div>
      <span style={{ maxWidth: '0.75rem', display: 'flex', justifyContent: 'center' }}>{value}</span>
    </li>
  );
};

export default About;
