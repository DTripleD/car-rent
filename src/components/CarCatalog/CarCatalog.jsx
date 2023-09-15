import { useEffect, useState } from "react";

import CarsList from "../CarsList/CarsList";
import { getCar } from "../../shared/api";

export const CarCatalog = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    (async () => {
      const allCar = await getCar();
      setCars(allCar);
    })();
  }, []);

  return (
    <div>
      {/* <Form /> */}
      <CarsList cars={cars} />
    </div>
  );
};
