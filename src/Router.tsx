import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Login from "./page/auth/Login";
import Sign from "./page/auth/Sign";

const Router = () => {
  return (
    <React.Fragment>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/sign" element={<Sign />}></Route>
        </Routes>
      </RecoilRoot>
    </React.Fragment>
  );
};

export default Router;
