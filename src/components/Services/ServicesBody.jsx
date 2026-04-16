import { useState } from "react"; 
import "../../styles/Services.css";

// BRAND PRODUCTS
import abb1 from "../../assets/Services/BRANDS_PRODUCTS/ABB-001.png";
import abb2 from "../../assets/Services/BRANDS_PRODUCTS/ABB-002.jpg";
import almonard1 from "../../assets/Services/BRANDS_PRODUCTS/ALMONARD-001.jpg";
import almonard2 from "../../assets/Services/BRANDS_PRODUCTS/ALMONARD-002.png";
import bajaj from "../../assets/Services/BRANDS_PRODUCTS/BAJAJ-001.jpg";
import brother1 from "../../assets/Services/BRANDS_PRODUCTS/BROTHER-001.webp";
import brother2 from "../../assets/Services/BRANDS_PRODUCTS/BROTHER-002.jpeg";
import cs1 from "../../assets/Services/BRANDS_PRODUCTS/C&S-001.jpg";
import cs2 from "../../assets/Services/BRANDS_PRODUCTS/C&S-002.webp";
import comet from "../../assets/Services/BRANDS_PRODUCTS/COMET.png";
import connectwell from "../../assets/Services/BRANDS_PRODUCTS/CONNECTWELL.png";
import diamond from "../../assets/Services/BRANDS_PRODUCTS/DIAMOND.jpg";
import dlink from "../../assets/Services/BRANDS_PRODUCTS/DLINK.jpg";
import eaton from "../../assets/Services/BRANDS_PRODUCTS/EATON.png";
import elmeasure from "../../assets/Services/BRANDS_PRODUCTS/ELMEASURE.jpg";
import festo from "../../assets/Services/BRANDS_PRODUCTS/FESTO.jpeg";
import fluke from "../../assets/Services/BRANDS_PRODUCTS/FLUKE.jpg.webp";
import harting from "../../assets/Services/BRANDS_PRODUCTS/HARTING.webp";
import henseI from "../../assets/Services/BRANDS_PRODUCTS/HENSEL.jpeg";
import legrand from "../../assets/Services/BRANDS_PRODUCTS/LEGRAND.jpg";
import lapp from "../../assets/Services/BRANDS_PRODUCTS/LAPP.jpg";
import omron1 from "../../assets/Services/BRANDS_PRODUCTS/OMRON-001.jpg";
import omron2 from "../../assets/Services/BRANDS_PRODUCTS/OMRON-002.webp";

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

const brandProducts = [
  { img: abb1, title: "ABB Products" },
  { img: abb2, title: "ABB Electrical Systems" },
  { img: almonard1, title: "Almonard Industrial Fans" },
  { img: almonard2, title: "Almonard Ventilation Systems" },
  { img: bajaj, title: "Bajaj Electrical Products" },
  { img: brother1, title: "Brother Industrial Machines" },
  { img: brother2, title: "Brother Automation Systems" },
  { img: cs1, title: "C&S Switchgear" },
  { img: cs2, title: "C&S Electrical Components" },
  { img: comet, title: "Comet Industrial Equipment" },
  { img: connectwell, title: "Connectwell Terminal Blocks" },
  { img: diamond, title: "Diamond Electrical Products" },
  { img: dlink, title: "D-Link Networking Solutions" },
  { img: eaton, title: "Eaton Power Management" },
  { img: elmeasure, title: "Elmeasure Energy Meters" },
  { img: festo, title: "Festo Automation Components" },
  { img: fluke, title: "Fluke Test Instruments" },
  { img: harting, title: "Harting Connectivity Solutions" },
  { img: henseI, title: "Hensel Electrical Enclosures" },
  { img: legrand, title: "Legrand Electrical Systems" },
  { img: lapp, title: "LAPP Industrial Cables" },
  { img: omron1, title: "Omron Industrial Automation" },
  { img: omron2, title: "Omron Sensors & Controllers" }
];

const ownProducts = [
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

 
function ServicesBody() {
  const [search, setSearch] = useState("");

  // 🔍 FILTER LOGIC
  const filteredBrand = brandProducts.filter((service) =>
    service.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredOwn = ownProducts.filter((service) =>
    service.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="services-wrapper">
      <div className="services-container">

        {/* 🔍 SEARCH */}
        <div className="services-search">
          <input
            type="text"
            placeholder="Search products or services (e.g. ABB, Panel)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* ===== BRAND PRODUCTS ===== */}
        <h2 className="services-section-title">Brand Products</h2>

        <div className="services-grid">
          {filteredBrand.length > 0 ? (
            filteredBrand.map((service, index) => (
              <div className="services-card" key={index}>
                <div className="services-image-box">
                  <img src={service.img} alt={service.title} />
                </div>
                <h3 className="services-title">{service.title}</h3>
              </div>
            ))
          ) : (
            <p className="no-result">No matching brand products</p>
          )}
        </div>

        {/* ===== OUR PRODUCTS ===== */}
        <h2 className="services-section-title">Our Products</h2>

        <div className="services-grid">
          {filteredOwn.length > 0 ? (
            filteredOwn.map((service, index) => (
              <div className="services-card" key={index}>
                <div className="services-image-box">
                  <img src={service.img} alt={service.title} />
                </div>
                <h3 className="services-title">{service.title}</h3>
              </div>
            ))
          ) : (
            <p className="no-result">No matching products</p>
          )}
        </div>

      </div>
    </div>
  );
}

export default ServicesBody;