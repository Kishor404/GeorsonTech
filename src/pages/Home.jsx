import DealWithBrand from '../components/Home/DealWithBrand';
import GoalInNumber from '../components/Home/GoalInNumber';
import GroupOfCompany from '../components/Home/GroupOfCompany';
import Hero from '../components/Home/Hero';
import OurProducts from '../components/Home/OurProducts';
import Welcome from '../components/Home/Welcome';

import Enquiry from "../components/Enquiry"; // ✅ single file
import Career from '../components/Home/Career';
import '../styles/Home.css';

function Home() {
  return(
    <>
      <div>
        <Hero/>
        <GroupOfCompany/>
        <Welcome/>
        <GoalInNumber/>
        <OurProducts/>
        <Career />
        <DealWithBrand/>
      </div>

      {/* 🔥 ENQUIRY (Button + Modal in one) */}
      <Enquiry />
    </>
  );
}

export default Home;