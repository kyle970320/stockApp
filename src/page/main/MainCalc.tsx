import React, { useEffect, useRef, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import SearchBar from "../../components/SearchBar";
import { recommandWord, rerenderList } from "../../recoil/atom";
import {
  AddMyStock,
  getMyOnlyOneStock,
  getMyStocks,
} from "../../service/getStore";

const MainCalc = () => {
  const stateRecoilStockList = useRecoilValue(recommandWord);
  const setRecoilRerenderList = useSetRecoilState(rerenderList);

  const priceRef = useRef<HTMLInputElement>(null);
  const countRef = useRef<HTMLInputElement>(null);
  const sellOrBuyingRef = useRef<HTMLSelectElement>(null);

  const handleClearInput = () => {
    if (priceRef.current && countRef.current) {
      priceRef.current.value = "";
      countRef.current.value = "";
    }
  };

  const handleSaveButton = async () => {
    if (priceRef.current?.value && countRef.current?.value) {
      console.log(priceRef.current.value);
      if (
        Number(priceRef.current.value) <= Number(stateRecoilStockList.hipr) &&
        Number(priceRef.current.value) >= Number(stateRecoilStockList.lopr)
      ) {
        await AddMyStock(
          stateRecoilStockList.itmsNm,
          priceRef.current?.value,
          countRef.current?.value,
          sellOrBuyingRef.current?.value
        );
        setRecoilRerenderList((prev) => {
          return prev + 1;
        });
      } else {
        alert("고가와 저가 사이의 값만 입력 가능합니다");
      }
    } else {
      alert("가격과 수량을 모두 입력해주십시오");
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
        가격 : <input type="number" ref={priceRef} />
        / 수량 : <input type="number" ref={countRef} />
        <select ref={sellOrBuyingRef}>
          <option value="buying">매매</option>
          <option value="sell">매도</option>
        </select>
      </p>

      <button
        onClick={() => {
          handleClearInput();
        }}
      >
        지우기
      </button>

      <button
        onClick={() => {
          getMyOnlyOneStock();
        }}
      >
        확인하기
      </button>

      <button
        onClick={() => {
          handleSaveButton();
        }}
      >
        저장하기
      </button>
    </div>
  );
};

export default MainCalc;
