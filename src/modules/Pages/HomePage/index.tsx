import { useContext, useEffect, useState } from "react";
import { IMovie } from "../../../types/Movies";
import { getMovies } from "../../../server";
import Favorite from "../../../assets/imagens/favorite.png";
import NotFavorite from "../../../assets/imagens/favorite_outline.png";
import "./styles.css";
import { MovieContext } from "../../../context/MoviesFavorite";

export const HomePage = () => {
  const { movies, setFavorite } = useContext(MovieContext);

  const handleFavorite = (movie: IMovie) => {
    setFavorite(movie);
  };

  return (
    <>
      <h1 className="textMovies">
        Um lugar para guardar seus vídeos e filmes!
      </h1>
      <section className="Movies">
        <ul className="MoviesList">
          {movies &&
            movies.map((movie: IMovie) => (
              <li className="movie" key={movie.id}>
                <a href={movie.link} target="/blank" className="movieIMG">
                  <img src={movie.capa} alt={movie.titulo} />
                </a>
                <div className="movieDescription">
                  <h2>{movie.titulo}</h2>
                  <img
                    src={movie.favorite ? Favorite : NotFavorite}
                    alt=""
                    onClick={() => handleFavorite(movie)}
                  />
                </div>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
};
