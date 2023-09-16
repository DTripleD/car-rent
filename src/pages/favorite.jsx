import { useEffect, useState } from "react";
import CarsList from "../components/CarsList/CarsList";
import { MainContainer } from "../components/MainContainer/MainContainer";

const Favorite = () => {
  const [cars, setcars] = useState(false);
  const [favorite, setFavorite] = useState(false);

  console.log(favorite);

  console.log(cars);

  useEffect(() => {
    setFavorite(false);
    const local = JSON.parse(localStorage.getItem("fav"));
    if (local) {
      setcars(local);
    }
  }, [favorite]);

  const handleChangeFavorite = () => {
    setFavorite(true);
  };
  return (
    <MainContainer>
      <div>
        {cars && (
          <CarsList changeFav={handleChangeFavorite} fav={true} cars={cars} />
        )}
      </div>
    </MainContainer>
  );
};

export default Favorite;
