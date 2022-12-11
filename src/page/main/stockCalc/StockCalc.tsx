import React, { useEffect, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import AxiosApiItemQuery from "../../../utils/axios/AxiosApiItemQuery";
import AxiosApiLikeItemQuery from "../../../utils/axios/AxiosApiLikeItemQuery";

interface stockData {
  itmsNm: string;
  mrktCtg: string;
  hipr: string;
  lopr: string;
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
    const resultItem = result.data.response.body.items.item;
    setStockList(resultItem[0]);
    setRecommandWord([]);
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
          <p>{stateStockList.itmsNm}</p>
          <p>{stateStockList.mrktCtg}</p>
          <p>{stateStockList.hipr}</p>
          <p>{stateStockList.lopr}</p>
        </div>
      )}
    </React.Fragment>
  );
};

export default StockCalc;
