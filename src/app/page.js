import Image from "next/image";
import MainCarousel from "./components/MainCarousel";
import AboutParallex from "./components/AboutParallex";
import VolunteerCard from "./components/VolunteerCard";
import ServiceArea from "./components/ServicesArea";
import DonateCard from "./components/DonateCard";
import CausesCarousel from "./components/CausesComp";
import Link from "next/link";
import EventList from "./components/Events";
import Marquee from "./components/SuccessMarquee";
import Contactform from "./components/Contactform";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <div >
      <MainCarousel/>
      <AboutParallex/>
      <ServiceArea/>
      <DonateCard/>
      <CausesCarousel/>
      <div style={{display:"flex",alignItems:"center" , justifyContent:"center", marginBottom:"20px"}}>
      <a className="btn btn-custom" href='/programs'>View All Programs</a>
      </div>
      <Marquee/>
      <EventList/>
      <div style={{display:"flex",alignItems:"center" , justifyContent:"center", marginTop:"20px"}}>
      <a className="btn btn-custom" href='/events'>View All Events</a>
      </div>
      <VolunteerCard/>
      <FAQ/>
      <Contactform/>
    </div>
  );
}
