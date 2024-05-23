import { useEffect, useState } from "react";
import { IMovie } from "../../../types/Movies";
import { getMovies } from "../../../server";
import Favorite from "../../../assets/imagens/favorite.png";
import NotFavorite from "../../../assets/imagens/favorite_outline.png";
import "./styles.css";

export const HomePage = () => {
  const [isMovies, setIsMovies] = useState<IMovie[]>();
  const [Liked, setLiked] = useState<boolean>();

  const handleFavorite = (id) => {
    if (isMovies?.some((e) => e.id === id)) {
      setLiked(!Liked);
    }
    console.log(id);
  };

  useEffect(() => {
    setIsMovies(getMovies);
  }, []);

  return (
    <>
      <h1 className="textMovies">
        Um lugar para guardar seus vídeos e filmes!
      </h1>
      <section className="Movies">
        <ul className="MoviesList">
          {isMovies &&
            isMovies.map((movie: IMovie) => (
              <li className="movie" key={movie.id}>
                <a href={movie.link} className="movieIMG">
                  <img src={movie.capa} alt={movie.titulo} />
                </a>
                <div className="movieDescription">
                  <h2>{movie.titulo}</h2>
                  <img
                    src={Liked ? Favorite : NotFavorite}
                    alt=""
                    onClick={() => handleFavorite(movie.id)}
                  />
                </div>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
};
