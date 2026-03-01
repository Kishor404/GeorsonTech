import AboutIntro from "../components/About/AboutIntro";
import Timeline from "../components/About/Timeline";
import Features from "../components/About/Features";
import Stats from "../components/About/Stats";
import "../styles/about.css";
function About() {
  return (
    <>
      <AboutIntro />
      <Timeline />
      <Stats/>
      <Features />
      
    </>
  );
}

export default About;