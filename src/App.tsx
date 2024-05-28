// import { useEffect, useState } from "react";
// import { IMovie } from "./types/Movies";
// import { getMovies } from "./server";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MovieContextProvider } from "./context/MoviesFavorite";
import { Router } from "./routes";

export const App = () => {
  // const [isMovies, setIsMovies] = useState<IMovie[]>();

  // useEffect(() => {
  //   setIsMovies(getMovies);
  // }, []);

  return (
    <>
      <Header />
      <MovieContextProvider>
        <Router />
      </MovieContextProvider>
      <Footer />
    </>
  );
};
