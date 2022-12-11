import React from "react";
import { Link } from "react-router-dom";

const StockMain = () => {
  return (
    <div>
      <div></div>
      <div></div>
      <div></div>
      <Link to={"/calc"}>자세히보기 이동</Link>
    </div>
  );
};

export default StockMain;
