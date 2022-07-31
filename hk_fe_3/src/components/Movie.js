import React from "react";
import { useNavigate, useState } from "react-router-dom";

import {
  MovieDiv,
  MovieImg,
  MovieTitle,
  MovieTitleDiv,
} from "../styles/Main/MainStyles";

const Movie = ({ poster, title, movieIdData }) => {
  const navigate = useNavigate();

  const showMovieDetial = () => {
    navigate(`/detail/${movieIdData}`);
  };

  return (
    <MovieDiv onClick={showMovieDetial}>
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
