import React from "react";

import {
  MovieDiv,
  MovieImgDiv,
  MovieSection,
  MovieTitleDiv,
} from "../styles/Main/MovieSection";

const MovieList = ({ apiUrl }) => {
  return (
    <div>
      <MovieSection>
        <MovieDiv>
          <MovieImgDiv />
          <MovieTitleDiv />
        </MovieDiv>
      </MovieSection>
    </div>
  );
};

export default MovieList;
