import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function NavBar() {
  return (
    <div className="text-white text-poppins mt-12  ">
      <div className="flex justify-around items-center">
        <div>
          <p className="text-3xl " >A.M portfolio</p>
        </div>
        <div className="flex gap-20 text-lg font-medium ">
          <p>Projects</p>
          <p>Technologies</p>
          <p>About me</p>
        </div>
        <div className="flex gap-8 items-center">
          <FaLinkedin className="icons" />
          <FaGithub className="icons" />
        </div>
      </div>
    </div>
  );
}
