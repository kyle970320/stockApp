import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { getMyStocks } from "../../service/getStore";
import { rerenderList } from "../../recoil/atom";
import useCallStockList from "../../hooks/useCallStockList";
import styles from "./Main.module.css";
const MainList = () => {
  const [stateStockList] = useCallStockList(false);
  return (
    <div className={styles.mainList}>
      <ul>
        <li>종목명</li>
        <li>누적매수량</li>
        <li>누적매도량</li>
        <li>최근 판매가격</li>
        <li>평균 구매단가</li>
      </ul>
      {stateStockList &&
        stateStockList.map((listItem) => {
          return (
            <ul key={listItem.stockName}>
              <li>{listItem.stockName}</li>
              <li>{listItem.buyingCount}</li>
              <li>{listItem.sellCount}</li>
              <li>{listItem.prevSell}</li>
              <li>{listItem.buyingAverage}</li>
            </ul>
          );
        })}
    </div>
  );
};

export default MainList;
