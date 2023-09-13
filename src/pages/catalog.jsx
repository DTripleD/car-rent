import { useEffect, useState } from "react";
import { getAllCars } from "../shared/api";
import Cart from "../components/Cart/Cart";
import { CarsList } from "./Catalog.styled";

const Catalog = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getAllCars().then((data) => setCars(data));
  }, []);

  return (
    <div>
      <CarsList>
        {cars.map((car) => (
          <li key={car.id}>
            <Cart
              model={car.model}
              make={car.make}
              year={car.year}
              rentalPrice={car.rentalPrice}
              isFavorite={car.isFavorite}
              address={car.address}
              rentalCompany={car.rentalCompany}
              functionalities={car.functionalities}
              id={car.id}
              type={car.type}
              img={car?.img}
              fuelConsumption={car.fuelConsumption}
              engineSize={car.engineSize}
              description={car.description}
              accessories={car.accessories}
              rentalConditions={car.rentalConditions}
              mileage={car.mileage}
            />
          </li>
        ))}
      </CarsList>
    </div>
  );
};

export default Catalog;
