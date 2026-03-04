import AboutIntro from "../components/About/AboutIntro";
import Timeline from "../components/About/Timeline";
import Features from "../components/About/Features";
import Stats from "../components/About/Stats";
import "../styles/About.css";
import TitleBar from "../components/TitleBar";
import AboutTitleImg from "../assets/About/titleImg.png";

function About() {
  return (
    <>
      <TitleBar title="ABOUT US" bg={AboutTitleImg}/>
      <AboutIntro />
      <Timeline />
      <Stats/>
      <Features />
      
    </>
  );
}

export default About;