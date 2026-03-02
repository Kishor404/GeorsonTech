import "../../styles/Home.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import brandBg from "../../assets/Home/goalinnumImg.png";

// Import 15 logos
import b1 from "../../assets/Brands/A-001.png";
import b2 from "../../assets/Brands/A-002.png";
import b3 from "../../assets/Brands/B-001.png";
import b4 from "../../assets/Brands/B-002.jpg";
import b5 from "../../assets/Brands/C-001.png";
import b6 from "../../assets/Brands/C-002.png";
import b7 from "../../assets/Brands/D-001.png";
import b8 from "../../assets/Brands/D-002.jpeg";
import b9 from "../../assets/Brands/E-001.png";
import b10 from "../../assets/Brands/E-002.png";
import b11 from "../../assets/Brands/F-002.png";
import b12 from "../../assets/Brands/F-003.png";
import b13 from "../../assets/Brands/H-001.png";
import b14 from "../../assets/Brands/H-003.jpg";
import b15 from "../../assets/Brands/L-001.jpg";

function DealWithBrand() {

  const brands = [
    b1,b2,b3,b4,b5,
    b6,b7,b8,b9,b10,
    b11,b12,b13,b14,b15
  ];

  return (
    <section
      className="brand-section"
      style={{ backgroundImage: `url(${brandBg})` }}
    >
      <div className="brand-overlay">
        <h2 className="brand-title">DEAL WITH GLOBAL BRANDS</h2>

        <div className="brand-slider">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={5}          // show 5 logos
            slidesPerGroup={5}         // move 5 at once
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1024: {
                slidesPerView: 5,
                slidesPerGroup: 5,
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              480: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
            }}
          >
            {brands.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="brand-card">
                  <img src={logo} alt={`Brand ${index + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}

export default DealWithBrand;