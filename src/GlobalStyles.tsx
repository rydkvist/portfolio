import { createGlobalStyle } from "styled-components";
import theme from "./styles/";

export default createGlobalStyle`   
html {
  background-color: ${theme.colors.whiteGrey};
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

body {
  margin: 0;
  pading: 0;
}  
`;
