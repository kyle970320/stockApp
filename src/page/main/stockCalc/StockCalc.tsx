import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useDebounce from "../../../hooks/useDebounce";
import AxiosApiItemQuery from "../../../utils/axios/AxiosApiItemQuery";
import AxiosApiLikeItemQuery from "../../../utils/axios/AxiosApiLikeItemQuery";

interface stockData {
  itmsNm: string;
  mrktCtg: string;
  hipr: string;
  lopr: string;
  isinCd: string;
}
const StockCalc = () => {
  const [stateStockName, setStockName] = useState<string>("");
  const [stateStockList, setStockList] = useState<stockData>();
  const [stateSearchValue, setSearchValue] = useState<string>("");
  const [stateRecommandWord, setRecommandWord] = useState<[]>([]);
  const [debounce] = useDebounce(stateStockName, 200);
  const date = new Date();
  let updateDate = "";
  if (date.getDate() - 3 <= 9) {
    updateDate =
      date.getFullYear() +
      "" +
      (date.getMonth() + 1) +
      "0" +
      (date.getDate() - 3);
  } else {
    updateDate =
      date.getFullYear() + "" + (date.getMonth() + 1) + (date.getDate() - 3);
  }
  useEffect(() => {
    const myData = async () => {
      if (debounce.length > 0) {
        const result = await AxiosApiLikeItemQuery(debounce, updateDate);
        const resultItem = result.data.response.body.items.item;
        setRecommandWord(resultItem);
      } else {
        setRecommandWord([]);
      }
    };
    myData();
  }, [debounce]);

  const enterKeyDownHandler = async () => {
    const result = await AxiosApiItemQuery(stateSearchValue, updateDate);
    const resultItem = result.data.response.body?.items.item;
    setRecommandWord([]);
    setStockList(resultItem[0]);
  };
  console.log(stateStockList);

  return (
    <React.Fragment>
      <div>
        주식명 :
        <input
          type="search"
          autoComplete="true"
          autoFocus
          value={stateSearchValue}
          // list="searchList"
          onChange={(e) => {
            setSearchValue(e.currentTarget.value);
            setStockName(e.currentTarget.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              enterKeyDownHandler();
              console.log(stateRecommandWord);
            }
          }}
        />
      </div>
      <ul>
        {stateRecommandWord &&
          stateRecommandWord.map<string>((word: any): any => {
            return (
              <li
                key={Math.random()}
                value={word}
                onClick={() => {
                  setRecommandWord([]);
                  setStockList(word);
                  setSearchValue(word.itmsNm);
                }}
              >
                {word.itmsNm}
              </li>
            );
          })}
      </ul>
      {stateStockList && (
        <div>
          <p>종목명 : {stateStockList.itmsNm}</p>
          <p>시장 구분 : {stateStockList.mrktCtg}</p>
          <p>고가 : {stateStockList.hipr}</p>
          <p>저가 : {stateStockList.lopr}</p>
          <Link to={`/calc/:${stateStockList.isinCd}`} state={stateStockList}>
            {stateStockList.itmsNm}더 자세히 보고 매매하기
          </Link>
        </div>
      )}
    </React.Fragment>
  );
};

export default StockCalc;
