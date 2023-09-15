import { CarCatalog } from "../components/CarCatalog/CarCatalog";
import { Section } from "./Catalog.styled";

const Catalog = () => {
  console.log("rerender");
  return (
    <>
      <Section>
        <CarCatalog />
      </Section>
    </>
  );
};

export default Catalog;
