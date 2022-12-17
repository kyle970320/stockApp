import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import SearchBar from '../../components/SearchBar';
import { recommandWord, rerenderList } from '../../recoil/atom';
import styles from './Main.module.css';
import { AddMyStock, returnStock } from '../../service/getStore';
import { async } from 'q';

const MainCalc = () => {
  const stateRecoilStockList = useRecoilValue(recommandWord);
  const setRecoilRerenderList = useSetRecoilState(rerenderList);
  const priceRef = useRef<HTMLInputElement>(null);
  const countRef = useRef<HTMLInputElement>(null);
  const sellOrBuyingRef = useRef<HTMLSelectElement>(null);
  const [stateCalcInput, setCalcInput] = useState<string>('');
  useEffect(() => {
    setCalcInput(stateRecoilStockList.lopr);
  }, [stateRecoilStockList.lopr]);
  const handleSaveButton = async () => {
    if (priceRef.current?.value && countRef.current?.value) {
      if (Number(priceRef.current.value) <= Number(stateRecoilStockList.hipr) && Number(priceRef.current.value) >= Number(stateRecoilStockList.lopr)) {
        const confirm = window.confirm('이대로 저장 하시겠습니까?');
        if (confirm === true) {
          await AddMyStock(
            stateRecoilStockList.itmsNm,
            priceRef.current.value,
            countRef.current.value,
            sellOrBuyingRef.current?.value,
            stateRecoilStockList.hipr,
            stateRecoilStockList.lopr,
          );
          setRecoilRerenderList((prev) => {
            return !prev;
          });
          return [(priceRef.current.value = ''), (countRef.current.value = '')];
        }
      } else {
        alert('고가와 저가 사이의 값만 입력 가능합니다');
        return [(priceRef.current.value = ''), (countRef.current.value = '')];
      }
    } else {
      alert('가격과 수량을 모두 입력해주십시오');
    }
  };
  const handleToPrev = async () => {
    if (window.confirm('직전값으로 되돌리시겠습니까?')) {
      const prevData = JSON.parse(window.sessionStorage.getItem('PrevPrice') || '{}');
      if (window.sessionStorage.getItem('PrevPrice')) {
        returnStock(prevData.stockName);
        setRecoilRerenderList((prev) => {
          return !prev;
        });
      } else {
        alert('이전 값이 존재하지 않습니다');
      }
    }
  };
  return (
    <div className={styles.mainCalc}>
      <SearchBar />
      <p className={styles.explainStock}>
        <span>{stateRecoilStockList.itmsNm}</span> 는 <br />
        <span>{stateRecoilStockList.mrktCtg}</span> 시장에 있으며 <br />
        오늘은 <br />
        <span>{stateRecoilStockList.lopr}</span>원 ~ <span>{stateRecoilStockList.hipr}</span>원 이었습니다.
      </p>
      <div className={styles.sellAndBuying}>
        <p>
          <span>가격 : </span>
          <input
            type="number"
            placeholder="오늘 값들만 입력 가능"
            value={stateCalcInput}
            onChange={(e) => {
              setCalcInput(e.currentTarget.value);
            }}
            ref={priceRef}
          />
        </p>
        <p>
          <span>수량 : </span>
          <input type="number" ref={countRef} />
        </p>
        <div>
          <select ref={sellOrBuyingRef}>
            <option value="buying">매수</option>
            <option value="sell">매도</option>
          </select>
          <button onClick={handleToPrev}>되돌리기</button>
          <button
            onClick={() => {
              handleSaveButton();
            }}
          >
            저장하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainCalc;
