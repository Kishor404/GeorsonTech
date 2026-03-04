import "../../styles/Clients.css";

import ABB from "../../assets/Clients/ABB.png";
import AIRTRONIC from "../../assets/Clients/AIRTRONIC.jpeg";
import BARGA from "../../assets/Clients/BARGA.jpeg";
import CHAKR from "../../assets/Clients/CHAKR.png";
import DRMILTON from "../../assets/Clients/DRMILTON.jpeg";
import GILBARCO from "../../assets/Clients/GILBARCO.png";
import LECS from "../../assets/Clients/LECS.jpg";
import MARCUS from "../../assets/Clients/MARCUS.jpeg";
import NORBAR from "../../assets/Clients/NORBAR.png";
import RADIANT from "../../assets/Clients/RADIANT.png";
import RAMCO from "../../assets/Clients/RAMCO.jpeg";
import TitleBar from "../TitleBar";
const clients = [
  { img: ABB, name: "ABB" },
  { img: AIRTRONIC, name: "AIRTRONIC" },
  { img: BARGA, name: "BARGA" },
  { img: CHAKR, name: "CHAKR" },
  { img: DRMILTON, name: "DRMILTON" },
  { img: GILBARCO, name: "GILBARCO" },
  { img: LECS, name: "LECS" },
  { img: MARCUS, name: "MARCUS" },
  { img: NORBAR, name: "NORBAR" },
  { img: RADIANT, name: "RADIANT" },
  { img: RAMCO, name: "RAMCO" },
];

import ClientsTitleImg from "../../assets/Clients/titleImg.png";

function ClientsBody() {
  return (
    <div className="clients-wrapper">
      <TitleBar title="CLIENTS" bg={ClientsTitleImg}/>
      <div className="clients-container">

        <div className="clients-grid">
          {clients.map((client, index) => (
            <div
              className="clients-card"
              key={index}
              data-aos="fade-up"
            >
              <img src={client.img} alt={client.name} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default ClientsBody;