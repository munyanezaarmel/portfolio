import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" >
      <NavBar />
      <Hero />
      <Projects />
    </div>
  );
}
