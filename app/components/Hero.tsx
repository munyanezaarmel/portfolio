import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
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
            <a download href="/Armel Munyaneza-RESUME.pdf">
              <button className="download-button button lg:mx-0  lg:mb-0 mb-12  ">
                Download CV
              </button>
            </a>
          </div>
        </div>

        <div className="container-profile lg:mb-0 md:mb-12">
          <div className="profile-glow-2 "></div>
          <div className="profile-glow"></div>
          <motion.div
            // initial={false}
            // animate={
            //   imageLoaded
            //     ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            //     : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            // }
            // transition={{ duration: 1, delay: 0.5 }}
          >
            <Image
              src="/photo.jpg"
              alt="Armel Munyaneza - Software Developer"
              width={301}
              height={301}
              blurDataURL="/photo.jpg"
              onLoad={() => setImageLoaded(true)}
              quality={100}
              priority={true}
              placeholder="blur"
              className="hover:scale-[1.025] transition-all duration-300 ease-in  profile-image filter grayscale"
            />
          </motion.div>
        </div>
      </div>
      <div className="md:ml-40 md:mt-0 mt-44 md:mx-0 mx-4"></div>
    </div>
  );
}
