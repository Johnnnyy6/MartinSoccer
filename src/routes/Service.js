import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceImg from "../assets/9.jpg";
import ServiceInformation from "../components/ServiceInformation";
import Footer from "../components/Footer";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ServiceImg}
        title="Schedule a Training Session"
        btnClass="hide"
      />
      <ServiceInformation />
      <Footer />
    </>
  );
}

export default Service;
