import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBlob";

const App = () => {
  return (
    <div className="relative min-h-screen bg-[#050414] overflow-hidden">

      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      />

      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,#6b6b6b40_1px,transparent_1px),linear-gradient(to_bottom,#6b6b6b40_1px,transparent_1px)]
          bg-[size:14px_24px]
          opacity-40
          z-0
        "
      ></div>

      <div className="relative z-10 pt-20">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>

    </div>
  );
};

export default App;