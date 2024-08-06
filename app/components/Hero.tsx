import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <div className=" lg:flex lg:items-center lg:justify-around lg:mt-48 mt-20  ">
        <div className="">
          <p className="text lg:mx-0 mx-4 md:text-6xl text-2xl  font-semibold max-w-prose mb-8  ">
            Hello,I&apos;m Armel Munyaneza,
          </p>
          <p className="lg:mx-0 mx-4 text-white mb-8 md:text-6xl text-2xl font-semibold  ">
            Software Engineer
          </p>
          <p className="lg:mx-0 mx-4 max-w-prose gray font-medium lg:text-lg text-sm mb-8 ">
            Frontend Engineer using HTML, CSS, JavaScript, TypeScript, React,
            and Nextjs. Backend using Node, .NET Core, Express, SQL, Postgres &
            Prisma and Deploy. can assist to build robust web, mobile, and
            desktop applications
          </p>
          <a download href="/Armel Munyaneza-new-cv.pdf">
            <button className="download-button button lg:mx-0 mx-4 lg:mb-0 mb-2 ">Download cv</button>
          </a>
        </div>

        <div className="container-profile md:mx-0 mx-12">
          <div className="profile-glow-2 "></div>
          <div className="profile-glow"></div>
          <Image
            src="/photo.jpg"
            alt="Armel Munyaneza Photo"
            width={301}
            height={301}
            className="profile-image filter grayscale"
          />
        </div>
      </div>
      <div className="md:ml-40 md:mt-0 mt-44 md:mx-0 mx-4"></div>
    </div>
  );
}
