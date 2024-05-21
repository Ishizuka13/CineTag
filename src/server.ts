import axios from "axios";

export const getMovies = await axios
  .get("http://localhost:3000/movies")
  .then((res) => res.data);
