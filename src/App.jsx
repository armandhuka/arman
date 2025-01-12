import React from 'react';
import Header from './Components/Header';
import BannerPage from './Components/Banner';
import AboutPage from './Components/About';
import ProjectSection from './Components/Project/Project';
import ContactPage from './Components/Contatc';

const App = () => {
  return (
    <div>
      <Header />
      <BannerPage id="home" />
      <AboutPage id="about" /> 
      <ProjectSection id="project" />
      <ContactPage id="contact" /> 
    </div>
  );
};

export default App;
