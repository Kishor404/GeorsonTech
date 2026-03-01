import CountUp from "react-countup";
import { FaIndustry, FaUsers, FaProjectDiagram, FaGlobe } from "react-icons/fa";

function Stats() {
  return (
    <section className="about-stats">
  <div className="about-container about-stats-grid">

    <div className="about-stat-card" data-aos="zoom-in">
      <FaIndustry className="about-stat-icon" />
      <h2><CountUp end={30} duration={3} enableScrollSpy scrollSpyOnce/></h2>
      <p>Years of Experience</p>
    </div>

    <div className="about-stat-card" data-aos="zoom-in" data-aos-delay="150">
      <FaProjectDiagram className="about-stat-icon" />
      <h2><CountUp end={500} duration={3} enableScrollSpy scrollSpyOnce/></h2>
      <p>Projects Completed</p>
    </div>

    <div className="about-stat-card" data-aos="zoom-in" data-aos-delay="300">
      <FaUsers className="about-stat-icon" />
      <h2><CountUp end={120} duration={3} enableScrollSpy scrollSpyOnce/></h2>
      <p>Expert Engineers</p>
    </div>

    <div className="about-stat-card" data-aos="zoom-in" data-aos-delay="450">
      <FaGlobe className="about-stat-icon" />
      <h2><CountUp end={15} duration={3} enableScrollSpy scrollSpyOnce/></h2>
      <p>Global Clients</p>
    </div>

  </div>
</section>
  );
}

export default Stats;