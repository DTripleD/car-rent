import CarsList from "../components/CarsList/CarsList";
import { useSelector } from "react-redux";
import { getFavorite } from "../redux/selectors";

const Favorite = () => {
  const cars = useSelector(getFavorite);

  return <>{cars && <CarsList fav={true} cars={cars} />}</>;
};

export default Favorite;
