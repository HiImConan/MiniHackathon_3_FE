import React from "react";

import {
  MovieDiv,
  MovieImg,
  MovieTitle,
  MovieTitleDiv,
} from "../styles/Main/MainStyles";

const Movie = ({ poster, title }) => {
  return (
    <MovieDiv>
      <MovieImg
        style={{ backgroundImage: `url(${poster})` }}
        src={poster}
        alt="이미지준비중"
      ></MovieImg>
      <MovieTitleDiv>
        <MovieTitle>{title}</MovieTitle>
      </MovieTitleDiv>
    </MovieDiv>
  );
};

export default Movie;
