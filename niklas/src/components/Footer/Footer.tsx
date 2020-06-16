import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin-top: 100px;
`;

const CopyrightText = styled.p`
  padding: 0;
  margin: 0;
  font-size: 16px;
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
