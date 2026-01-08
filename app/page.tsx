import CarCard from "@/components/custom/carCard/CarCard";
import NavBar from "@/components/custom/Navbar/NavBar";
import { LandingPageHOC } from "@/components/screens/LandingPage/LandingPageHOC";
import Image from "next/image";

export default function Home() {
  return (
     <div className="min-h-screen">
         <LandingPageHOC/>
     </div>
  );
}
