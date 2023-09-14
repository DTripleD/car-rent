import { useEffect, useState } from "react";
import CarsList from "../components/CarsList/CarsList";
import { getAllCars } from "../shared/api";
import { Section } from "./Catalog.styled";

const Catalog = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    getAllCars().then((data) => setCars(data));
  }, []);
  return (
    <>
      <Section>
        <CarsList data={cars} />
      </Section>
    </>
  );
};

export default Catalog;
