import React from "react";
import theme from "../../styles";

const Footer = () => (
  <footer
    className="flex justify-center items-center w-full h-20 md:h-16 border-t mt-12"
    style={{
      color: theme.colors.customBlack,
      borderColor: theme.colors.customWhite,
    }}
  >
    <p className="text-lg">
      Niklas Rydkvist © {new Date().getFullYear().toString()}
    </p>
  </footer>
);

export default Footer;
