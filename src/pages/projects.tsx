import { DefaultSeo } from 'next-seo';
import { Heading } from '../components/Heading';
import { PageWrapper } from '../components/PageWrapper';
import { ProjectItem } from '../components/Projects/ProjectItem';
import { APP_TITLE_SUFFIX } from '../config';

const Projects = () => {
  return (
    <PageWrapper withTopInset>
      <>
        <DefaultSeo title={`Projects – ${APP_TITLE_SUFFIX}`} />
        <Heading as="h1" className="mr-auto">
          Projects
        </Heading>

        <p className="w-full mb-8 text-neutral-600 dark:text-neutral-400">
          Get a glimpse into the various side projects I&apos;ve tackled. From personal finance apps to voice-controlled
          to-do lists, I bring a unique blend of technical know-how and creative flair to every project I take on.
          Whether I&apos;m building an accessible online store or uncovering the beauty of mathematical patterns, I am
          always seeking to challenge myself and bring my ideas to life. So have a look, and see for yourself the
          projects that embody a bit of my passions and skills.
        </p>

        <ProjectItem
          title="Börsjakten"
          description="Embark on a financial journey with Börsjakten, a personal finance mobile app designed to educate and entertain. Explore the world of investing and personal finance, from the stock market to real estate and everything in between, all while playing in a stock market sandbox with virtual funds. Built with Swift and SwiftUI, Börsjakten is the perfect tool for anyone looking to take control of their financial future."
          date="March 2022"
          imagePath="/images/projects/borsjakten-showcase.png"
          link="https://github.com/Nojze/borsjakten"
          technologies="Side Project · Swift & SwiftUI"
        />

        <ProjectItem
          title="Voice-Controlled Productivity: A To-Do List App with Speech Recognition"
          description="Simplify your task management with this cutting-edge voice recognition application. Add, remove, and mark tasks as done, all with the power of your voice. Built with React, TypeScript, and Styled Components, this to-do list app is the perfect blend of convenience and innovation."
          date="December 2020"
          imagePath="/images/projects/voice-recognition-todo-list-showcase.png"
          link="https://voice-todo.rydkvist.com/"
          technologies="Side Project · React, TypeScript, Styled Components"
          imageClassName="bg-neutral-100 dark:bg-neutral-800"
          style={{ backgroundColor: '#70C9CD' }}
        />

        <ProjectItem
          title="Buysimple"
          description="Experience seamless online shopping with Buysimple, a user-friendly e-commerce platform designed with accessibility and functionality in mind. With an emphasis on clear information distribution and intuitive navigation, Buysimple is the perfect destination for anyone looking for a smooth and enjoyable shopping experience. Built with HTML, CSS, Bootstrap, JavaScript, and PHP."
          date="May 2019"
          videoURL="https://www.youtube.com/embed/u7r7hiHJaS8"
          link="https://github.com/Nojze/buysimple"
          technologies="Side Project · HTML, CSS, Bootstrap, JavaScript, PHP"
          imageClassName="bg-neutral-50"
        />

        <ProjectItem
          title="Fractal Wonders: A Mandelbrot Set Exploration"
          description="Dive into the world of mathematics with this programming project that re-creates the stunning patterns of the Mandelbrot set. Using my knowledge of discrete mathematics and complex numbers, I brought this intricate fractal to life with the help of C# and Windows Forms .NET. A true testament to the beauty and power of mathematics."
          date="April 2019"
          imagePath="/images/projects/mandelbrot-showcase.jpeg"
          link="https://github.com/Nojze/mandelbrot"
          technologies="Side Project · C#, Windows Forms .NET"
          imageClassName="bg-neutral-100 dark:bg-neutral-800"
          style={{ backgroundColor: '#020B64' }}
        />
      </>
    </PageWrapper>
  );
};

export default Projects;
