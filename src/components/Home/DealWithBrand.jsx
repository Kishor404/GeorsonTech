import "../../styles/Home.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import brandBg from "../../assets/Home/goalinnumImg.png";

/* ✅ AUTO IMPORT ALL BRAND IMAGES */
const images = import.meta.glob("../../assets/Brands/*.{png,jpg,jpeg}", {
  eager: true,
});

const brands = Object.values(images).map((img) => img.default);

function DealWithBrand() {
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
            slidesPerView={5}
            slidesPerGroup={5}
            loop={true}
            autoplay={{
              delay: 2500,
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
                  <img src={logo} alt={`brand-${index}`} />
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