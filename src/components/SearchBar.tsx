import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import useDebounce from '../hooks/useDebounce';
import { recommandWord } from '../recoil/atom';
import styles from './Layout.module.css';
import { AxiosApiItemQuery, AxiosApiLikeItemQuery } from '../service/axios/AxiosApi';
import { updateDate } from '../utils/convert';
import { stockData } from '../types/interface';
const SearchBar = () => {
  const [stateRecoilStockList, setRecoilStockList] = useRecoilState(recommandWord);
  const [stateSearchValue, setSearchValue] = useState<string>('');
  const [stateRecommandWord, setRecommandWord] = useState<[]>([]);
  const [debounce] = useDebounce(stateSearchValue, 150);

  useEffect(() => {
    const myData = async () => {
      if (debounce.length > 0) {
        const result = await AxiosApiLikeItemQuery(debounce, updateDate);
        const resultItem = result.data.response.body?.items.item;
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
    if (resultItem.length >= 1) {
      setRecommandWord([]);
      setSearchValue('');
      setRecoilStockList(resultItem[0]);
    } else {
      alert('일치하는 종목이 없습니다.');
      setRecommandWord([]);
      setSearchValue('');
      setRecoilStockList({} as stockData);
    }
  };
  const handleSearchWordClick = (word: any) => {
    setRecommandWord([]);
    setSearchValue('');
    setRecoilStockList(word);
  };
  return (
    <div className={styles.searchBar}>
      <input
        type="search"
        autoComplete="true"
        placeholder="주식명을 입력하세요"
        autoFocus
        value={stateSearchValue}
        // list="searchList"
        onChange={(e) => {
          setSearchValue(e.currentTarget.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleEnterKeyDown();
          }
        }}
      />
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
    </div>
  );
};

export default SearchBar;
