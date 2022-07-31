import React from "react";

import Movie from "./Movie";
import { MovieListDiv } from "../styles/Main/MainStyles";

const MovieList = ({ moviesData }) => {
  return (
    <MovieListDiv>
      {moviesData.map((movie, idx) => (
        <Movie key={idx} movie={movie} />
      ))}
    </MovieListDiv>
  );
};

export default MovieList;
