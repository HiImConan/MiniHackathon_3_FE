import { Routes, Route } from "react-router-dom";
import Detail from "../components/Detail";
import Main from "../components/Main";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/detail/:movieID" element={<Detail />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/SignUp" element={<SignUp />}></Route>
    </Routes>
  );
};

export default Router;
