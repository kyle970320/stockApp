import {
  collection,
  doc,
  getDoc,
  setDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";

const AddMyStock = async (
  stockName: string,
  stockPrice: string | undefined,
  stockCount: string | undefined,
  stockSellOrBuying: string | undefined,
  hipr: string,
  lopr: string
) => {
  const topLevelCol = window.sessionStorage.getItem("userUID");
  const db = getFirestore();
  const docRef = doc(db, `${topLevelCol}`, `${stockName}`);
  const docSnap = await getDoc(docRef);
  const buyingAverageData = Number(docSnap.data()?.buyingAverage);
  const sellAverageData = Number(docSnap.data()?.sellAverage);
  const buyingCountData = Number(docSnap.data()?.buyingCount);
  const sellCountData = Number(docSnap.data()?.sellCount);
  const totalPriceData: number = Number(docSnap.data()?.total);
  const allBuyingPriceData: number = Number(docSnap.data()?.누적구매액);
  const allSellPriceData: number = Number(docSnap.data()?.누적판매액);
  const expectRateReturnData: number = Number(docSnap.data()?.expectRateReturn);
  let buyingAveragePrice: number = Number(docSnap.data()?.buyingAverage);
  let buyingCountReduce: number = Number(docSnap.data()?.buyingCount);
  let sellAveragePrice = Number(docSnap.data()?.sellAverage);
  let sellCountReduce: number = Number(docSnap.data()?.sellCount);
  let prevSellPrice: number = Number(docSnap.data()?.prevSell);
  let totalPrice: number = Number(docSnap.data()?.total);
  let allBuyingPrice: number = Number(docSnap.data()?.누적구매액);
  let allSellPrice: number = Number(docSnap.data()?.누적판매액);
  let expectRateOfReturn: number = Number(docSnap.data()?.expectRateReturn);
  if (docSnap.exists()) {
    if (stockSellOrBuying === "buying") {
      const prevBuyingValue = buyingAverageData * buyingCountData;
      const nextBuyingValue = Number(stockPrice) * Number(stockCount);
      buyingAveragePrice = Math.ceil(
        (prevBuyingValue + nextBuyingValue) /
          (buyingCountData + Number(stockCount))
      );
      buyingCountReduce = buyingCountData + Number(stockCount);
      allBuyingPrice = -(buyingAveragePrice * buyingCountReduce);
      totalPrice = -allBuyingPriceData + allSellPriceData - nextBuyingValue;
      expectRateOfReturn = Number(
        (
          ((((Number(hipr) + Number(lopr)) / 2) * buyingCountReduce -
            buyingAveragePrice * buyingCountReduce) /
            (buyingAveragePrice * buyingCountReduce)) *
          100
        ).toFixed(2)
      );
    } else if (stockSellOrBuying === "sell") {
      if (buyingCountData >= sellCountData + Number(stockCount)) {
        const prevSellValue = sellAverageData * sellCountData;
        const nextSellValue = Number(stockPrice) * Number(stockCount);
        sellAveragePrice = Math.ceil(
          (prevSellValue + nextSellValue) / (sellCountData + Number(stockCount))
        );
        sellCountReduce = sellCountData + Number(stockCount);
        prevSellPrice = Number(stockPrice);
        allSellPrice = sellAveragePrice * sellCountReduce;
        totalPrice = -allBuyingPriceData + allSellPriceData + nextSellValue;
        expectRateOfReturn = Number(
          (
            ((((Number(hipr) + Number(lopr)) / 2) * buyingCountReduce -
              buyingAveragePrice * buyingCountReduce) /
              (buyingAveragePrice * buyingCountReduce)) *
            100
          ).toFixed(2)
        );
      } else {
        return alert("보유수량 보다 많은 양을 매도하실 수 없습니다");
      }
    }
  } else {
    if (stockSellOrBuying === "buying") {
      buyingAveragePrice = Math.ceil(
        (Number(stockPrice) * Number(stockCount)) / Number(stockCount)
      );
      buyingCountReduce = Number(stockCount);
      sellCountReduce = 0;
      prevSellPrice = 0;
      sellAveragePrice = 0;
      totalPrice = -(buyingAveragePrice * buyingCountReduce);
      allBuyingPrice = totalPrice;
      allSellPrice = 0;
      expectRateOfReturn = Number(
        (
          ((((Number(hipr) + Number(lopr)) / 2) * buyingCountReduce -
            buyingAveragePrice * buyingCountReduce) /
            (buyingAveragePrice * buyingCountReduce)) *
          100
        ).toFixed(2)
      );
    } else if (stockSellOrBuying === "sell") {
      return alert("보유량이 없습니다");
    }
  }
  await setDoc(doc(db, `${topLevelCol}`, `${stockName}`), {
    stockName,
    buyingAverage: buyingAveragePrice,
    buyingCount: buyingCountReduce,
    sellAverage: sellAveragePrice,
    sellCount: sellCountReduce,
    prevSell: prevSellPrice,
    total: totalPrice,
    누적구매액: Math.abs(allBuyingPrice),
    누적판매액: allSellPrice,
    expectRateReturn: expectRateOfReturn,
  });
};

//컬렉션 전체 문서 가져오기
const getMyStocks = async () => {
  const topLevelCol = window.sessionStorage.getItem("userUID");
  const db = getFirestore();
  let result: any[] = [];
  const querySnapshot = await getDocs(collection(db, `${topLevelCol}`));
  querySnapshot.docs.forEach((doc) => {
    result.push(doc.data());
  });
  return result;
};

export { AddMyStock, getMyStocks };
