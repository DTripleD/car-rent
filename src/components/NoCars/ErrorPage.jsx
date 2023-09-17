import HeroCar from "../../images/main-car.png";
import PropTypes from "prop-types";
import { Image, ErrorPageWraper } from "./ErrorPage.styled";
import Section from "../Section/Section";

const ErrorPage = ({ errorMessage }) => {
  return (
    <Section>
      <ErrorPageWraper>
        <h2>{errorMessage}</h2>
        <Image src={HeroCar} alt="car-img" />
      </ErrorPageWraper>
    </Section>
  );
};

export default ErrorPage;

ErrorPage.propTypes = {
  errorMessage: PropTypes.string,
};
