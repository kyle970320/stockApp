import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { getMyStocks } from "../../service/getStore";
import { rerenderList } from "../../recoil/atom";
interface myList {
  stockName: string;
  buyingCount: number;
  sellCount: number;
  average: number;
  prevSell: number;
}

const MainList = () => {
  const [stateStockList, setStockList] = useState<myList[]>([]);
  const stateRecoilRerenderList = useRecoilValue(rerenderList);
  useEffect(() => {
    const CallStockList = async () => {
      const myStockList: any[] = await getMyStocks();
      const filterMyStockList = myStockList.filter((el) => {
        return el.stockName;
      });
      setStockList(filterMyStockList);
    };
    CallStockList();
  }, [stateRecoilRerenderList]);
  return (
    <div>
      내가 산 목록입니다.
      {stateStockList &&
        stateStockList.map((listItem) => {
          return (
            <React.Fragment key={listItem.stockName}>
              <p>종목명 : {listItem.stockName}</p>
              <p>누적 매매량 : {listItem.buyingCount}</p>
              <p>누적 매도량 : {listItem.sellCount}</p>
              <p>최근 판매 가격 : {listItem.prevSell}</p>
              <p>평균단가 : {listItem.average}</p>
            </React.Fragment>
          );
        })}
      <button>안녕하세요</button>
    </div>
  );
};

export default MainList;
