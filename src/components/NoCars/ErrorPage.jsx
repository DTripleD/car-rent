import HeroCar from "../../images/main-car.png";
import PropTypes from "prop-types";
import { Image, ErrorPageWraper } from "./ErrorPage.styled";

const ErrorPage = ({ errorMessage }) => {
  return (
    <ErrorPageWraper>
      <h2>{errorMessage}</h2>
      <Image src={HeroCar} alt="car-img" />
    </ErrorPageWraper>
  );
};

export default ErrorPage;

ErrorPage.propTypes = {
  errorMessage: PropTypes.string,
};
