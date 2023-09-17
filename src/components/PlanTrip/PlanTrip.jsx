import SelectCar from "../../images/img1.png";
import Contact from "../../images/img2.png";
import Drive from "../../images/img3.png";
import Section from "../Section/Section";
import {
  Image,
  PlanContainer,
  PlanContainerBox,
  PlanContainerBoxes,
  PlanContainerTitle,
} from "./PlanTrip.styled";

function PlanTrip() {
  return (
    <Section>
      <PlanContainer>
        <PlanContainerTitle>
          <h3>Plan your trip now</h3>
          <h2>Quick & easy car rental</h2>
        </PlanContainerTitle>

        <PlanContainerBoxes>
          <PlanContainerBox>
            <Image src={SelectCar} alt="icon_img" />
            <h3>Select Car</h3>
            <p>
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs
            </p>
          </PlanContainerBox>

          <PlanContainerBox>
            <Image src={Contact} alt="icon_img" />
            <h3>Contact Operator</h3>
            <p>
              Our knowledgeable and friendly operators are always ready to help
              with any questions or concerns
            </p>
          </PlanContainerBox>

          <PlanContainerBox>
            <Image src={Drive} alt="icon_img" />
            <h3>Let&apos;s Drive</h3>
            <p>
              Whether you&apos;re hitting the open road, we&apos;ve got you
              covered with our wide range of cars
            </p>
          </PlanContainerBox>
        </PlanContainerBoxes>
      </PlanContainer>
    </Section>
  );
}

export default PlanTrip;
