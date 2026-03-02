import DealWithBrand from '../components/Home/DealWithBrand';
import GoalInNumber from '../components/Home/GoalInNumber';
import GroupOfCompany from '../components/Home/GroupOfCompany';
import Hero from '../components/Home/Hero';
import OurProducts from '../components/Home/OurProducts';
import Welcome from '../components/Home/Welcome';
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
          <DealWithBrand/>
        </div>
    </>
  );
}

export default Home;