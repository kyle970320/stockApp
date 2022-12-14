import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import SearchBar from "../../components/SearchBar";
import { recommandWord } from "../../recoil/atom";

const StockList = () => {
  const [stateRecoilStockList] = useRecoilState(recommandWord);
  return (
    <React.Fragment>
      <SearchBar />
      {stateRecoilStockList.itmsNm && (
        <div>
          <p>종목명 : {stateRecoilStockList.itmsNm}</p>
          <p>시장 구분 : {stateRecoilStockList.mrktCtg}</p>
          <p>고가 : {stateRecoilStockList.hipr}</p>
          <p>저가 : {stateRecoilStockList.lopr}</p>
          <Link
            to={`/stocklist/:${stateRecoilStockList.isinCd}`}
            state={stateRecoilStockList}
          >
            {stateRecoilStockList.itmsNm} 더 자세히 보기
          </Link>
        </div>
      )}
    </React.Fragment>
  );
};

export default StockList;
