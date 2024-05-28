import { Route, Routes } from "react-router-dom";
import { HomePage } from "./modules/Pages/HomePage";
import { Favorites } from "./modules/Pages/Favorites";
// import { HomePage } from "./modules/Pages/HomePage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};
