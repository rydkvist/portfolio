import React, { useState } from "react";
import styled from "styled-components/macro";
import { Text } from "../components/Text";
import clearerNiklasFULL from "../assets/images/clearerNiklasFULL.jpg";
import { useMediaMax } from "../utils/";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 25px;
  @media screen and (max-width: 768px) {
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
  @media screen and (max-width: 768px) {
    margin-top: 25px;
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
  color: #f4f4f4;
  font-size: 2.5rem;
  letter-spacing: 2px;
  font-weight: 500;
`;

const SocialMediaList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  margin-top: 25px;
`;

const SocialMediaItem = styled.li`
  display: inline-flex;
  margin: 0;
  margin-right: 10px;
  &:last-child {
    margin-right: 0px;
  }
`;

const CircleLink = styled.a`
  background-color: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.5);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Contact = () => {
  const isMobile = useMediaMax(768);
  return (
    <StyledWrapper>
      <Wrapper>
        <LeftColumn>
          <ImageWrapper>
            <img
              src={clearerNiklasFULL}
              width={isMobile ? 200 : 300}
              height="auto"
              alt="Niklas Rydkvist"
            />
          </ImageWrapper>
        </LeftColumn>

        <RightColumn>
          <InformationWrapper>
            <Title>Contact</Title>
            <Text>
              Location:
              <span style={{ color: "#F4F4F4" }}> Stockholm, Sweden</span>
            </Text>
            <Text>
              <span>Email: </span>
              <a href="mailto:niklasryd01@gmail.com">niklasryd01@gmail.com</a>
            </Text>
            <Text>
              <span>Phone: </span>
              <a href="tlf://+470703771104">+46 070 377 11 04</a>
            </Text>
            {/*<SocialMediaList>
              <SocialMediaItem>
                <CircleLink href="#">
                  <span>L</span>
                </CircleLink>
              </SocialMediaItem>
              <SocialMediaItem>
                <CircleLink href="#">
                  <span>L</span>
                </CircleLink>
              </SocialMediaItem>
            </SocialMediaList>*/}
          </InformationWrapper>
        </RightColumn>
      </Wrapper>
    </StyledWrapper>
  );
};

export default Contact;
