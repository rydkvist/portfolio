import React from "react";
import styled from "styled-components";

const StyledText = styled.p<any>`
  font-size: 18px;
  font-weight: 400px;
  color: #f4f4f4;
`;

const Text = ({ children }: any) => {
  return <StyledText>{children}</StyledText>;
};
export default Text;
