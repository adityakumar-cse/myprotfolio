import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[8vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Experience Cards */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex w-full mb-16 items-center ${
              index % 2 === 0 ? "md:justify-end" : "md:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-4 md:left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 md:w-16 md:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Card Wrapper */}
            <div
              className={`
                w-[85%] md:w-[48%] 
                ml-12 md:ml-0 
                ${
                  index % 2 === 0
                    ? "md:pl-6" 
                    : "md:pr-6" 
                }
              `}
            >
              <div className="p-5 md:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105">
                {/* Top Section */}
                <div className="flex items-center space-x-4 md:space-x-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg md:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-sm md:text-base text-gray-300">
                      {experience.company}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-500 mt-1">
                      {experience.date}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm md:text-base text-gray-400 leading-relaxed">
                  {experience.desc}
                </p>

                {/* Skills */}
                <div className="mt-4">
                  <h5 className="font-medium text-white mb-2">Skills:</h5>
                  <ul className="flex flex-wrap">
                    {experience.skills.map((skill, idx) => (
                      <li
                        key={idx}
                        className="bg-[#8245ec] text-gray-200 px-3 md:px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;