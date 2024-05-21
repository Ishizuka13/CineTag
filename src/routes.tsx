import { Route, Routes } from "react-router-dom";
import { HomePage } from "./modules/Pages/HomePage";
// import { HomePage } from "./modules/Pages/HomePage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
