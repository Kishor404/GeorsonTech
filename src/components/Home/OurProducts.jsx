import "../../styles/Home.css";
import { Link } from "react-router-dom";

// OWN PRODUCTS
import containerStool1 from "../../assets/Services/OWN_PRODUCTS/CONTAINER STOOL 1.jpeg";
import containerStool2 from "../../assets/Services/OWN_PRODUCTS/CONTAINER STOOL 2.jpeg";
import esdTable from "../../assets/Services/OWN_PRODUCTS/ESD TABLE & FLOOR.jpg";
import heightAdjustWorkstation from "../../assets/Services/OWN_PRODUCTS/HEIGHT ADJUST WORKSTATION.jpg";
import isolationBreaker from "../../assets/Services/OWN_PRODUCTS/ISOLATION BREAKER TROLLEY.JPG";
import ltPanel from "../../assets/Services/OWN_PRODUCTS/LT PANEL 1.JPEG";
import lvPanel from "../../assets/Services/OWN_PRODUCTS/LV PANEL 2.jpg";
import modularTapoff from "../../assets/Services/OWN_PRODUCTS/MODULAR TAPOFF PANEL.JPG";
import safetyBarricade from "../../assets/Services/OWN_PRODUCTS/Safety barricade.jpeg";
import testingPanel from "../../assets/Services/OWN_PRODUCTS/TESTING PANEL.JPEG";

function OurProducts() {

  const products = [
    { img: containerStool1, title: "Container Stool" },
    { img: containerStool2, title: "Container Stool Variant" },
    { img: esdTable, title: "ESD Table & Flooring System" },
    { img: heightAdjustWorkstation, title: "Height Adjustable Workstation" },
    { img: isolationBreaker, title: "Isolation Breaker Trolley" },
    { img: ltPanel, title: "LT Electrical Panel" },
    { img: lvPanel, title: "LV Electrical Panel" },
    { img: modularTapoff, title: "Modular Tapoff Panel" },
    { img: safetyBarricade, title: "Industrial Safety Barricade" },
    { img: testingPanel, title: "Electrical Testing Panel" }
  ];

  return (
    <section className="products-section">

      <h2 className="products-title">OUR PRODUCTS</h2>

      <div className="products-container">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <div className="products-btn-wrapper">
        <Link to="/services"  className="products-btn" >Show More</Link>
      </div>

    </section>
  );
}

export default OurProducts;