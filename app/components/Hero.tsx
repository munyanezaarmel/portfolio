import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex items-center justify-around mt-48 mb-64">
      <div className="">
        <p className="text text-hero font-semibold max-w-prose mb-4  ">
          Hello,I&apos;m Armel Munyaneza,
        </p>
        <p className=" text-white mb-4 text-hero font-semibold  ">
          Software Engineer
        </p>
        <p className="max-w-prose gray font-medium text-lg mb-8">
          Frontend Engineer using HTML, CSS, JavaScript, TypeScript, React, and
          Nextjs. Backend using Node, .NET Core, Express, SQL, Postgres & Prisma
          and Deploy. can assist to build robust web, mobile, and desktop
          applications
        </p>
        <a download href="/Armel Munyaneza-new-cv.pdf">
          <button className="download-button">Download cv</button>
        </a>{" "}
      </div>

      <div className="container-profile ">
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
  );
}
