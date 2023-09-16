import "./App.css";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Favorite from "./pages/Favorite";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCars } from "./redux/operations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorite />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
