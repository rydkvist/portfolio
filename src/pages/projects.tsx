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

        <p className="w-full mb-8">
          I usually spend most of my time improving the product development of the companies I work for, but when I feel
          like trying new technologies or ideas, I usually create a side project where I can experiment. It varies from
          projects involving E-commerce, Stock Market, Investing, Math Equations, and more.
        </p>

        <ProjectItem
          title="Börsjakten"
          description="A Swedish Personal Finance mobile app where one can learn the main concepts of investing and personal finance, such as the Stock Market, Real Estate, Cryptocurrencies, Savings, and Bank Loans. One can play around with a Stock Market sandbox too, where you can buy and sells stocks with fictional money."
          date="March 2022"
          imagePath="/images/projects/borsjakten-showcase.png"
          link="https://github.com/Nojze/borsjakten"
          technologies="Side Project · Swift & SwiftUI"
        />

        <ProjectItem
          title="Voice Recognition To-Do List"
          description="In order to play around with the voice recognition technology I created a simple Voice Recognition To-Do List application where you can add, remove, and finish tasks with your voice (or manually)."
          date="December 2020"
          imagePath="/images/projects/voice-recognition-todo-list-showcase.png"
          link="https://voice-todo.rydkvist.com/"
          technologies="Side Project · React, TypeScript, Styled Components"
          imageClassName="bg-neutral-100 dark:bg-neutral-800"
        />

        <ProjectItem
          title="Buysimple"
          description="The concept of this work was to create an online store where the UX/UI of the website is suitable for all users, mainly focusing on the distribution of information, accessibility, and functionality of the website."
          date="May 2019"
          videoURL="https://www.youtube.com/embed/u7r7hiHJaS8"
          link="https://github.com/Nojze/buysimple"
          technologies="Side Project · HTML, CSS, Bootstrap, JavaScript, PHP"
          imageClassName="bg-neutral-50"
        />

        <ProjectItem
          title="Mandelbrot Set"
          description="A math programming project where I re-create the pattern of a Mandelbrot set using the knowledge I had in discrete mathematics and complex numbers."
          date="April 2019"
          imagePath="/images/projects/mandelbrot-showcase.jpeg"
          link="https://github.com/Nojze/mandelbrot"
          technologies="Side Project · C#, Windows Forms .NET"
          imageClassName="bg-neutral-100 dark:bg-neutral-800"
        />
      </>
    </PageWrapper>
  );
};

export default Projects;
