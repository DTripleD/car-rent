import "./App.css";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout";
import Home from "./pages/home";
import Catalog from "./pages/catalog";
import Favorite from "./pages/favorite";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorite" element={<Favorite />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
