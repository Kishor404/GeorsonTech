import "../../styles/About.css";
import AboutTitleImg from "../../assets/About/titleImg.png";

function AboutTitleBar() {
  return(
    <>
        <div className="about-titlebar">
            <div className="about-title-img-cont">
                <img src={AboutTitleImg}/>
            </div>
            <div className="about-title-p-cont">
                <p>ABOUT US</p>
            </div>
        </div>
    </>
  );
}

export default AboutTitleBar;