import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../../context/MoviesFavorite";
import { IMovie } from "../../../types/Movies";
import Favorite from "../../../assets/imagens/favorite.png";
import NotFavorite from "../../../assets/imagens/favorite_outline.png";
import "./styles.css";

export const Favorites = () => {
  const { movies, setFavorite } = useContext(MovieContext);
  const [moviesFavorite, setMoviesFavorite] = useState<IMovie[]>([]);

  useEffect(
    () => setMoviesFavorite(movies.filter((e) => e.favorite === true)),
    [movies]
  );

  return (
    <>
      <section className="Movies">
        <ul className="MoviesList">
          {moviesFavorite &&
            moviesFavorite.map((movie: IMovie) => (
              <li className="movie" key={movie.id}>
                <a href={movie.link} target="/blank" className="movieIMG">
                  <img src={movie.capa} alt={movie.titulo} />
                </a>
                <div className="movieDescription">
                  <h2>{movie.titulo}</h2>
                  <img
                    src={movie.favorite ? Favorite : NotFavorite}
                    alt=""
                    onClick={() => setFavorite(movie)}
                  />
                </div>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
};
