import HeroCar from "../../images/main-car.png";
import Section from "../Section/Section";
import {
  ButtonWraper,
  HeroContent,
  HeroContentText,
  Image,
  LearnMore,
} from "./Hero.styled";

function Hero() {
  return (
    <Section>
      <HeroContent id="home">
        <HeroContentText>
          <h4>Plan your trip now</h4>
          <h1>
            Save <span>big</span> with our car rental
          </h1>
          <p>
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <ButtonWraper>
            <LearnMore to="/catalog">Book Ride</LearnMore>
          </ButtonWraper>
        </HeroContentText>

        <Image src={HeroCar} alt="car-img" />
      </HeroContent>
    </Section>
  );
}

export default Hero;
