import React from "react";

interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
}

interface ExperienceTimelineProps {
  experiences: Experience[];
  totalYears: number;
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  experiences,
  totalYears,
}) => {
  return (
    <div className="relative flex justify-center items-center flex-col">
      <div className="bg-gray-900 p-6 rounded-lg lg:w-[50%] w-[90%] ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text text-xl font-semibold">Experience</h2>
          <span className="text-white">{totalYears} Years</span>
        </div>
        <ul className="relative border-l border-gray-700">
          {experiences.map((exp, index) => (
            <li key={index} className="mb-6 ml-4">
              <div className="absolute w-3 h-3 back-gradient rounded-full -left-1.5 border border-gray-900"></div>
              <div className="flex md:flex-row flex-col justify-between items-start md:items-center ">
                <h3 className="text-lg font-semibold text-white">
                  {exp.company}
                </h3>
                <time className="text-sm font-normal md:my-0 my-4 leading-none text-gray-400">
                  {exp.startDate} - {exp.endDate}
                </time>
              </div>
              <p className="text-base font-normal text-gray-400">
                {exp.position}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
