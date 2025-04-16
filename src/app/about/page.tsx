import Hero from "../components/About_Us/hero";
import SectionFour from "../components/About_Us/sectionFour";
import SectionThree from "../components/About_Us/sectionThree";
import SectionTwo from "../components/About_Us/sectionTwo";
import Footertwo from "../components/major/Footertwo";
import Header from "../components/major/header";

export default function About() {
  return (
    <>
      <Header />

      <Hero />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footertwo />
    </>
  );
}
