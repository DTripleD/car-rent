import "./App.css";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Favorite from "./pages/Favorite";

function App() {
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
