import About from "../components/About.jsx";
import BackgroundParticles from "../components/BackgroundParticles.jsx";
import Certifications from "../components/Certifications.jsx";
import Contact from "../components/Contact.jsx";
import Experience from "../components/Experience.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx";
import Projects from "../components/Projects.jsx";
import Skills from "../components/Skills.jsx";


export default function PortfolioPage() {

  return (
    <div
      className="
        min-h-screen
        overflow-x-hidden
        bg-slate-50
        text-slate-900
      "
    >

      <BackgroundParticles />

      <Navbar />

<div className="h-20" />

<main>
  <Hero />
        <About />

        <Skills />

        <Projects />

        <Experience />

        <Certifications />

        <Contact />

      </main>


      <Footer />


    </div>
  );
}