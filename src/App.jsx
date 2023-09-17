import "./App.css";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { useDispatch } from "react-redux";
import { lazy, useEffect } from "react";
import { fetchCars } from "./redux/operations";

const HomePage = lazy(() => import("../src/pages/HomePage"));
const FavoritePage = lazy(() => import("../src/pages/FavoritePage"));
const CatalogPage = lazy(() => import("../src/pages/CatalogPage"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritePage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
