import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="">
      <div className=" lg:flex lg:items-center justify-center items-center flex-col flex lg:flex-row lg:justify-around lg:mt-48 mt-20  ">
        <div className="">
          <p className="text lg:mx-0 mx-4 md:text-6xl text-2xl  font-semibold max-w-prose mb-8  ">
            Hello, I&apos;m Armel Munyaneza,
          </p>
          <p className="lg:mx-0 mx-4 text-white mb-8 md:text-6xl text-2xl font-semibold  ">
            Software Engineer
          </p>
          <p className="lg:mx-0 mx-4 max-w-prose gray font-medium lg:text-lg text-sm mb-8 capitalize-sentences ">
            Frontend Engineer using HTML, CSS, JavaScript, TypeScript, React,
            and Next.js. Backend using Node.js, .NET Core, Express, SQL,
            Postgres, and Prisma. Can assist in building robust web, mobile, and
            desktop applications. Additionally, I can handle deployment tasks.
          </p>
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
            <a download href="/Armel Munyaneza-new-cv.pdf">
              <button className="download-button button lg:mx-0  lg:mb-0 mb-12  ">
                Download cv
              </button>
            </a>
          </div>
        </div>

        <div className="container-profile lg:mb-0 md:mb-12">
          <div className="profile-glow-2 "></div>
          <div className="profile-glow"></div>
          <Image
            src="/photo.jpg"
            alt="Armel Munyaneza - Software Developer"
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
