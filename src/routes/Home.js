import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import homeImg from "../assets/12.jpg";
import Footer from "../components/Footer";
import HomeInfo from "../components/homeInfo";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={homeImg}
        btnText="Get Started"
        url="/services"
        btnClass="show"
      />
      <HomeInfo />
      <Footer />
    </>
  );
}

export default Home;
