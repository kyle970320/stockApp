import React from "react";
import { Link } from "react-router-dom";
import StockMainCalc from "./StockMainCalc";
import StockMainMyCapital from "./StockMainMyCapital";
import StockMainMyList from "./StockMainMyList";

const StockMain = () => {
  return (
    <section>
      <StockMainMyCapital />
      <br />
      <br />
      <StockMainCalc />
      <br />
      <br />
      <StockMainMyList />
      <br />
      <br />
      <Link to={"/list"}>자세히보기 이동</Link>
    </section>
  );
};

export default StockMain;
