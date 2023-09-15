/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import Modal from "components/Modal/Modal";

import {
  CarImg,
  CarImgWrap,
  InfoWrapper,
  Item,
  MainInfo,
  CarInfo,
  CarText,
  ModelBlue,
  SecondaryInfo,
  SecondaryCarText,
  LearnMoreBtn,
  HeartIcon,
  IconBtn,
  HeartIconBlue,
} from "./CarItem.styled";

const CarItem = ({ car, fav, change }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("fav"));
    if (local) {
      local.map((item) => {
        if (item.id === car.id) setFavorite(true);
      });
    }
  }, [car.id]);

  const handleHeartClick = () => {
    setFavorite(!favorite);
    if (!favorite) {
      const local = JSON.parse(localStorage.getItem("fav"));
      if (local) {
        local.push(car);
        localStorage.setItem("fav", JSON.stringify(local));
        return;
      }
      localStorage.setItem("fav", JSON.stringify([car]));
    } else {
      const local = JSON.parse(localStorage.getItem("fav"));
      const remove = local.filter((item) => item.id !== car.id);
      if (fav !== undefined) {
        change();
      }
      localStorage.setItem("fav", JSON.stringify(remove));
    }
  };

  const addressParts = car.address.split(", ");
  const city = addressParts[1];
  const country = addressParts[2];

  function findMaxString(array) {
    let minString = array[0];
    for (let i = 0; i < car.functionalities.length; i++) {
      if (array[i].length < minString.length) {
        minString = array[i];
      }
    }
    return minString;
  }

  const firstFunctionality = findMaxString(car.functionalities);

  return (
    <Item>
      <CarImgWrap>
        <CarImg src={car.img} alt={car.make} />
        <IconBtn onClick={handleHeartClick} type="button">
          {!favorite ? <HeartIcon /> : <HeartIconBlue />}
        </IconBtn>
      </CarImgWrap>
      <InfoWrapper>
        <MainInfo>
          <CarInfo>
            <CarText>{car.make}</CarText>
            <ModelBlue>
              {car.model}
              <span style={{ color: "black" }}>,</span>
            </ModelBlue>
            <CarText>{car.year}</CarText>
          </CarInfo>
          <CarText>{car.rentalPrice}</CarText>
        </MainInfo>
        <SecondaryInfo>
          <SecondaryCarText>{city}</SecondaryCarText>
          <SecondaryCarText>{country}</SecondaryCarText>
          <SecondaryCarText>{car.rentalCompany}</SecondaryCarText>
          <SecondaryCarText>{car.type}</SecondaryCarText>
          <SecondaryCarText>{car.make}</SecondaryCarText>
          <SecondaryCarText>{car.id}</SecondaryCarText>
          <SecondaryCarText>{firstFunctionality}</SecondaryCarText>
        </SecondaryInfo>
        <LearnMoreBtn onClick={openModal}>Learn more</LearnMoreBtn>
        {isModalOpen && (
          <Modal
            onClose={closeModal}
            key={car.id}
            model={car.model}
            make={car.make}
            year={car.year}
            rentalPrice={car.rentalPrice}
            address={car.address}
            rentalCompany={car.rentalCompany}
            functionalities={car.functionalities}
            id={car.id}
            type={car.type}
            img={car.img}
            fuelConsumption={car.fuelConsumption}
            engineSize={car.engineSize}
            description={car.description}
            accessories={car.accessories}
            rentalConditions={car.rentalConditions}
            mileage={car.mileage}
          />
        )}
      </InfoWrapper>
    </Item>
  );
};

export default CarItem;
