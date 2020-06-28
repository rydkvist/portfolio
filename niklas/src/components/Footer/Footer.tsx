import React from "react";
import styled from "styled-components/macro";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  margin-top: 100px;
  background-color: #121212;
  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

const CopyrightText = styled.p`
  padding: 0;
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <CopyrightText>
        Niklas Rydkvist © {new Date().getFullYear().toString()}
      </CopyrightText>
    </StyledFooter>
  );
};

export default Footer;
