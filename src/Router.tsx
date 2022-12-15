import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { RecoilRoot } from "recoil";
import Layout from "./components/Layout";
import Login from "./page/auth/Login/Login";
import Sign from "./page/auth/sign/Sign";
import Main from "./page/main/Main";
import StockList from "./page/stockList/StockList";
import StockListDetail from "./page/stockList/StockListDetail";
import { analytics } from "./service/firebase/fbInit";
import { Reset } from "styled-reset";
import "./globalStyle.css";
import MainList from "./page/main/MainList";
const firebase = analytics;

const Router = () => {
  const localStorageUserUID = window.localStorage.getItem("userUID");
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (localStorageUserUID && location.pathname === "/") {
      navigate("/mystock/main");
    } else if (!localStorageUserUID && location.pathname.includes("mystock")) {
      navigate("/");
    }
  }, [location.pathname]);
  return (
    <React.Fragment>
      <Reset />
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/mystock" element={<Layout />}>
            <Route path="main" element={<Main />} />
            <Route path="assets" element={<MainList />} />
            <Route path="stocklist" element={<StockList />} />
            <Route path="stocklist/:stockid" element={<StockListDetail />} />
          </Route>
        </Routes>
      </RecoilRoot>
    </React.Fragment>
  );
};

export default Router;
