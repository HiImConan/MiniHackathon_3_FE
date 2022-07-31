import React from "react";
import { getMovieApi } from "../assets/Api_test";
import { useEffect, useState } from "react";

import { SearchInput, SeachDiv, MainWrap } from "../styles/Main/MainStyles";

import MovieList from "./MovieList";
import PageList from "./PageList";

const Main = () => {
  const [moviesData, setMoviesData] = useState([]);
  //const [page, setPage] = useState(1);
  const [pages, setPages] = useState([]); // 페이지 배열

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getMovieApi();

        //pages 관리
        const lastPage = Math.ceil(response.movies.length / 30);
        console.log(lastPage);
        const tempPages = [];
        for (let i = 1; i <= lastPage; i++) {
          tempPages.push(i);
        }
        setPages(tempPages);

        // movieData 관리
        setMoviesData(response.movies); // [{},{},...] 원래는 response.data였음
        console.log(moviesData);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  return (
    <MainWrap>
      <SeachDiv>
        <SearchInput placeholder="Ex)인셉션" />
      </SeachDiv>
      <MovieList moviesData={moviesData} />
      <PageList pages={pages} />
    </MainWrap>
  );
};

export default Main;
