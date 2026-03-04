import { useEffect, useState } from "react";
import "../../styles/Home.css";

import Hero1 from '../../assets/Home/Hero/hero1.png';
import Hero2 from '../../assets/Home/Hero/hero2.png';
import Hero3 from '../../assets/Home/Hero/hero3.png';
import { Link } from "react-router-dom";

const slides = [
  {
    image: Hero1,
    title: "Wide Range Of Products Available",
    subtitle: "At Georson Tech Pvt. Ltd",
    button: "Learn More",
    navigate: "/about"
  },
  {
    image: Hero2,
    title: "High Quality Electrical Panels",
    subtitle: "Engineered For Safety & Performance",
    button: "Explore All",
    navigate: "/about"
  },
  {
    image: Hero3,
    title: "Reliable Industrial Solutions",
    subtitle: "Powering Your Business Forward",
    button: "View More",
    navigate: "/about"
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-overlay">
            <h1>{slide.title}</h1>
            <h2>{slide.subtitle}</h2>
            <Link to={slide.navigate}  className="hero-btn" >{slide.button}</Link>
            
          </div>
        </div>
      ))}
    </section>
  );
}

export default Hero;