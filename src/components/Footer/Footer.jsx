import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Aditya Kumar</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/profile.php?id=100026361169759&mibextid=9R9pXO" },
            { icon: <FaX />, link: "https://x.com/adityacse16" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/aditya-kumar-975b62250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
            { icon: <FaInstagram />, link: "https://instagram.com/adityaverma_016?utm_source=qr&igshid=OGIxMTE0OTdkZA==" },
            { icon: <FaGithub />, link: "https://github.com/adityakumar-cse" },
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
