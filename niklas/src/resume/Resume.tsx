import React, { useState } from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  color: #f6f6f6;
  margin-top: 200px;
  font-size: 2.5em;
  letter-spacing: 1.5px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 500px;
`;

const Resume = () => {
  return (
    <Container>
      <Title>Resume (in progress..)</Title>
    </Container>
  );
};

export default Resume;
