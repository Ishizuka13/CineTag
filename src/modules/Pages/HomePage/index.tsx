import { useContext } from "react";
import { IMovie } from "../../../types/Movies";
import Favorite from "../../../assets/imagens/favorite.png";
import NotFavorite from "../../../assets/imagens/favorite_outline.png";
import "./styles.css";
import { MovieContext } from "../../../context/MoviesFavorite";
import { useNavigate } from "react-router-dom";

export const HomePage = ({ onClick }: { onClick: (movie: IMovie) => void }) => {
  const { movies, setFavorite } = useContext(MovieContext);

  const navigate = useNavigate();

  const handleFavorite = (movie: IMovie) => {
    setFavorite(movie);
  };

  const handleModal = (movie: IMovie) => {
    onClick(movie);
    navigate("/modal");
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
                <img
                  src={movie.capa}
                  alt={movie.titulo}
                  onClick={() => handleModal(movie)}
                />
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
