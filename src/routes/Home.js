import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import homeImg from "../assets/12.jpg";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={homeImg}
        title="Your Journey Your Story"
        text="Train Today, See Results Tomorrow"
        btnText="Get Started"
        url="/services"
        btnClass="show"
      />
      <Footer />
    </>
  );
}

export default Home;
