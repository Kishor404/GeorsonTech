import "../../styles/Brands.css";

import BrandsTitleImg from "../../assets/Brands/titleImg.png";
import TitleBar from "../TitleBar";


/* Automatically import all images inside brands folder */
const images = import.meta.glob("../../assets/Brands/*.{png,jpg,jpeg}", {
  eager: true,
});

const brands = Object.values(images).map((img) => img.default);

function BrandsBody() {
  return (
    <div className="brands-wrapper">
      <TitleBar title="BRANDS" bg={BrandsTitleImg}/>
      <div className="brands-container">
        <div className="brands-grid">
          {brands.map((logo, index) => (
            <div className="brands-card" key={index} data-aos="zoom-in">
              <img src={logo} alt={`brand-${index}`} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default BrandsBody;