import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Login from "./page/auth/Login";
import Sign from "./page/auth/Sign";
import StockList from "./page/main/stockList/StockList";
import StockListDetail from "./page/main/stockList/StockListDetail";
import StockMain from "./page/main/stockMain/StockMain";

const Router = () => {
  return (
    <React.Fragment>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/sign" element={<Sign />}></Route>
          <Route path="/main" element={<StockMain />}></Route>
          <Route path="/list" element={<StockList />}></Route>
          <Route path="/list/:stockid" element={<StockListDetail />}></Route>
        </Routes>
      </RecoilRoot>
    </React.Fragment>
  );
};

export default Router;
