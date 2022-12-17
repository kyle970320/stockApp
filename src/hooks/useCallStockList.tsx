import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { rerenderList } from '../recoil/atom';
import { getMyStocks } from '../service/getStore';
import { myList } from '../types/interface';
const useCallStockList = (boolean: boolean) => {
  const [stateStockList, setStockList] = useState<myList[]>([]);
  const [stateOrderList, setOrderList] = useState<myList[]>([]);
  const stateRecoilRerenderList = useRecoilValue(rerenderList);
  useEffect(() => {
    const CallStockList = async () => {
      const myStockList: Array<myList> = await getMyStocks();
      const filterMyStockList = myStockList
        .filter((el) => {
          return !el.stockName === boolean;
        })
        .sort((a, b) => {
          return b.누적구매액 - a.누적구매액;
        });

      const filterMyStockListCopy = [...filterMyStockList];
      const orderList = filterMyStockListCopy;
      orderList.length > 6 ? orderList.splice(6, orderList.length - 1) : orderList;
      setOrderList(orderList);
      setStockList(filterMyStockList);
    };
    CallStockList();
  }, [stateRecoilRerenderList]);
  return [stateStockList, stateOrderList];
};

export default useCallStockList;
