import "../../styles/Services.css";

import industrialAutomationProject from "../../assets/services/Industrial Automation Project.jpg";
import consultancyElectricalMechanicalCivil from "../../assets/services/Consultancy in Electrical Mechanical Civil Works.jpg";
import cncPlcInstallation from "../../assets/services/CNC PLC Machine Installation.jpg";
import spmRetrofit from "../../assets/services/SPM Machines Retrofit Services.jpg";
import customIiot from "../../assets/services/Automation Custom Designed IIoT Products.jpg";
import bmsIndustry4 from "../../assets/services/Enhancing Conventional Automation BMS into Industry 4.0.jpg";
import scadaSoftware from "../../assets/services/Provide Software Solutions Complement to SCADA.jpg";
import hydraulicPress from "../../assets/services/Mech Hydraulic Press Service.jpg";
import robotPickPlace from "../../assets/services/Robot Pick Place Automation.jpg";

const services = [
  { img: industrialAutomationProject, title: "Industrial Automation Project" },
  { img: consultancyElectricalMechanicalCivil, title: "Consultancy in Electrical / Mechanical / Civil Works" },
  { img: cncPlcInstallation, title: "CNC / PLC Machine Installation" },
  { img: spmRetrofit, title: "SPM Machines Retrofit / Services" },
  { img: customIiot, title: "Automation & Custom Designed IIoT Products" },
  { img: bmsIndustry4, title: "Enhancing Conventional Automation BMS into Industry 4.0" },
  { img: scadaSoftware, title: "Provide Software Solutions Complement to SCADA" },
  { img: hydraulicPress, title: "Mech / Hydraulic Press Service" },
  { img: robotPickPlace, title: "Robot Pick & Place Automation" },
];

function ServicesBody() {
  return (
    <div className="services-wrapper">
      <div className="services-container">

        <h2 className="services-heading">
          <span className="services-heading-bar"></span> SERVICES
        </h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="services-card" key={index} data-aos="fade-up">
              <div className="services-image-box">
                <img src={service.img} alt={service.title} />
              </div>

              <h3 className="services-title">{service.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default ServicesBody;