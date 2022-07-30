import React from "react";
import { SearchInput, SeachDiv, MainWrap } from "../styles/Main/MainStyles";

import MovieList from "./MovieList";
import PageList from "./PageList";

const Main = () => {
  return (
    <MainWrap>
      <SeachDiv>
        <SearchInput placeholder="Ex)인셉션" />
      </SeachDiv>
      <MovieList />
      <PageList />
    </MainWrap>
  );
};

export default Main;
