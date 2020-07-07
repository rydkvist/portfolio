import React from "react";
import styled from "styled-components/macro";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
`;

const CopyrightText = styled.p`
  font-size: 1.125rem;
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
