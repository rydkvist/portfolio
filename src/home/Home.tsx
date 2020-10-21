import React from "react";
import ReactLogo from "../assets/icons/ReactLogo";
import HTML5 from "../assets/icons/HTML5";
import NextJS from "../assets/icons/NextJS";
import styled, { css } from "styled-components";

const StyledItem = styled.div<any>`
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

const Item = ({ spin, children }: any) => (
  <StyledItem
    spin={spin}
    className={`flex flex-col w-12 h-12 mx-4 items-center justify-center`}
  >
    {children}
  </StyledItem>
);

const Home = () => {
  return (
    <div className="container max-w-screen-lg mx-auto">
      <div className="flex flex-col justify-center items-center px-8">
        <div className="mt-8">
          <img
            className="w-48 md:w-64 h-48 md:h-64 rounded-full border border-white"
            src="/favicon.ico"
            alt="Niklas Rydkvist"
          />
        </div>
        <h1 className="text-3xl mt-8 text-center font-normal">
          Hey there! I'm Niklas.
        </h1>
        <h3 className="text-2xl mt-4 md:mt-2 w-full text-center font-light leading-relaxed">
          I'm a passionate{" "}
          <span className="font-medium">software developer</span> from Sweden
          specializing in front-end development. I've been into programming
          since I was 14 years old, starting with creating my own game server
          with a community of over{" "}
          <span className="font-normal">10.000 users</span>, to today, where I
          develop and design professional web applications for companies with
          over <span className="font-normal">+4 million users</span>. <br />
          I'm comfortable working in stressful environments, where it is vital
          to be transparent, and to keep the synergy flow positive by being
          communicative, self-propelled, and analytical.
          <br />
          <br />
          <span className="text-xl"></span>
        </h3>
        <h1 className="text-2xl mt-2 text-center font-normal">
          Currently working in (Add more, not done yet, maybe add skill level
          under?)
        </h1>
        <div className="flex flex-row w-full justify-center items-center mt-4">
          <Item spin={true}>
            <div className="w-20 h-20">
              <ReactLogo />
            </div>
          </Item>
          <Item>
            <img
              src="https://www.typescriptlang.org/icons/icon-72x72.png?v=e0cca9b778c3248c7434bc3c68c0e8b2"
              alt="TypeScript"
              className="w-full h-full"
            />
          </Item>
          <Item>
            <img
              alt="NodeJS"
              src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg"
            />
          </Item>
          <Item>
            <img alt="Redux" src="https://redux.js.org/img/redux.svg" />
          </Item>
          <Item>
            <HTML5 />
          </Item>
          <Item>
            <NextJS />
          </Item>
        </div>
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
  );
};

export default Home;
