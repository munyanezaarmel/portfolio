import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function NavBar() {
  return (
    <div className="text-white text-poppins mt-12  ">
      <div className="flex justify-around items-center">
        <div>
          <p className="text-3xl ">A.M portfolio</p>
        </div>
        <div className="flex gap-20 text-lg font-medium ">
          <p>About me</p>
          <p>Projects</p>
          <p>Contact me</p>
        </div>
        <div className="flex gap-8 items-center">
          <Link href={"https://www.linkedin.com/in/armel-munyaneza-4b30a8201/"}>
            <FaLinkedin className="icons text-white" />
          </Link>
          <Link href={"https://github.com/munyanezaarmel"}>
            <FaGithub className="icons text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}
