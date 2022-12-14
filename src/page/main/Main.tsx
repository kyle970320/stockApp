import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainCalc from "./MainCalc";
import MainCapital from "./mainCapital/MainCapital";
import MainList from "./MainList";

const StockMain = () => {
  return (
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
      <Link to={"/stocklist"}>자세히보기 이동</Link>
    </section>
  );
};

export default StockMain;
