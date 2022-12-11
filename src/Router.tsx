import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Login from "./page/auth/Login";
import Sign from "./page/auth/Sign";
import StockCalc from "./page/main/stockCalc/StockCalc";
import StockCalcDetail from "./page/main/stockCalc/StockCalcDetail";
import StockMain from "./page/main/stockMain/StockMain";

const Router = () => {
  return (
    <React.Fragment>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/sign" element={<Sign />}></Route>
          <Route path="/main" element={<StockMain />}></Route>
          <Route path="/calc" element={<StockCalc />}></Route>
          <Route path="/calc/:stockid" element={<StockCalcDetail />}></Route>
        </Routes>
      </RecoilRoot>
    </React.Fragment>
  );
};

export default Router;
