import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`   
  html {
    height: 100%;
    scroll-behavior: smooth;
    color: white;
    margin:0;
    padding:0;
  }

  body {

  /*&::before{
  position: fixed;
    top: 300px;
    left: -100px;
    bottom: 0;
    content: '';
    width: 400px;
    height: 400px;
    border: 2px solid rgba(255, 255, 255, 0.05);
    transform: rotate(20deg);
  }*/
  
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
  sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;

  > #root{
    height:auto;
  }
  }
  
  a{
    color: #2f89fc;
    transition: .5s all ease;
    text-decoration:none;
  }
  `;
