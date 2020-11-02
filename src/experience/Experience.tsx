import React from "react";
import styled, { css } from "styled-components";
import ReactLogo from "../assets/icons/ReactLogo";
import NextJS from "../assets/icons/NextJS";

const StyledItem = styled.a<any>`
  ${(props) =>
    props.spin &&
    css`
      animation: spin 2.5s linear infinite;

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
  width: 100%;
  padding: 0 2rem;
  overflow: hidden;
  text-align: center;
`;

const Item = () => {
  return (
    <div
      className="container w-1/2 h-auto bg-blue-100 px-4 py-2 rounded"
      style={{ fontFamily: "Source Sans Pro" }}
    >
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-lg text-black font-semibold uppercase">Founder</h2>
        <h3 className="text-sm text-gray-500">apr 2014 - may 2015</h3>
      </div>
      {/* <div className="rounded-md bg-blue-600 bg-opacity-75 py-1 px-2 inline-block mt-1">
        <p className="text-white text-sm font-medium">SharkCraft</p>
      </div> */}
    </div>
  );
};

const TechLink = ({ spin, children, href }: any) => {
  return (
    <StyledItem
      spin={spin}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex flex-col h-full m-4 mx-6 items-center justify-center`}
    >
      {children}
    </StyledItem>
  );
};

const Experience = () => {
  return (
    <div className="container max-w-screen-lg mx-auto">
      <div className="mt-8">
        <h1 className="text-3xl text-center mb-6 z-50">
          Tech I work with (not done)
          {/* the moment (Add more, not done yet, maybe add
            skill level under?) */}
        </h1>
        <TechList
          id="tech-list"
          className="block flex-col w-full justify-center items-center mx-auto"
        >
          {/* <AnimationDiv> */}
          <TechLink spin={true} href="https://reactjs.org/">
            <ReactLogo width="w-12" height="h-full" />
          </TechLink>

          <TechLink href="https://nodejs.org/en/">
            <img
              alt="NodeJS"
              src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg"
              className="w-12 h-full"
            />
          </TechLink>

          <TechLink href="https://redux.js.org/">
            <img
              alt="Redux"
              src="https://redux.js.org/img/redux.svg"
              className="w-12 h-full"
            />
          </TechLink>

          <TechLink href="https://nextjs.org/">
            <NextJS width="w-12" height="h-full" />
          </TechLink>
          <TechLink href="https://www.typescriptlang.org/">
            <img
              src="https://www.typescriptlang.org/icons/icon-72x72.png?v=e0cca9b778c3248c7434bc3c68c0e8b2"
              alt="TypeScript"
              className="w-12 h-full"
            />
          </TechLink>
          <TechLink href="https://en.wikipedia.org/wiki/JavaScript">
            <img
              alt="JavaScript ES5/ES6"
              src="/images/JavaScript.svg"
              className="w-12 h-full"
            />
          </TechLink>
          <TechLink href="https://en.wikipedia.org/wiki/HTML5">
            <img alt="HTML5" src="/images/HTML5.svg" className="w-12 h-full" />
          </TechLink>
          <TechLink href="https://en.wikipedia.org/wiki/CSS">
            <img alt="CSS3" src="/images/CSS3.svg" className="w-12 h-12" />
          </TechLink>
          <TechLink href="https://sass-lang.com/">
            <img alt="SASS" src="/images/SASS.svg" className="w-12 h-full" />
          </TechLink>
          <TechLink href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)">
            <img
              alt="C#"
              src="/images/CSharpLogo.svg"
              className="w-12 h-full"
            />
          </TechLink>
          <TechLink href="https://getbootstrap.com/">
            <img
              alt="Bootstrap"
              src="/images/Bootstrap.svg"
              className="w-12 h-full"
            />
          </TechLink>

          <TechLink href="https://styled-components.com/">
            <img
              alt="Styled Components"
              src="/images/StyledComponents.png"
              className="w-32"
            />
          </TechLink>

          <TechLink href="https://storybook.js.org/">
            <img
              alt="StorybookJS"
              src="/images/Storybook.png"
              className="w-32"
            />
          </TechLink>
          <TechLink href="https://www.cypress.io/">
            <img alt="Cypress.io" src="/images/Cypress.png" className="w-32" />
          </TechLink>
          <TechLink>Jest..</TechLink>
          <TechLink>TailwindCSS..</TechLink>
          {/* </AnimationDiv> */}
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
      {/* <h1 className="text-4xl text-center mt-8">Work Experience (WIP)</h1> */}
      <div className="w-full h-full flex flex-col items-center justify-center">
        {/* <Item /> */}
      </div>
    </div>
  );
};

export default Experience;
