import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/8.JPG";
import InformationMe from "../components/InformationMe";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About Me"
        btnClass="hide"
      />
      <InformationMe />
      <Footer />
    </>
  );
}

export default About;
