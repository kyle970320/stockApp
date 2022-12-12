import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import useDebounce from "../hooks/useDebounce";
import { recommandWord } from "../recoil/atom";
import {
  AxiosApiItemQuery,
  AxiosApiLikeItemQuery,
} from "../utils/axios/AxiosApi";
const SearchBar = () => {
  const [stateRecoilStockList, setRecoilStockList] =
    useRecoilState(recommandWord);
  const [stateSearchValue, setSearchValue] = useState<string>("");
  const [stateRecommandWord, setRecommandWord] = useState<[]>([]);
  const [debounce] = useDebounce(stateSearchValue, 150);
  const date = new Date();
  let updateDate = "";
  if (date.getDate() - 5 <= 9) {
    updateDate =
      date.getFullYear() +
      "" +
      (date.getMonth() + 1) +
      "0" +
      (date.getDate() - 5);
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
  const handleEnterKeyDown = async () => {
    const result = await AxiosApiItemQuery(stateSearchValue, updateDate);
    const resultItem = result.data.response.body?.items.item;
    setRecommandWord([]);
    setSearchValue("");
    setRecoilStockList(resultItem[0]);
  };
  const handleSearchWordClick = (word: any) => {
    setRecommandWord([]);
    setSearchValue("");
    setRecoilStockList(word);
  };
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
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleEnterKeyDown();
            }
          }}
        />
      </div>
      <ul>
        {stateRecommandWord.length > 0 &&
          stateRecommandWord.map<string>((word: any): any => {
            return (
              <li
                key={Math.random()}
                value={word}
                onClick={() => {
                  handleSearchWordClick(word);
                }}
              >
                {word.itmsNm}
              </li>
            );
          })}
      </ul>
    </React.Fragment>
  );
};

export default SearchBar;
