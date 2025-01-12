// src/components/BannerPage.jsx
import React from 'react';

const BannerPage = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col bg-transparent px-4">
      {/* Centered Text */}
      <div className="text-5xl sm:text-6xl md:text-8xl font-bold text-blue-700 text-center hover:text-blue-500 transition-colors duration-500 ease-in-out">
        Arman Dhuka
      </div>

      <div className="w-full sm:w-3/4 md:w-1/2 text-base sm:text-lg text-white mt-4 text-center">
        I'm a passionate web developer with a love for building innovative and user-friendly applications.
        I'm always looking for new challenges and opportunities to grow as a developer.
      </div>

      <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
        <button title='no work' className="border-[2px] border-solid border-blue-700 
        hover:bg-slate-100 hover:text-[#262626] text-white font-bold py-4 px-10 sm:py-3 sm:px-12 rounded-lg transform hover:scale-105 transition duration-300 ease-in-out">
          Resume
        </button>
        <a href='https://github.com/armandhuka/' className="border-[2px] border-solid border-blue-700 hover:bg-slate-100 hover:text-[#262626] text-white font-bold py-4 px-10 sm:py-3 sm:px-12 rounded-lg transform hover:scale-105 transition duration-300 ease-in-out">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default BannerPage;
