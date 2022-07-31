import React from "react";

import Movie from "./Movie";
import { MovieListDiv } from "../styles/Main/MainStyles";

const MovieList = ({ moviesData }) => {

  return (
    <MovieListDiv>
      {moviesData.map((movie) => (
        <Movie
          key={movie.id}
          poster={movie.poster_url}
          title={movie.title_kor}
          movieIdData={movie.id}
        />
      ))}
    </MovieListDiv>
  );
};

export default MovieList;
