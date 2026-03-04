import "../../styles/Home.css";
import { FaThumbsUp, FaCog, FaUsers, FaTrophy } from "react-icons/fa";
import goalinnumImg from "../../assets/Home/goalinnumImg.png"

function GoalInNumber() {
  return (
    <section className="goal-section">

      <img src={goalinnumImg}/>

      <div className="goal-overlay">
        <h2 className="goal-title">OUR GOALS IN NUMBER</h2>

        <div className="goal-container">

          <div className="goal-card">
            <FaThumbsUp className="goal-icon" />
            <h3>100%</h3>
            <p>Best Quality</p>
          </div>

          <div className="goal-card">
            <FaCog className="goal-icon" />
            <h3>250+</h3>
            <p>Projects</p>
          </div>

          <div className="goal-card">
            <FaUsers className="goal-icon" />
            <h3>150+</h3>
            <p>Clients</p>
          </div>

          <div className="goal-card">
            <FaTrophy className="goal-icon" />
            <h3>100+</h3>
            <p>Awards</p>
          </div>

        </div>
      </div>

    </section>
  );
}

export default GoalInNumber;