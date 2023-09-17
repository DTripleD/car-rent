import { useEffect, useState } from "react";
import PropTypes from "prop-types";

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
import { useDispatch, useSelector } from "react-redux";
import {
  removeFavorite,
  setFavoritee,
} from "../../redux/favorite/favoriteSlice";
import { getFavorite } from "../../redux/selectors";

const CarItem = ({ car }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [favorite, setFavorite] = useState(false);

  const data = useSelector(getFavorite);

  useEffect(() => {
    if (data) {
      data.map((item) => {
        if (item.id === car.id) setFavorite(true);
      });
    }
  }, [car.id, data]);

  const handleHeartClick = () => {
    setFavorite(!favorite);
    if (!favorite) {
      dispatch(setFavoritee(car));
    } else {
      dispatch(removeFavorite(car));
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

CarItem.propTypes = {
  car: PropTypes.shape({
    make: PropTypes.string,
    model: PropTypes.string,
    mileage: PropTypes.number,
    rentalConditions: PropTypes.string,
    accessories: PropTypes.array,
    engineSize: PropTypes.string,
    id: PropTypes.number,
    description: PropTypes.string,
    rentalPrice: PropTypes.string,
    fuelConsumption: PropTypes.string,
    functionalities: PropTypes.array,
    year: PropTypes.number,
    img: PropTypes.string,
    type: PropTypes.string,
    rentalCompany: PropTypes.string,
    address: PropTypes.string,
  }),
};
