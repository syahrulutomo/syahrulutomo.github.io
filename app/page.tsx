import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Process from "./components/Process";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Work />
        <Experience />
        <Process />
        <Contact />
      </main>
    </>
  );
}
