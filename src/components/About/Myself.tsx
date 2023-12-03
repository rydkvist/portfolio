import { Description } from '../Description';
import { Heading } from '../Heading';

const totalYearsOfExperience = new Date().getFullYear() - 2018;

export const Myself = () => (
  <>
    <Heading as="h2">My Story</Heading>
    <Description>
      Hey there! I&apos;m a Software Engineer based in Stockholm, with roots stretching all the way to the southern
      coast of Spain. My journey began in the pixelated landscapes of Minecraft Servers and Habbo Hotel, where I first
      experienced the thrill of building multiplayer servers and online communities. These early experiences, from
      leading staff teams in virtual worlds to running my own Minecraft server with a 10,000-strong user base and its
      online webstore, laid the groundwork for my career in software development, focusing on web and mobile app
      development.
      <br />
      <br />
      With over {totalYearsOfExperience} years of professional experience, I’ve transitioned from those playful
      beginnings to mastering technologies within the web and mobile landscapes, such as TypeScript, React, Node.js,
      Next.js, React Native, Swift, and many more. My approach to software development is deeply rooted in putting the
      user first, a perspective honed from my early experiences in creating engaging online communities. This
      user-focused mindset, coupled with a keen eye for UX/UI, drives me to craft interfaces that are intuitive,
      functional, and visually appealing.
      <br />
      <br />
      My work today is a reflection of that journey: a blend of creative innovation and technical skills. It&apos;s
      shaped by a lifelong curiosity and a dedication to personal and professional growth, adapting and thriving in the
      rapidly advancing world of software development.
    </Description>
    <Heading as="h2">Outside of Work</Heading>
    <Description>
      When I step away from my computer, there&apos; always something going on. Beyond keeping up with the latest tech
      trends, I&apos;m all about enjoying the world outside. You might find me exploring new places, working out, or
      updating my stock portfolio. I love trying out different cuisines, immersing myself in new environments, and just
      hanging out, exchanging stories and experiences with people I meet along the way.
      <br />
      <br />
      Growing up with the internet, playing games, and building things as a kid, my love for tech has always been a big
      part of my life. It&apos;s this love that keeps me excited about every new project I tackle, ensuring that I put
      my all into the work I do and the life I live.
    </Description>
  </>
);
