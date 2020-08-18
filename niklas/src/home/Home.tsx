import React from "react";
import styled from "styled-components/macro";
import { SocialMedia } from "../components/SocialMedia";
import { useMediaMax } from "../utils/";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const TextContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  font-size: 2rem;
  letter-spacing: 1.5px;
  line-height: 1.5;
  font-weight: 500;
  flex-direction: column;
`;

const Home = () => {
  const isMobile = useMediaMax(768);

  return (
    <Container>
      <TextContent>
        <p
          style={{ fontSize: "1.5rem", textAlign: "center", display: "block" }}
        >
          Hey there! I'm Niklas.
          <br />
          <span style={{ fontSize: "2rem" }}>I'm a Software Developer</span>
        </p>

        {/*<p
          style={{
            fontSize: "1.2rem",
            marginTop: 50,
            width: isMobile ? "80%" : "60%",
            alignSelf: "center",
            textAlign: "center",
            lineHeight: 1.8,
          }}
        >
          There still work to do on the page, but it is cool seing you around
          here!
        </p>*/}
      </TextContent>
      <SocialMedia marginTop={100}>
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
      {/* Temporal div for spacing */}
      <div style={{ marginBottom: isMobile ? 160 : 220 }} />
    </Container>
  );
};

export default Home;
