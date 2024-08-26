import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
const projects = [
  {
    title: "UniConnect",
    description:
      "UniConnect is a dynamic social media platform designed for students and individuals to connect, share ideas, and engage with their communities. Built with a modern tech stack, UniConnect offers a rich set of features to foster interaction, creativity, and collaboration. Whether you're posting updates, liking and commenting on posts, following peers, or engaging in direct messaging, UniConnect provides a seamless and intuitive user experience across devices",
    features: [
      "Google OAuth: Secure authentication with Google",
      "Push Notifications: Real-time updates powered by Stream.",
      "Customizable Profiles: User profiles with personalization options.",
      "Infinite Scrolling: Continuous content discovery.",
      "File Uploads: Drag-and-drop and copy-paste support",
      "Direct Messaging: Private messaging with real-time updates",
      "Likes, Follows, and Comments: Standard social interaction features",
    ],
    technologies: [
      { name: "Nextjs", icon: "/nextdotjs.svg" },
      { name: "Tailwind CSS", icon: "/tailwindcss.svg" },
      { name: "Prisma ", icon: "/prisma.svg" },
      { name: "PostgresSQL ", icon: "/postgresql.svg" },
      { name: "Lucia ", icon: "/lucia.svg" },
      { name: "stream ", icon: "/streamlit.svg" },
      { name: "React Query", icon: "/reactquery.svg" },
      { name: "shadcn UI ", icon: "/shadcnui.svg" },
    ],
    livePreviewUrl: "https://uni-connect-omega.vercel.app/",
    githubUrl: "https://github.com/munyanezaarmel/UniConnect",
    imageSrc: "/uniconnect.png",
  },
  {
    title: "Restaurant Finder",
    description:
      "Restaurant Finder  is a web application that simplifies the process of finding the perfect restaurant based on your preferred cuisine. Whether you're craving Indian, Italian, Chinese, or any other type of food, this app lets you easily discover nearby restaurants offering your desired cuisine. With seamless Google Maps integration, you can view restaurant locations on an interactive map, get real-time directions from your current location, and make your dining decisions with confidence",
    features: [
      "Cuisine-Based Search",
      "Interactive Map",
      "Real-Time Directions",
      "Responsive Design",
      "User authentication Google Auth",
    ],
    technologies: [
      { name: "Nextjs", icon: "/nextdotjs.svg" },
      { name: "Tailwind CSS", icon: "/tailwindcss.svg" },
      { name: "Google Map ", icon: "/googlemaps.svg" },
    ],
    livePreviewUrl: "https://restaurant-finder-sigma.vercel.app/",
    githubUrl: "https://github.com/munyanezaarmel/restaurantFinder",
    imageSrc: "/restaurantFinder.png",
  },

  {
    title: "Mark8",
    description:
      "This E-commerce web showcases the development of modern E-commerce web applications using Next.js. The project aims to deliver a seamless user experience for viewing and purchasing products",
    features: [
      "Browse products",
      "Add products to the cart",
      "Save favorite products",
      "Filter products by category",
      "View store products",
      "Search for products and stores",
      "User authentication (login and sign up)",
    ],
    technologies: [
      { name: "Nextjs", icon: "/nextdotjs.svg" },
      { name: "NestJS", icon: "/nestjs.svg" },
      { name: "Tailwind CSS", icon: "/tailwindcss.svg" },
      { name: "React Query", icon: "/reactquery.svg" },
      { name: "Redux", icon: "/redux.svg" },
    ],
    livePreviewUrl: "https://mark8-m31j.vercel.app/",
    githubUrl: "https://github.com/munyanezaarmel/mark8",
    imageSrc: "/mark8.png",
  },
];
const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export default function Projects() {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className="md:ml-40  px-4 md:px-0 mt-12 lg:mt-20">
      <h3 className="mb-8 text-xl md:text-4xl text-white font-semibold">
        Projects
      </h3>
      {projects.map((project, index) => (
        <motion.div
          initial={{ y: 50 }}
          animate={{
            y: 0,
          }}
          viewport={{ amount: 0.5 }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 * index }}
          key={index}
        >
          <div className=" card flex flex-col lg:flex-row lg:gap-12 justify-between items-start lg:items-center px-8 mb-12">
            <div className="max-w-prose gray font-medium text-lg flex flex-col gap-4 w-full lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-white text-2xl mt-4">{project.title}</h1>
              <p className="gray text-sm md:text-md leading-relaxed">
                {project.description}
              </p>
              <p>Features:</p>
              <ul className="text-sm md:text-md space-y-1">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="text-[#607b96] mr-2">*</span>
                    <p className="md:text-md text-sm">{feature}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                {project.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="flex items-center gap-2">
                    <Image
                      src={tech.icon}
                      alt={`${tech.name} icon`}
                      width={25}
                      height={25}
                    />
                    <span className="font-medium text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center items-center md:items-start md:justify-start flex-col sm:flex-row gap-4 md:mb-4">
                <Link href={project.livePreviewUrl} target="_blank">
                  <button className=" button back-gradient shadow-button w-full ">
                    Live Preview
                  </button>
                </Link>
                <Link href={project.githubUrl} target="_blank">
                  <button className="hidden md:block border border-white text-white px-4 py-2 rounded-full font-bold cursor-pointer transition-opacity duration-300 w-full sm:w-[226px] h-[78px] text-lg hover:opacity-80">
                    View on GitHub
                  </button>
                </Link>
              </div>
            </div>
            <motion.div
              initial={false}
              animate={
                imageLoaded
                  ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                  : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
              }
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full lg:w-1/2 lg:pb-0 pb-4 lg:mt-0"
            >
              <Image
                onLoad={() => setImageLoaded(true)}
                src={project.imageSrc}
                alt={`${project.title} project`}
                layout="responsive"
                width={100}
                height={75}
                className="rounded-xl"
              />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
