"use client";
import CustomersSay from "./components/CustomersSay";
import FeaturedSection from "./components/FeaturedSection";
import Footer from "../../custom/Footer/Footer";
import HeroSection from "./components/HeroSection";
import ListYourCar from "./components/ListYourCar";
import Subscribe from "./components/Subscribe";

const LandingPage = () => {

  return (
    <div className="flex flex-col items-center">
         <HeroSection />
        <FeaturedSection />
        <ListYourCar/>
        <CustomersSay/>
        <Subscribe/>
        <Footer/>
    </div>
  );
};

export default LandingPage;
