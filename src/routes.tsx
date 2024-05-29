import { Route, Routes } from "react-router-dom";
import { HomePage } from "./modules/Pages/HomePage";
import { Favorites } from "./modules/Pages/Favorites";
import { useState } from "react";
import { IMovie } from "./types/Movies";
import { ModalPage } from "./modules/Pages/ModalPage";
// import { HomePage } from "./modules/Pages/HomePage";

export const Router = () => {
  const [movieSelected, setMovieSelected] = useState<IMovie>();

  return (
    <Routes>
      <Route path="/" element={<HomePage onClick={setMovieSelected} />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route
        path="/modal"
        element={<ModalPage movieSelected={movieSelected} />}
      />
    </Routes>
  );
};
