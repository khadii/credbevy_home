import Image from "next/image";
import Header from "./components/major/header";
import Footer from "./components/major/footer";
import Hero from "./components/Hero";
import Home_section_two from "./components/major/Home_section_two";
import Home_section_three from "./components/Home_section_three";
import Home_sections_four from "./components/Home_sections_four";
import Home_sections_five from "./components/Home_sections_five";
import Footertwo from "./components/major/Footertwo";

export default function Home() {
  return (
   <>

   <Header/>
   <Hero/>
   <Home_section_two/>
   <Home_section_three/>
   <Home_sections_four/>
   <Home_sections_five/>
   <Footertwo/>
   </>
 
  );
}
