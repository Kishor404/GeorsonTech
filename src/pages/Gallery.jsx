import '../styles/Gallery.css';
import TitleBar from './../components/TitleBar';
import GalleryTitleImg from "../assets/Gallery/titleImg.png";

import Img1 from "../assets/Services/Industrial Automation Project.jpg";
import Img2 from "../assets/Services/Consultancy in Electrical Mechanical Civil Works.jpg";
import Img3 from "../assets/Services/CNC PLC Machine Installation.jpg";
import Img4 from "../assets/Services/SPM Machines Retrofit Services.jpg";
import Img5 from "../assets/Services/Automation Custom Designed IIoT Products.jpg";
import Img6 from "../assets/Services/Enhancing Conventional Automation BMS into Industry 4.0.jpg";
import Img7 from "../assets/Services/Provide Software Solutions Complement to SCADA.jpg";
import Img8 from "../assets/Services/Mech Hydraulic Press Service.jpg";
import Img9 from "../assets/Services/Robot Pick Place Automation.jpg";

function Gallery() {
  // Placeholder images - replace these with your actual image paths or URLs
  const images = [
    Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8,Img9
  ];

  return (
    <>
    <TitleBar title="GALLERY" bg={GalleryTitleImg}/>
    <div className="gallery-section">
      
      <div className="gallery-container">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Gallery Work ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>

    </>
    
  );
}

export default Gallery;