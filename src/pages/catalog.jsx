import { useSelector } from "react-redux";

import CarsList from "../components/CarsList/CarsList";

import { getCars } from "../redux/selectors";

const Catalog = () => {
  const cars = useSelector(getCars);

  return (
    <>
      <CarsList cars={cars} />
    </>
  );
};

export default Catalog;
