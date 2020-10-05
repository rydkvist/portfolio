import React from "react";
import styled from "styled-components/macro";
import { SocialMedia } from "../components/SocialMedia";
import { useMediaMax } from "../utils";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 100px;
  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

const TextContent = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  letter-spacing: 1.5px;
  line-height: 1.5;
  font-weight: 500;
  flex-direction: column;
`;

const Home = () => {
  // const isMobile = useMediaMax(768);

  return (
    <Container>
      <TextContent>
        <p style={{ fontSize: "2rem", textAlign: "center", display: "block" }}>
          Hey there! I'm Niklas.
          <br />
          <span style={{ fontSize: "1.5rem" }}>
            A software developer from Sweden, Stockholm.
          </span>
        </p>
      </TextContent>
      <div style={{ width: "28rem" }}>
        <img width="100%" src="/niklasFullPicture.jpeg" alt="Niklas Rydkvist" />
      </div>
      <p
        style={{
          fontSize: "1.125rem",
          textAlign: "center",
        }}
      >
        Page is not finished yet. There is work in progress. <br />
        <br /> The same thing counts for all the other pages! :)
      </p>
      <SocialMedia marginTop={10}>
        <SocialMedia.Item
          key="social-media-linkedin"
          icon={<i className="fab fa-linkedin fa-lg"></i>}
          link={"https://www.linkedin.com/in/niklasrydkvist/"}
          altText="LinkedIn - Niklas Rydkvist"
        />
        <SocialMedia.Item
          key="social-media-github"
          icon={<i className="fab fa-github fa-lg"></i>}
          link={"https://github.com/Nojze"}
          altText="GitHub - Nojze"
        />
        <SocialMedia.Item
          key="social-media-twitter"
          icon={<i className="fab fa-twitter fa-lg"></i>}
          link={"https://twitter.com/"}
          altText="Twitter"
        />
      </SocialMedia>
    </Container>
  );
};

export default Home;
