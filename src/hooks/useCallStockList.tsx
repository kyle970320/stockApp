import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { rerenderList } from "../recoil/atom";
import { getMyStocks } from "../service/getStore";
interface myList {
  stockName: string;
  buyingAverage: number;
  buyingCount: number;
  sellAverage: number;
  sellCount: number;
  prevSell: number;
  total: number;
  firstName: string;
  lastName: string;
  expectRateReturn: number;
}
const useCallStockList = (boolean: boolean) => {
  const [stateStockList, setStockList] = useState<Array<myList>>([]);
  const stateRecoilRerenderList = useRecoilValue(rerenderList);
  useEffect(() => {
    const CallStockList = async () => {
      const myStockList: Array<myList> = await getMyStocks();
      const filterMyStockList = myStockList.filter((el) => {
        return !el.stockName === boolean;
      });
      setStockList(filterMyStockList);
    };
    CallStockList();
  }, [stateRecoilRerenderList]);
  return [stateStockList];
};

export default useCallStockList;
