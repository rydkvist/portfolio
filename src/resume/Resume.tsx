import React, { useState } from "react";
import styled from "styled-components/macro";
import { appTitle } from "../config";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  color: black;
  margin-top: 200px;
  font-size: 2.5em;
  letter-spacing: 1.5px;
  font-weight: 500;
  text-align: center;
`;

const Resume = () => {
  window.document.title = `${appTitle}: Resume`;

  return (
    <Container>
      <Title>
        Resume <br />
        <br />
        (Still work in progress, sorry!)
      </Title>
    </Container>
  );
};

export default Resume;
