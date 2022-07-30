import axios from "axios";

export async function getMovieApi() {
  const res = await axios.get(
    `https://d0cc7814-98ab-422a-b0ef-82d4165b2542.mock.pstmn.io/`
  );

  return res;
}

export async function getDetailApi() {
  const res = await axios.get(
    `https://d0cc7814-98ab-422a-b0ef-82d4165b2542.mock.pstmn.io/movie/2`
  );

  return res;
}

export async function getCommentApi() {
  const res = await axios.get(
    `ttps://d0cc7814-98ab-422a-b0ef-82d4165b2542.mock.pstmn.io/movie/comments/2`
  );

  return res;
}
