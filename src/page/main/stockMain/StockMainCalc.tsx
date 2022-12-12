import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import SearchBar from "../../../components/SearchBar";
import { recommandWord } from "../../../recoil/atom";
import { AddMyStock } from "../../../utils/firebase/fbStore";

interface stockData {
  itmsNm: string;
  mrktCtg: string;
  hipr: string;
  lopr: string;
  isinCd: string;
}
const StockMainCalc = () => {
  const [stateRecoilStockList, setRecoilStockList] =
    useRecoilState(recommandWord);
  const sellPrice = useRef<HTMLInputElement>(null);
  const sellCount = useRef<HTMLInputElement>(null);
  const buyingPrice = useRef<HTMLInputElement>(null);
  const buyingCount = useRef<HTMLInputElement>(null);
  // const sellAndBuyingPrice = () => {
  //   if (Number()) {
  //   }
  // };
  const handleClearInput = () => {
    if (buyingPrice.current && sellPrice.current) {
      sellPrice.current.value = "";
      buyingPrice.current.value = "";
    }
  };
  return (
    <div>
      <SearchBar />
      <p>종목명 : {stateRecoilStockList.itmsNm}</p>
      <p>시장 분류 : {stateRecoilStockList.mrktCtg}</p>
      <p>고가 : {stateRecoilStockList.hipr}</p>
      <p>저가 : {stateRecoilStockList.lopr}</p>
      <p>
        매도가격 : <input type="number" ref={sellPrice} />
        / 매도수량 : <input type="number" ref={sellCount} />
      </p>
      <p>
        매매가격 : <input type="number" ref={buyingPrice} />
        / 매매수량 : <input type="number" ref={buyingCount} />
      </p>
      <p>총가격 : </p>
      <button
        onClick={() => {
          handleClearInput();
        }}
      >
        지우기
      </button>
      <button
        onClick={() => {
          console.log(stateRecoilStockList.itmsNm);
          console.log(sellPrice);
          console.log(sellCount);
          console.log(buyingPrice);
          console.log(buyingPrice);
        }}
      >
        확인하기
      </button>
      <button
        onClick={() => {
          AddMyStock(
            stateRecoilStockList.itmsNm,
            sellPrice.current?.value,
            sellCount.current?.value,
            buyingPrice.current?.value,
            buyingPrice.current?.value
          );
        }}
      >
        저장하기
      </button>
    </div>
  );
};

export default StockMainCalc;
