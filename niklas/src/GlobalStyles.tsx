import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`   
  html {
    height: 100%;
    color: white;
    margin:0;
    padding:0;
    scroll-behavior: smooth;
  }

  body {
    height: 100%;
    margin: 0;
    pading: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  }
  
  a {
    color: #2f89fc;
    transition: .5s all ease;
    text-decoration:none;
  }
  `;
