import "../../styles/Home.css";

import GeorsonLogo from "../../assets/Home/GroupOfCompany/Georson.png";
import GMTSLogo from "../../assets/Home/GroupOfCompany/GMTS.png";

function GroupOfCompany() {
  return (
    <section className="group-section">
      <h2 className="group-title">GROUP OF COMPANIES</h2>

      <div className="group-container">

        {/* Card 1 */}
        <div className="group-card">
          <div className="group-logo">
            <img
              src={GMTSLogo}
              alt="George Multi Tech Systems"
            />
          </div>

          <p>
            Established in the year 1986, we George Associates is conceived by
            many clients as the most technically competent, quality and
            customer satisfaction oriented electrical contractors, engaged in
            design, consultancy, installation, operation and maintenance
            services for electrical power, control and instrumentation systems
            and as well in all our endeavors like process machinery
            installation, hydraulics, pneumatics, HVAC and Ventilation Systems
            for Industries.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group-card">
          <div className="group-logo">
            <img
              src={GeorsonLogo}
              alt="Georson"
            />
          </div>

          <p>
            Established in the year 1986, we George Associates is conceived by
            many clients as the most technically competent, quality and
            customer satisfaction oriented electrical contractors, engaged in
            design, consultancy, installation, operation and maintenance
            services for electrical power, control and instrumentation systems
            and as well in all our endeavors like process machinery
            installation, hydraulics, pneumatics, HVAC and Ventilation Systems
            for Industries.
          </p>
        </div>

      </div>
    </section>
  );
}

export default GroupOfCompany;