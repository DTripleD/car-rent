import { RotatingLines } from "react-loader-spinner";
import { LoaderWraper } from "./Loader.styled";
import Section from "../Section/Section";

const Loader = () => {
  return (
    <Section>
      <LoaderWraper>
        <RotatingLines
          strokeColor="lightblue"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </LoaderWraper>
    </Section>
  );
};

export default Loader;
