import Box1 from "../../images/img4.png";
import Box2 from "../../images/img5.png";
import Box3 from "../../images/img6.png";
import Section from "../Section/Section";
import {
  ChooseContainer,
  Image,
  StyledLink,
  TextContainer,
  TextContainerLeft,
  TextContainerRight,
  TextContainerRightBox,
  TextContainerRightBoxText,
} from "./ChoseUs.styled";

function ChooseUs() {
  return (
    <>
      <Section>
        <ChooseContainer>
          <TextContainer>
            <TextContainerLeft>
              <h2>Why Choose Us</h2>
              <h3>Best valued deals you will ever find</h3>
              <p>
                Discover the best deals you&apos;ll ever find with our
                unbeatable offers. We&apos;re dedicated to providing you with
                the best value for your money, so you can enjoy top-quality
                services and products without breaking the bank. Our deals are
                designed to give you the ultimate renting experience, so
                don&apos;t miss out on your chance to save big.
              </p>
              <StyledLink
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Find Details
              </StyledLink>
            </TextContainerLeft>
            <TextContainerRight>
              <TextContainerRightBox>
                <Image src={Box1} alt="car-img" />
                <TextContainerRightBoxText>
                  <h3>Cross Country Drive</h3>
                  <p>
                    Take your driving experience to the next level with our
                    top-notch vehicles for your cross-country adventures.
                  </p>
                </TextContainerRightBoxText>
              </TextContainerRightBox>
              <TextContainerRightBox>
                <Image src={Box2} alt="coin-img" />
                <TextContainerRightBoxText>
                  <h3>All Inclusive Pricing</h3>
                  <p>
                    Get everything you need in one convenient, transparent price
                    with our all-inclusive pricing policy.
                  </p>
                </TextContainerRightBoxText>
              </TextContainerRightBox>
              <TextContainerRightBox>
                <Image src={Box3} alt="coin-img" />
                <TextContainerRightBoxText>
                  <h3>No Hidden Charges</h3>
                  <p>
                    Enjoy peace of mind with our no hidden charges policy. We
                    believe in transparent and honest pricing.
                  </p>
                </TextContainerRightBoxText>
              </TextContainerRightBox>
            </TextContainerRight>
          </TextContainer>
        </ChooseContainer>
      </Section>
    </>
  );
}

export default ChooseUs;
