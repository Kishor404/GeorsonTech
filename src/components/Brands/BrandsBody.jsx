import "../../styles/Brands.css";

/* Automatically import all images inside brands folder */
const images = import.meta.glob("../../assets/Brands/*.{png,jpg,jpeg}", {
  eager: true,
});

const brands = Object.values(images).map((img) => img.default);

function BrandsBody() {
  return (
    <div className="brands-wrapper">
      <div className="brands-container">

        <h2 className="brands-heading">
          <span className="brands-heading-bar"></span> BRANDS
        </h2>

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