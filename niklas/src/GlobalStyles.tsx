import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`   
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  html {
    height: 100vh;
    color: black;
    margin: 0;
    padding: 0;
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
  
  // a {
  //   color: #2f89fc;
  //   transition: .5s all ease;
  //   text-decoration:none;
  // }
  `;
