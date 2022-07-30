import React from "react";
import { getMovieApi } from "../assets/Api_test";
import { useEffect, useState } from "react";

import { PageListDiv, PageNumberDiv } from "../styles/Main/MainStyles";

const PageList = () => {
  //const [page, setPage] = useState(1);
  const [pages, setPages] = useState([]); // 페이지 배열

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getMovieApi();
        //끝 페이지 계산
        const lastPage = Math.ceil(response.movies.length / 30);
        console.log(lastPage);

        //페이지 리스트 만들고, pages 배열에 복사
        const tempPages = [];
        for (let i = 1; i <= lastPage; i++) {
          tempPages.push(i);
        }
        setPages(tempPages);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  return (
    <PageListDiv>
      {pages.map((pageNum) => (
        <PageNumberDiv key={pageNum}>{pageNum}</PageNumberDiv>
      ))}
    </PageListDiv>
  );
};

export default PageList;
