import React, { useState } from "react";
import styled from "styled-components/macro";
import { Text } from "../components/Text";
import { useMediaMax } from "../utils";
import { SocialMedia } from "../components/SocialMedia";
import {
  twitterURL,
  gitHubURL,
  linkedInURL,
  personalLocation,
  personalEmail,
  personalPhoneNumber,
} from "../config";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 100%;
  height: 100%;
  margin-bottom: 300px;
  @media screen and (max-width: 768px) {
    margin-bottom: 100px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 0px;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  @media screen and (max-width: 768px) {
    justify-content: center;
    order: 2;
  }
`;

const RightColumn = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  max-height: 400px;
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    justify-content: center;
    margin: 25px 50px 0px 50px;
  }
`;

const InformationWrapper = styled.div`
  margin-top: 50px;
  margin-left: 100px;
  @media screen and (max-width: 768px) {
    margin-top: 0px;
    margin-left: 0px;
    text-align: center;
  }
`;

const Title = styled.h1`
  color: #121212;
  font-size: 2.5rem;
  letter-spacing: 2px;
  font-weight: 500;
`;

const StyledLink = styled.a`
  &:hover {
    color: #256dc9;
  }
`;

const Contact = () => {
  const isMobile = useMediaMax(768);
  return (
    <StyledWrapper>
      <Wrapper>
        <LeftColumn>
          <ImageWrapper>
            <img
              src="/clearerNiklas.jpg"
              width={300}
              height="auto"
              alt="Niklas Rydkvist"
            />
          </ImageWrapper>
        </LeftColumn>

        <RightColumn>
          <InformationWrapper>
            <Title>Contact</Title>

            <Text>
              <span>E-mail: </span>
              <StyledLink
                href={`mailto:${personalEmail}`}
                title={personalEmail}
                style={{ color: "#121212" }}
              >
                {personalEmail}
              </StyledLink>
            </Text>
            <Text>
              <span>Phone: </span>
              <StyledLink
                href={`tel:${personalPhoneNumber}`}
                title={personalPhoneNumber}
                style={{ color: "#121212" }}
              >
                {personalPhoneNumber}
              </StyledLink>
            </Text>
            <Text>
              Location:
              <span style={{ color: "#121212" }}> {personalLocation}</span>
            </Text>
            <SocialMedia marginTop={isMobile ? 25 : 50} marginBottom={25}>
              <SocialMedia.Item
                key="social-media-linkedin"
                icon={<i className="fab fa-linkedin fa-lg"></i>}
                link={linkedInURL}
                altText="LinkedIn - Niklas Rydkvist"
              />
              <SocialMedia.Item
                key="social-media-github"
                icon={<i className="fab fa-github fa-lg"></i>}
                link={gitHubURL}
                altText="GitHub - Nojze"
              />
              <SocialMedia.Item
                key="social-media-twitter"
                icon={<i className="fab fa-twitter fa-lg"></i>}
                link={twitterURL}
                altText="Twitter"
              />
            </SocialMedia>
          </InformationWrapper>
        </RightColumn>
      </Wrapper>
    </StyledWrapper>
  );
};

export default Contact;
