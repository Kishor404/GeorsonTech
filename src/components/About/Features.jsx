import { FaCogs, FaBullseye, FaEye } from "react-icons/fa";

function Features() {
  return (
    <section className="about-features">
      <div className="about-container about-features-grid">

        <div className="about-feature-card" data-aos="fade-up">
          <FaCogs className="about-feature-icon" />
          <h3>Why Choose Us</h3>
          <p>
            Over 30+ years of industrial excellence in electrical, mechanical,
            and automation projects. Strong partnerships with Siemens, ABB,
            GE, and Schneider ensure reliable, future-ready solutions for
            modern manufacturing industries.
          </p>
        </div>

        <div
          className="about-feature-card"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <FaBullseye className="about-feature-icon" />
          <h3>Our Mission</h3>
          <p>
            To deliver high-quality engineering and Industry 4.0 automation
            solutions through innovation, technical expertise, and integrated
            supply-chain support that improves productivity and profitability.
          </p>
        </div>

        <div
          className="about-feature-card"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <FaEye className="about-feature-icon" />
          <h3>Our Vision</h3>
          <p>
            To be a global leader in smart industrial automation by building
            sustainable, intelligent, and scalable solutions for
            next-generation manufacturing.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Features;