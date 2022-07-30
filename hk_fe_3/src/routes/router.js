import { Routes, Route } from "react-router-dom";
import Detail from "../components/Detail";

const Router = () => {
  return (
    <Routes>
      <Route path="/detail" element={<Detail />}></Route>
    </Routes>
  );
};

export default Router;
