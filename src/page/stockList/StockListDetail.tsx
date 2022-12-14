import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const StockListDetail = () => {
  const stockList = useLocation().state;
  return (
    <div>
      상세페이지 입니다
      <button>안녕</button>
      <p>{stockList.itmsNm}</p>
      <p>{stockList.hipr}</p>
      <p>{stockList.lopr}</p>
    </div>
  );
};

export default StockListDetail;
