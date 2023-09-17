import PropTypes from "prop-types";
import { SectionWrapper } from "./Section.styled";

const Section = ({ children }) => {
  return <SectionWrapper>{children}</SectionWrapper>;
};

export default Section;

Section.propTypes = {
  children: PropTypes.node,
};
