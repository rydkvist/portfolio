import React from "react";
import theme from "../../styles";

const Footer = () => (
  <footer
    className="flex justify-center items-center w-full h-20 md:h-16"
    style={{
      color: theme.colors.white,
    }}
  >
    <p className="text-lg">
      Niklas Rydkvist © {new Date().getFullYear().toString()}
    </p>
  </footer>
);

export default Footer;
