import React from 'react';
import Header from './Components/Header';
import BannerPage from './Components/Banner';
import AboutPage from './Components/About';
import ProjectSection from './Components/Project/Project';
import Services from './Components/Services';
import ContactPage from './Components/Contatc';
import { ThemeProvider } from './Context/ThemeContext';
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <div className="transition-colors duration-300" style={{ backgroundColor: 'var(--background)' }}>
      <HelmetProvider>
      <Header />
      <BannerPage id="home" />
      <AboutPage id="about" />
      <Services/> 
      <ProjectSection id="project" />
      <ContactPage id="contact" />
      </HelmetProvider> 
    </div>
  );
};

export default App;
