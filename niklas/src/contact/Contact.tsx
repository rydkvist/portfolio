import React, { useState } from "react";
import styled from "styled-components/macro";
import { Text } from "../components/Text";
import clearerNiklasFULL from "../assets/images/clearerNiklasFULL.jpg";

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
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  @media screen and (max-width: 768px) {
    justify-content: center;
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
  margin-top: 100px;
  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

const InformationWrapper = styled.div`
  margin-top: 150px;
  margin-left: 100px;
  @media screen and (max-width: 768px) {
    margin-top: 0px;
    margin-left: 0px;
    text-align: center;
  }
`;

const Title = styled.h1`
  color: #f4f4f4;
  font-size: 2.5em;
  letter-spacing: 1.5px;
  font-weight: 500;
`;

const Contact = () => {
  return (
    <StyledWrapper>
      <Wrapper>
        <LeftColumn>
          <ImageWrapper>
            <img
              style={{ borderRadius: "2px" }}
              src={clearerNiklasFULL}
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
              Location:
              <span style={{ color: "#747474" }}> Stockholm, Sweden</span>
            </Text>
            <Text>
              <span>Email:</span>
              <a href="mailto:niklasryd01@gmail.com"> niklasryd01@gmail.com</a>
            </Text>
            <Text>
              <span>Phone:</span>
              <a href="tlf://+470703771104"> +46 070 377 11 04</a>
            </Text>
          </InformationWrapper>
        </RightColumn>
      </Wrapper>
    </StyledWrapper>
  );
};

export default Contact;
