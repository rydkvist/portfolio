import React from "react";
import ReactLogo from "../assets/icons/ReactLogo";
import NextJS from "../assets/icons/NextJS";
import styled, { css } from "styled-components";

const StyledItem = styled.a<any>`
  animation: move 1.5s linear infinite;

  @keyframes move {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }

  ${(props) =>
    props.spin &&
    css`
      animation: spin move 2.5s linear infinite;

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `}
`;

const TechList = styled.div`
  position: relative;
`;

const TechLink = ({ spin, children, href }: any) => (
  <StyledItem
    spin={spin}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex flex-col w-12 h-12 m-4 items-center justify-center`}
  >
    {children}
  </StyledItem>
);

const Home = () => {
  return (
    <div className="container max-w-screen-lg mx-auto">
      <div className="flex flex-col justify-center items-center px-8">
        <div className="mt-4">
          <img
            className="w-48 md:w-64 h-48 md:h-64 rounded-full border border"
            src="/favicon.ico"
            alt="Niklas Rydkvist"
          />
        </div>
        <h1 className="text-3xl mt-4 text-center font-normal">
          Hey there! I'm Niklas.
        </h1>
        <h3 className="text-2xl mt-4 md:mt-2 w-full text-left md:text-center font-light leading-relaxed">
          I'm a passionate{" "}
          <span className="font-medium">software developer</span> from Sweden
          specializing in front-end development. I've been into programming
          since I was 14 years old, starting with creating my own game server
          with a community of over{" "}
          <span className="font-normal">10.000 users</span>, until this day,
          where I develop and design professional web applications for companies
          with over <span className="font-normal">+4 million users</span>.{" "}
          <br />
          <br />
          I'm a person who is comfortable working in stressful environments,
          where it is vital to be transparent and to keep the moral of the group
          up by being communicative, self-propelled, and analytical.
        </h3>

        <div className="mt-8">
          <h1 className="text-3xl text-center mb-6">
            Tech I'm working with
            {/* the moment (Add more, not done yet, maybe add
            skill level under?) */}
          </h1>
          <TechList className="block flex-col w-full justify-center items-center">
            <TechLink spin={true} href="https://reactjs.org/">
              <ReactLogo />
            </TechLink>

            <TechLink href="https://nodejs.org/en/">
              <img
                alt="NodeJS"
                src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg"
                className="w-full h-full"
              />
            </TechLink>

            <TechLink href="https://redux.js.org/">
              <img
                alt="Redux"
                src="https://redux.js.org/img/redux.svg"
                className="w-full h-full"
              />
            </TechLink>

            <TechLink href="https://nextjs.org/">
              <NextJS />
            </TechLink>
            <TechLink href="https://www.typescriptlang.org/">
              <img
                src="https://www.typescriptlang.org/icons/icon-72x72.png?v=e0cca9b778c3248c7434bc3c68c0e8b2"
                alt="TypeScript"
                className="w-full h-full"
              />
            </TechLink>
            <TechLink href="https://en.wikipedia.org/wiki/JavaScript">
              <img
                alt="JavaScript ES5/ES6"
                src="/images/JavaScript.svg"
                className="w-full h-full"
              />
            </TechLink>
            <TechLink href="https://en.wikipedia.org/wiki/HTML5">
              <img
                alt="HTML5"
                src="/images/HTML5.svg"
                className="w-full h-full"
              />
            </TechLink>
            <TechLink href="https://en.wikipedia.org/wiki/CSS">
              <img
                alt="CSS3"
                src="/images/CSS3.svg"
                className="w-full h-full"
              />
            </TechLink>
            <TechLink href="https://sass-lang.com/">
              <img
                alt="SASS"
                src="/images/SASS.svg"
                className="w-full h-full"
              />
            </TechLink>
            {/* <TechLink href="https://storybook.js.org/">
              <img
                alt="StorybookJS"
                src="/images/Storybook.png"
                className="w-full h-full"
              />
            </TechLink> */}
            {/* <TechLink href="https://www.cypress.io/">
              <img
                alt="Cypress.io"
                src="/images/Cypress.png"
                className="w-full h-full"
              />
            </TechLink> */}
          </TechList>
          {/* <p className="text-xl mt-4 md:mt-2 w-1/2 text-center font-light leading-relaxed">
          One may say that I'm a perfectonist, but I just like to find
          intelligent solutions to keep things simple and easy for everybody.
        </p> */}

          {/** Well-versed in several programming languages ​​such as
          React, TypeScript, NodeJS, HTML, CSS, JavaScript, Java, C#, NextJS,
          TailwindCSS, Bootstrap, Redux, ExpressJS, Styled Components, Jest,
          Cypress */}
        </div>
      </div>
    </div>
  );
};

export default Home;
