import { Routes, Route } from "react-router-dom";
import Detail from "../components/Detail";
import Main from "../components/Main";
import Login from "./../components/Login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/detail" element={<Detail />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default Router;
