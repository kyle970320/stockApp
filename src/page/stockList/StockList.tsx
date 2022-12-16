import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import SearchBar from "../../components/SearchBar";
import { recommandWord } from "../../recoil/atom";
import { convertUnit } from "../../utils/convert";
import { colorStyle } from "../../utils/inlineStyle";
import styles from "./StockList.module.css";

const StockList = () => {
  const [stateRecoilStockList] = useRecoilState(recommandWord);
  return (
    <section className={styles.stockList}>
      <SearchBar />
      {stateRecoilStockList.itmsNm && (
        <div className={styles.stockListDetailDiv}>
          <dl>
            <dt>종목명</dt>
            <dd>{stateRecoilStockList.itmsNm}</dd>
            <dt>ISIN코드</dt>
            <dd>{stateRecoilStockList.isinCd}</dd>
            <dt>시장 구분</dt>
            <dd>{stateRecoilStockList.mrktCtg}</dd>
            <dt>고가</dt>
            <dd>{convertUnit(stateRecoilStockList.hipr)}원</dd>
            <dt>저가</dt>
            <dd>{convertUnit(stateRecoilStockList.lopr)}원</dd>
            <dt>종가</dt>
            <dd>{convertUnit(stateRecoilStockList.clpr)}원</dd>
          </dl>
          <dl>
            <dt>금일 등락</dt>
            <dd
              style={
                Number(stateRecoilStockList.vs) < 0
                  ? colorStyle.minus
                  : colorStyle.plus
              }
            >
              {stateRecoilStockList.vs}
            </dd>
            <dt>금일 등락률</dt>
            <dd
              style={
                Number(stateRecoilStockList.fltRt) < 0
                  ? colorStyle.minus
                  : colorStyle.plus
              }
            >
              {stateRecoilStockList.fltRt}%
            </dd>
            <dt>거래량</dt>
            <dd>{convertUnit(stateRecoilStockList.trqu)}회</dd>
            <dt>거래대금</dt>
            <dd>{convertUnit(stateRecoilStockList.trPrc)}원</dd>
            <dt>상장주식수</dt>
            <dd>{convertUnit(stateRecoilStockList.lstgStCnt)}원</dd>
            <dt>시가 총액</dt>
            <dd>{convertUnit(stateRecoilStockList.mrktTotAmt)}원</dd>
          </dl>
        </div>
      )}
    </section>
  );
};

export default StockList;
