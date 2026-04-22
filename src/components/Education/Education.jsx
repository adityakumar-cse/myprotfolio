import React from "react";
import { education } from "../../constants"; 

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex w-full mb-16 items-center ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-4 md:left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 md:w-16 md:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
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
                    ? "md:pr-6" // Gap for left-side cards
                    : "md:pl-6" // Gap for right-side cards
                }
              `}
            >
              <div className="p-5 md:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105">
                {/* Flex container for image and text */}
                <div className="flex items-center space-x-6">
                  {/* School Logo/Image */}
                  <div className="w-20 h-16 md:w-24 md:h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Degree, School Name, and Date */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-white">
                        {edu.degree}
                      </h3>
                      <h4 className="text-sm md:text-md text-gray-300">
                        {edu.school}
                      </h4>
                    </div>
                    {/* Date at the bottom */}
                    <p className="text-xs md:text-sm text-gray-500 mt-2">{edu.date}</p>
                  </div>
                </div>

                <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
                <p className="mt-4 text-sm md:text-base text-gray-400 leading-relaxed">
                  {edu.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;