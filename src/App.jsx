import "./App.css";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { useDispatch } from "react-redux";
import { lazy, useEffect } from "react";
import { fetchCars } from "./redux/operations";
import ErrorPage from "./components/NoCars/ErrorPage";

const Home = lazy(() => import("./pages/Home"));
const Catalog = lazy(() => import("./pages/Catalog"));
const Favorite = lazy(() => import("./pages/Favorite"));

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
          <Route
            path="*"
            element={
              <ErrorPage errorMessage="404 page. Please go to any other page from the suggested ones" />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
