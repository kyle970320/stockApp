import React from "react";
import { Link } from "react-router-dom";

const StockMain = () => {
  return (
    <div>
      메인페이지 입니다.
      <Link to={"/calc"}>평단계산 이동</Link>
    </div>
  );
};

export default StockMain;
