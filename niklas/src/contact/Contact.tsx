import React, { useState } from "react";
import styled from "styled-components/macro";

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-around;
  width: 80%;
  align-self: center;
`;

const Column = styled.div`
  &:first-child {
    justify-content: center;
  }
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const Title = styled.h1`
  color: #f6f6f6;
  margin-top: 200px;
  font-size: 2.5em;
  letter-spacing: 1.5px;
  font-weight: 500;
  text-align: center;
`;

const Contact = () => {
  return (
    <StyledWrapper>
      {/*<Column>
    <ImageWrapper>
     <ProfileImage src={clearerNiklasFULL} alt="Niklas Rydkvist" />
    </ImageWrapper>
  </Column>*/}
      <Column>
        <Title>Contact (in progress..)</Title>
      </Column>
    </StyledWrapper>
  );
};

export default Contact;
