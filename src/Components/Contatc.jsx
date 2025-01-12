// src/components/ContactPage.jsx
import React from 'react';

const ContactPage = ({id}) => {
  return (
    <div id={id} className=" text-white max-h-screen flex flex-col justify-between overflow-x-hidden">

      {/* Contact Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center p-8 space-y-10 lg:space-y-0 lg:space-x-10 max-w-full mx-auto mt-20">

        {/* Left Column - Contact Information */}
        <div className="flex-1 space-y-6 lg:w-1/2 px-4 sm:px-0">
          <h2 className="text-5xl font-extrabold text-green-300 bg-clip-text text-center lg:text-left">
            Get in Touch
          </h2>
          <p className="text-lg text-center lg:text-left max-w-2xl mx-auto mt-4 mb-8">
            Feel free to reach out to me through any of the methods below. I'm always happy to connect!
          </p>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center justify-start space-x-4">
              <span className="font-semibold text-xl">Email:</span>
              <a href="mailto:dhukaarmanumar@example.com" className="text-blue-400 hover:text-blue-500 font-medium transition duration-300">
                dhukaarmanumar@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-start space-x-4">
              <span className="font-semibold text-xl">Number:</span>
              <span className="text-blue-400">+91 9265350694</span>
            </div>
          </div>
        </div>

        {/* Right Column - Empty Space for Layout Balance */}
        <div className="flex-1 hidden lg:block"></div>

      </div>

      {/* Footer */}
      <footer className="bg-[#1F1F1F] p-6 text-center text-white mt-12">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Arman. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default ContactPage;
