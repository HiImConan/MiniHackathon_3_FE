export async function getMovieApi() {
  const res = await fetch(
    `https://d0cc7814-98ab-422a-b0ef-82d4165b2542.mock.pstmn.io/`
  );

  return await res.json();
}

export async function getDetailApi() {
  const res = await fetch(
    `https://d0cc7814-98ab-422a-b0ef-82d4165b2542.mock.pstmn.io/movie/2`
  );

  return await res.json();
}

export async function getCommentApi() {
  const res = await fetch(
    `ttps://d0cc7814-98ab-422a-b0ef-82d4165b2542.mock.pstmn.io/movie/comments/2`
  );

  return await res.json();
}
