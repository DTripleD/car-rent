import ChooseUs from "../components/ChooseUs/ChoseUs";
import Hero from "../components/Hero/Hero";
import { MainContainer } from "../components/MainContainer/MainContainer";
import PlanTrip from "../components/PlanTrip/PlanTrip";

const Home = () => {
  return (
    <MainContainer>
      <Hero />
      <PlanTrip />
      <ChooseUs />
    </MainContainer>
  );
};

export default Home;
