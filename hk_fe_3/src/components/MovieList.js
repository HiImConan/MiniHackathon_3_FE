import React from "react";
import { getMovieApi } from "../assets/Api_test";
import { useEffect, useState } from "react";

import Movie from "./Movie";
import { MovieListDiv } from "../styles/Main/MainStyles";

const MovieList = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getMovieApi();
        setMovieData(response.movies); // [{},{},...] 원래는 response.data였음
        console.log(movieData);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [movieData]);

  return (
    <MovieListDiv>
      {movieData.map((movie) => (
        <Movie
          key={movie.id}
          poster={movie.poster_url}
          title={movie.title_kor}
        />
      ))}
    </MovieListDiv>
  );
};

export default MovieList;
