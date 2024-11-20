import React from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movie_id } = useParams();
  console.log(movie_id);
  return <div>MovieDetails - {movie_id}</div>;
};

export default MovieDetails;
