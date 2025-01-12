import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#262626] rounded-b-xl p-4 shadow-lg fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold">
          <span className="text-white hover:text-gradient hover:bg-clip-text transition-all duration-300 ease-in-out">
            Arman
          </span>
        </div>

        {/* Hamburger Menu Icon (Visible on Small Screens) */}
        <button
          className="text-white lg:hidden focus:outline-none hover:bg-gray-700 p-2 rounded-lg"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navigation Links (Visible on Larger Screens) */}
        <nav className="hidden lg:flex space-x-8">
          <ul className="flex space-x-8">
            <li>
              <a
                href="#"
                className="text-white text-lg relative group hover:text-purple-400 transition-all duration-300"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white text-lg relative group hover:text-purple-400 transition-all duration-300"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="text-white text-lg relative group hover:text-purple-400 transition-all duration-300"
              >
                Project
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white text-lg relative group hover:text-purple-400 transition-all duration-300"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu (Visible on Small Screens) */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 bg-[#262626] p-4 rounded-lg shadow-lg">
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                href="#home"
                className="text-white text-xl hover:text-purple-400 transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-xl hover:text-purple-400 transition-all duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="text-white text-xl hover:text-purple-400 transition-all duration-300"
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white text-xl hover:text-purple-400 transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
