import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <div className=" md:flex md:justify-around md:items-center  grid-cols-2 grid gap-y-4  md:px-0 px-5 mt-40 justify-center items-center  mb-8 ">
      <div className=" order-1 sm:order-1">
        <p className="text md:text-xl text-sm text-center md:text-start text-nowrap ">Feel free to contact me</p>
      </div>
      <div className="md:px-0 px-3 md:text-lg text-nowrap text-sm font-medium md:col-span-1 order-3 sm:order-3">
        <a
          href="mailto:munyaarmel61@gmail.com"
          className="text-white md:text-xl  text-sm "
        >
          munyaarmel61@gmail.com
        </a>
      </div>

      <div className="flex gap-8 md:items-center md:justify-center justify-center md:order-3 order-2 items-end">
        <Link href={"https://www.linkedin.com/in/armel-munyaneza-4b30a8201/"}>
          <FaLinkedin className="md:w-7 md:h-7 w-6 h-6  text-white" />
        </Link>
        <Link href={"https://github.com/munyanezaarmel"}>
          <FaGithub className="md:w-7 md:h-7 w-6 h-6  text-white" />
        </Link>
      </div>
    </div>
  );
}
