import { useEffect, useState } from "react";
import { IMovie } from "../../../types/Movies";
import { getMovies } from "../../../server";
import { StyledSection } from "./css";

export const HomePage = () => {
  const [isMovies, setIsMovies] = useState<IMovie[]>();

  useEffect(() => {
    setIsMovies(getMovies);
  }, []);

  return (
    <>
      <h1>Filmes em cartaz:</h1>
      <StyledSection>
        {isMovies &&
          isMovies.map((movie: IMovie) => (
            <li key={movie.id}>{movie.titulo}</li>
          ))}
      </StyledSection>
    </>
  );
};
