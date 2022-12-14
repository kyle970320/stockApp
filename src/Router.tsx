import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Login from "./page/auth/Login";
import Sign from "./page/auth/Sign";
import Main from "./page/main/Main";
import StockList from "./page/stockList/StockList";
import StockListDetail from "./page/stockList/StockListDetail";
const Router = () => {
  return (
    <React.Fragment>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/sign" element={<Sign />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/stocklist" element={<StockList />}></Route>
          <Route
            path="/stocklist/:stockid"
            element={<StockListDetail />}
          ></Route>
        </Routes>
      </RecoilRoot>
    </React.Fragment>
  );
};

export default Router;
