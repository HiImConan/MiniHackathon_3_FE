import { Routes, Route } from "react-router-dom";
import Detail from "../components/Detail";
import Main from "../components/Main";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/detail" element={<Detail />}></Route>
    </Routes>
  );
};

export default Router;
