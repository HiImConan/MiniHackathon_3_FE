import React from "react";
import { SearchInput } from "../styles/Main/Search";
import { SeachDiv } from "./../styles/Main/Search";
import {
  MovieDiv,
  MovieImgDiv,
  MovieSection,
  MovieTitleDiv,
} from "../styles/Main/MovieSection";
import MovieList from "./MovieList";

const API_URL = "https://d0cc7814-98ab-422a-b0ef-82d4165b2542.mock.pstmn.io/";

const Main = () => {
  return (
    <div>
      <SeachDiv>
        <SearchInput placeholder="Ex)인셉션" />
      </SeachDiv>
      <MovieList apiUrl={API_URL} />
    </div>
  );
};

export default Main;
