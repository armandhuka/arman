import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={`w-full text-center py-4 mt-10 ${theme === 'dark' ? ' text-white' : ' text-[rgb(38,38,38)]'}`}
    >
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Arman. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
