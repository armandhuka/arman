import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../Context/ThemeContext";
import { FiRefreshCw } from "react-icons/fi"; // Icon for resubscribe

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Check if user already subscribed
  useEffect(() => {
    const hasSubscribed = localStorage.getItem("hasSubscribed");
    if (hasSubscribed) {
      setSubscribed(true);
    }
  }, []);

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    // ✅ Check if WhatsApp is available (mobile devices)
    const phoneNumber = "919265350594";
    const message = `New subscription from: ${email}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Try to open WhatsApp
    const isMobile = /iPhone|Android|iPad/i.test(navigator.userAgent);
    if (isMobile) {
      window.open(whatsappLink, "_blank");
    } else {
      // Fallback to mail if WhatsApp is not available
      const mailto = `mailto:dhukaarmanumar@gmail.com?subject=New Subscriber&body=${encodedMessage}`;
      window.open(mailto, "_blank");
    }

    localStorage.setItem("hasSubscribed", "true");
    setSubscribed(true);
    setEmail("");
  };

  const resetSubscription = () => {
    localStorage.removeItem("hasSubscribed");
    setSubscribed(false);
  };

  return (
    <footer
      className={`w-full text-center py-10 px-4 mt-10 flex flex-col items-center space-y-6 transition-all ${
        theme === "dark" ? "text-white" : "text-[rgb(38,38,38)]"
      }`}
    >
      {!subscribed ? (
        <>
          <h2 className="text-lg font-semibold">Subscribe to get updates</h2>
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className={`px-5 py-3 rounded-full border focus:outline-none transition-all w-full sm:w-auto ${
                theme === "dark"
                  ? "bg-gray-700 text-white border-gray-500"
                  : "bg-white text-black border-gray-300"
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleSubscribe}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all"
            >
              Subscribe
            </button>
          </div>
        </>
      ) : (
        <div className="flex items-center space-x-2">
          <p className="text-green-500 font-medium text-base">
            You're already subscribed!
          </p>
          <button
            onClick={resetSubscription}
            className="text-green-500 hover:text-green-600 transition"
            title="Resubscribe"
          >
            <FiRefreshCw size={20} />
          </button>
        </div>
      )}

      <p className="text-sm opacity-80">
        &copy; {new Date().getFullYear()} Arman. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
