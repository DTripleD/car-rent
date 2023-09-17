import { useSelector } from "react-redux";

import CarsList from "../components/CarsList/CarsList";

import { getCars } from "../redux/selectors";

const CatalogPage = () => {
  const cars = useSelector(getCars);

  return (
    <>
      <CarsList cars={cars} />
    </>
  );
};

export default CatalogPage;
