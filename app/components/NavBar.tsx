"use client";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function NavBar() {
  return (
    <div className="text-white text-poppins mt-12">
      <div className="md:flex md:justify-around md:items-center grid-cols-2 grid gap-y-4 md:px-0 px-5">
        <div className="md:col-span-1 order-1 sm:order-1">
          <p className="md:text-3xl text-2xl">A.M portfolio</p>
        </div>
        <div className="flex md:gap-20 gap-8 md:text-lg text-nowrap text-sm font-medium md:col-span-1 order-3 sm:order-3  ">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            About me
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Contact me
          </ScrollLink>
        </div>
        <div className="flex gap-8 items-center   justify-center  md:order-3 order-2">
          <Link href={"https://www.linkedin.com/in/armel-munyaneza-4b30a8201/"} target="_blank">
            <FaLinkedin className="md:w-7 w-6 h-6 md:h-7 text-white" />
          </Link>
          <Link href={"https://github.com/munyanezaarmel"} target="_blank">
            <FaGithub className="md:w-7 md:h-7 w-6 h-6  text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}
