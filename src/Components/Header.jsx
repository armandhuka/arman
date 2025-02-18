import React, { useState, useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className="rounded-b-xl p-3 fixed top-0 left-0 w-full z-50 transition-colors duration-300"
        style={{ backgroundColor: 'var(--header-bg)' }}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-3xl font-bold">
            <span
              className="hover:text-gradient hover:bg-clip-text transition-all duration-300 ease-in-out"
              style={{ color: 'var(--header-text)' }}
            >
              Arman
            </span>
          </div>

          {/* Navigation Links (Visible on Larger Screens) */}
          <nav className="hidden lg:flex space-x-8">
            <ul className="flex space-x-8">
              {['Home', 'About','Service' ,'Project', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-lg relative group transition-all duration-300"
                    style={{ color: 'var(--header-text)' }}
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg focus:outline-none hover:bg-opacity-20 transition-colors ml-4"
            style={{ backgroundColor: 'transparent', color: 'var(--header-text)' }}
          >
            {theme === 'dark' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M5.636 5.636l-.707.707M12 18a6 6 0 100-12 6 6 0 000 12z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>

          {/* Hamburger Menu Icon (Visible on Small Screens) */}
          <button
            className="lg:hidden focus:outline-none p-2 rounded-lg"
            onClick={toggleMenu}
            style={{ color: 'var(--header-text)' }}
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
        </div>

        {/* Mobile Menu (Visible on Small Screens) */}
        {isMenuOpen && (
          <div
            className="lg:hidden mt-4 p-4 rounded-lg shadow-lg transition-colors duration-300"
            style={{ backgroundColor: 'var(--header-bg)' }}
          >
            <ul className="flex flex-col space-y-4">
              {['Home', 'About', 'Project', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-xl transition-all duration-300"
                    style={{ color: 'var(--header-text)' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Adding padding so content doesn't hide behind the header */}
      <div className="pt-20"></div>
    </>
  );
};

export default Header;