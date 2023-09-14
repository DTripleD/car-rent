import { useEffect, useState } from "react";
import CarItem from "../CarItem/CarItem";
import {
  FormWraper,
  List,
  SearchBtn,
  FormName,
  StyledSelectBrand,
  StyledSelectPrice,
  MileageInputsWraper,
  MileageInputLeft,
  MileageInputRight,
  Label,
} from "./CarsList.styled";

import { optionCategories } from "../../shared/data";

const cardsPerPage = 8;

// eslint-disable-next-line react/prop-types
const CarsList = ({ data }) => {
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [startMiles, setStartMiles] = useState("");
  const [endMiles, setEndMiles] = useState("");

  const [page, setPage] = useState(1);
  const [filteredCars, setFilteredCars] = useState([]);
  const uniqueMakes = new Set();

  const handleChangeModel = (event) => {
    console.log(event.value);
    setModel(event.value);
    // setIsDropdownOpen(false);
    setPage(1);
  };

  const handleChangeStartMiles = (event) => {
    setStartMiles(event.target.value);
    setPage(1);
  };
  const handleChangeEndMiles = (event) => {
    setEndMiles(event.target.value);
    setPage(1);
  };

  const handleChangePrice = (event) => {
    setPrice(event.value);
    setPage(1);
  };

  useEffect(() => {
    setFilteredCars(data);
  }, [data]);

  function createArrayWithStep(number, step) {
    const resultArray = [];
    for (let i = step; i <= number; i += step) {
      resultArray.push(i.toString());
    }
    return resultArray;
  }

  const minPrice = 30;
  const maxPrice = 500;
  const step = 10;

  const priceOptions = createArrayWithStep(maxPrice, step)
    .filter((item) => item >= minPrice)
    .map((item) => ({ label: item, value: item }));

  const modelOptions = data
    // eslint-disable-next-line react/prop-types
    .filter((item) => {
      const make = item.make;
      if (!uniqueMakes.has(make)) {
        uniqueMakes.add(make);
        return true;
      }
      return false;
    })
    .map((item) => ({ label: item.make, value: item.make }));

  const clear = () => {
    setModel("");
    setPrice("");
    setStartMiles("");
    setEndMiles("");
    setFilteredCars(data);
    // setShowNoCarsMessage(false);
  };

  const search = () => {
    console.log("start");
    // setShowNoCarsMessage(false);
    const isBrandValid = (model) => /^[a-zA-Z\s]+$/i.test(model);
    let arr = data;

    if (model !== "") {
      if (!isBrandValid(model)) {
        alert("Car brand should contain only EN letters !");
        return;
      }
      if (
        !modelOptions.find(
          (option) => option.label.toLowerCase() === model.toLowerCase()
        )
      ) {
        alert(`There is no car brand "${model}" in the list with this params!`);
        return;
      }

      arr = arr.filter(
        ({ make }) => make.toLowerCase() === model.toLowerCase()
      );
    }

    if (price !== "") {
      if (Number(price) < minPrice) {
        alert(`Price cannot be less than ${minPrice}!`);
        return;
      } else if (Number(price) > maxPrice) {
        alert(`Price cannot be greater than ${maxPrice}!`);
        return;
      }
      arr = arr
        .filter(
          ({ rentalPrice }) => Number(rentalPrice.substr(1)) <= Number(price)
        )
        .sort((a, b) => a.rentalPrice - b.rentalPrice);
    }

    if (startMiles === "" && endMiles !== "")
      arr = arr.filter(({ mileage }) => mileage <= endMiles);

    if (startMiles !== "" && endMiles === "")
      arr = arr.filter(({ mileage }) => mileage >= startMiles);

    if (startMiles > endMiles && endMiles !== "") {
      alert("Mileage is incorrect!");
      return;
    }

    if (startMiles !== "" && endMiles !== "") {
      const startMilesInt = parseInt(startMiles, 10);
      const endMilesInt = parseInt(endMiles, 10);
      if (!Number.isInteger(startMilesInt) || !Number.isInteger(endMilesInt)) {
        alert(
          "Mileage must be an integer without decimals, in the range from 1000 to 6620!"
        );
        return;
      }
      if (startMilesInt < 1000 || endMilesInt > 6620) {
        alert("Mileage should be in the range of 1000 to 6620!");
        return;
      }
      arr = arr.filter(
        ({ mileage }) => mileage >= startMiles && mileage <= endMiles
      );
    }
    arr.sort((a, b) => {
      const priceA = Number(a.rentalPrice.substr(1));
      const priceB = Number(b.rentalPrice.substr(1));

      if (priceA === priceB) {
        return a.mileage - b.mileage;
      }

      return priceA - priceB;
    });

    setFilteredCars(arr);
    if (model !== "" || price !== "" || startMiles !== "" || endMiles !== "") {
      if (filteredCars.length === 0) {
        // setShowNoCarsMessage(true);
        alert("No cars matching your criteria found.");
      }
    }
    return arr;
  };

  const paginatedCars = filteredCars.slice(0, page * cardsPerPage);
  const getPage = () => setPage(page + 1);
  const totalPages = Math.ceil(filteredCars.length / cardsPerPage);

  return (
    <div>
      <FormWraper>
        <Label>
          <FormName>Car brand</FormName>
          <StyledSelectBrand
            placeholder="Enter the text"
            options={optionCategories}
            onChange={handleChangeModel}
            classNamePrefix={"select"}
          />
        </Label>
        <Label>
          <FormName>Price/ 1 hour</FormName>
          <StyledSelectPrice
            placeholder="To $"
            options={priceOptions}
            onChange={handleChangePrice}
            classNamePrefix={"select"}
          />
        </Label>
        <Label>
          <FormName>Сar mileage / km</FormName>
          <MileageInputsWraper>
            <MileageInputLeft
              type="text"
              placeholder="From"
              onChange={handleChangeStartMiles}
            />
            <MileageInputRight
              type="text"
              placeholder="To"
              onChange={handleChangeEndMiles}
            />
          </MileageInputsWraper>
        </Label>
        <SearchBtn type="button" onClick={search}>
          Search
        </SearchBtn>
        <SearchBtn type="button" onClick={clear}>
          Clear
        </SearchBtn>
      </FormWraper>
      <List>
        {paginatedCars.map((car) => (
          <CarItem key={car.id} car={car} />
        ))}
      </List>

      {filteredCars.length > 0 ? (
        totalPages !== page && (
          <button onClick={getPage} type="button">
            Load more
          </button>
        )
      ) : (
        <h2>No cars abble</h2>
      )}
    </div>
  );
};

export default CarsList;
