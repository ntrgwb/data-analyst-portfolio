import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
// import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-[1280px] mx-auto px-6 lg:px-12 space-y-24 py-12">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        {/* <Testimonial /> */}
        <Contact />
      </main>
      {/* <Footer /> */}
    </>
  );
}
