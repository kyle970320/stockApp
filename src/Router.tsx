import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Layout from './components/Layout';
import Login from './page/auth/Login/Login';
import Sign from './page/auth/sign/Sign';
import Main from './page/main/Main';
import StockList from './page/stockList/StockList';
import { analytics } from './service/firebase/fbInit';
import { Reset } from 'styled-reset';
import './globalStyle.css';
import MyStockDetail from './page/myStockDetail/MyStockDetail';
import StockNews from './page/stockNews/StockNews';
import Error404 from './components/Error404';
const firebase = analytics;

const Router = () => {
  const sessionStorageUserUID = window.sessionStorage.getItem('userUID');
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (sessionStorageUserUID && location.pathname === '/') {
      navigate('/mystock/main');
    } else if (!sessionStorageUserUID && location.pathname.includes('mystock')) {
      navigate('/');
    }
  }, [location.pathname]);
  return (
    <React.Fragment>
      <Reset />
      <RecoilRoot>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/mystock" element={<Layout />}>
            <Route path="main" element={<Main />} />
            <Route path="assets" element={<MyStockDetail />} />
            <Route path="stocklist" element={<StockList />} />
            <Route path="stocknews" element={<StockNews />} />
          </Route>
        </Routes>
      </RecoilRoot>
    </React.Fragment>
  );
};

export default Router;
