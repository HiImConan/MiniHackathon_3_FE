import { useState, useEffect } from "react";
import { getDetailApi } from "../assets/Api_test";

const Detail = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getDetailApi();
        console.log(response.data);
        setMovieData(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);
  const {
    title_kor,
    title_eng,
    poster_url,
    rating_aud,
    rating_cri,
    rating_net,
    genre,
    showtimes,
    release_date,
    summary,
  } = movieData;
  return (
    <>
      <div>{title_kor}</div>
      <div>{title_eng}</div>
      <div>
        <img
          src={poster_url}
          style={{ width: "300px" }}
          alt={"moviePosterImg"}
        />
        <div>
          <div>{rating_aud}</div>
          <div>{rating_cri}</div>
          <div>{rating_net}</div>
        </div>
        <div>
          <div>{genre}</div>
          <div>{showtimes}</div>
          <div>{release_date}</div>
        </div>
        <div>
          <div>줄거리</div>
          <div>{summary}</div>
        </div>
      </div>
    </>
  );
};

export default Detail;
