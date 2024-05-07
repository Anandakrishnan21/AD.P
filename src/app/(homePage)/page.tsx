import About from "@/components/About";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <Project />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
