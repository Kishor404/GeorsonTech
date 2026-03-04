import ServicesBody from "../components/Services/ServicesBody";
import TitleBar from "../components/TitleBar";
import ServicesTitleImg from "../assets/Services/titleImg.png";

function Services() {
  return (
    <>
      <TitleBar title="SERVICES" bg={ServicesTitleImg}/>
      <ServicesBody />
    </>
  );
}

export default Services;