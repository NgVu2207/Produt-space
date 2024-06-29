import React from "react";
import bgVideo from "../img/earth-bg.mp4";
import Nav from "../components/space/Navbar/Nav";
import Hero from "../components/space/Hero/Hero";
import Services from "../components/space/Services/Services";
import Banner from "../components/space/Banner/Banner";
import Banner2 from "../components/space/Banner/Banner2";
import Footer from "../components/space/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Space = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
    <div>
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700[px] w-full object-cover z[-1]"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <Nav />
        <Hero />
      </div>
      <Services />
      <Banner />
      <Banner2 />
      <Footer />
    </div>
  );
};

export default Space;
