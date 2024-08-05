import React from "react";
import ExperienceTimeline from "./ExperienceTimeline";

const experiences = [
  {
    company: "Knack Inc",
    position: "software Enginner - Full-time",
    startDate: "July 2023 ",
    endDate: "Present",
  },
  {
    company: "ironji",
    position: "software Enginner intern - Full-time",
    startDate: "May 2023",
    endDate: "July 2023",
  },
  {
    company: "oneuptime",
    position: "open source developer - Full-time",
    startDate: "sep 2022",
    endDate: "June 2023",
  },
  {
    company: "Andela",
    position: "Software Engineer Trainee - Full-time",
    startDate: "Mar 2022",
    endDate: "Nov 2022",
  },
];

export default function About() {
  return (
    <div className="flex justify-center md:items-center items-start flex-col ml-40 mb-40 mt-48 ">
      <h3 className="text-4xl text-white font-semibold mb-12">About me</h3>
      <div className="bg-gray-900 p-6 rounded-lg lg:w-[900px] w-[400px]  mb-8 ">
        <p className="gray">
          As a dedicated software engineer, I bring a strong problem-solving
          mindset and technical proficiency to every project. With hands-on
          experience in Full-stack Engineering, I excel in collaborative
          environments.
        </p>

        <p className="gray pt-4">
          With a passion for frontend development, I&apos;ve dedicated my efforts to
          crafting seamless and visually stunning user interfaces
        </p>

        <p className="gray pt-4">
          Let&apos;s connect and discuss how my skills can contribute to the success
          of your projects
        </p>
        <p className="gray pt-4 pb-4">I build awesome products using:</p>
        <ul className="grid grid-cols-3 gap-2">
          <li className="flex items-center">
            <span className="text-[#607b96] mr-2">*</span>
            <p className="text-1">Next.js</p>
          </li>
          <li className="flex items-center">
            <span className="text-[#607b96] mr-2">*</span>
            <p className="text-1"> React</p>
          </li>
          <li className="flex items-center">
            <span className="text-[#607b96] mr-2">*</span>
            <p className="text-1">TypeScript</p>
          </li>
          <li className="flex items-center">
            <span className="text-[#607b96] mr-2">*</span>
            <p className="text-1">Tailwind CSS</p>
          </li>
          <li className="flex items-center">
            <span className="text-[#607b96] mr-2">*</span>
            <p className="text-1"> AWS</p>
          </li>
          <li className="flex items-center">
            <span className="text-[#607b96] mr-2">*</span>
            <p className="text-1">GraphQL</p>
          </li>
        </ul>

        <span className="flex gap-2 pt-4">
          <p className="gray">Others:</p>
          <p className="text-1 ">
            Git • Redux Toolkit • Java • Python • Jest • NodeJS • Nest JS •
            opencv • SEO
          </p>
        </span>
      </div>

      <ExperienceTimeline experiences={experiences} totalYears={3} />
    </div>
  );
}
