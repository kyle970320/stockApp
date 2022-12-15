import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import MainCalc from "./MainCalc";
import MainCapital from "./mainCapital/MainCapital";
import MainList from "./MainList";

const StockMain = () => {
  return (
    <React.Fragment>
      <section>
        <MainCapital />
        <br />
        <br />
        <MainCalc />
        <br />
        <br />
        <MainList />
        <br />
        <br />
        <Link to={"/mystock/stocklist"}>자세히보기 이동</Link>
      </section>
    </React.Fragment>
  );
};

export default StockMain;
