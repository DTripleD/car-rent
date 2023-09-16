import CarsList from "../CarsList/CarsList";
import { useSelector } from "react-redux";
import { getCars } from "../../redux/selectors";

export const CarCatalog = () => {
  const cars = useSelector(getCars);

  return (
    <div>
      {/* <Form /> */}
      <CarsList cars={cars} />
    </div>
  );
};
