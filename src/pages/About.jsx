import AboutIntro from "../components/About/AboutIntro";
import Timeline from "../components/About/Timeline";
import Features from "../components/About/Features";
import Stats from "../components/About/Stats";
import "../styles/About.css";
import AboutTitleBar from "../components/About/AboutTitleBar";
function About() {
  return (
    <>
      <AboutTitleBar/>
      <AboutIntro />
      <Timeline />
      <Stats/>
      <Features />
      
    </>
  );
}

export default About;