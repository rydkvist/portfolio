import React, { useState } from "react";
import styled from "styled-components/macro";
import niklas from "../assets/images/niklas.jpg";
import niklas_fullscreen from "../assets/images/niklas_fullscreen.jpg";

const StyledWrapper = styled.div`
  height: 100%;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: #282c34;
  margin: 200px 0px;
  font-size: 40px;
`;

const ReactIcon = styled.img<any>`
  height: 40vmin;
  pointer-events: none;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Home = () => {
  return (
    <StyledWrapper>
      <ReactIcon src={niklas_fullscreen} alt="logo" />
      <ReactIcon src={niklas} alt="logo" />

      <Title>Software Developer</Title>
    </StyledWrapper>
  );
};

export default Home;
