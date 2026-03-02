import homeImg from "../../assets/Home/welcome.jpg";

function Welcome() {
  return (
    <section className="home-section">
      <div className="home-container home-grid">

        <div className="home-img" data-aos="zoom-in">
          <img src={homeImg} alt="home" />
        </div>

        <div className="home-content" data-aos="fade-left">

            <div>
              <h2 className="home-title">ABOUT US</h2>

              <p>
                
                Formerly knowns as George Associates established in 1984 by Mr.J.C George 
                chockiah who is a pioneer in the field of industrial engineering and provided
                business services focused mainly on electrical, mechanical, and industrial 
                automation installation and maintenance for over 30 years.
              </p>

              <p>
                After continuously partnering with various MNC Like SIEMENS, GE, ABB, and
                SCHNIEDER and executing a worth of more than 20 crore value of projects in the
                past 10 to 15 years, in the year 2017 it was offshoots into two organizations as
                GEORGE MULTITECH SYSTEMS PVT LTD and GEORSONTECH PVT LTD
              </p>

              <p>
                GEORGE MULTITECH SYSTEMS PVT LTD to continue industrial service
                business segment which involves electrical, mechanical, instrumentation
                whereas the GEORSONTECH PVT LTD to provide complex or customized
                procurement, IIoT, Industry 4.0 solution service by enhancing traditional
                automation systems.
              </p>
            </div>

            <div>
              <a className="home-about-but" href="/about">Learn More</a>
            </div>
              
        </div>

      </div>
    </section>
  );
}

export default Welcome;