import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="flex mt-40 justify-around items-center  mb-8 ">
      <p className="text text-xl">Feel free to contact me</p>
      <p className="text-white text-xl">munyaarmel61@gmail.com</p>
      <div className="flex gap-8 items-center">
        <Link href={"https://www.linkedin.com/in/armel-munyaneza-4b30a8201/"}>
          <FaLinkedin className="icons text-white" />
        </Link>
        <Link href={"https://github.com/munyanezaarmel"}>
          <FaGithub className="icons text-white" />
        </Link>
      </div>
    </div>
  );
}
