import CarsList from "../components/CarsList/CarsList";
import { MainContainer } from "../components/MainContainer/MainContainer";
import { useSelector } from "react-redux";
import { getFavorite } from "../redux/selectors";

const Favorite = () => {
  const cars = useSelector(getFavorite);

  return (
    <MainContainer>
      <div>{cars && <CarsList fav={true} cars={cars} />}</div>
    </MainContainer>
  );
};

export default Favorite;
