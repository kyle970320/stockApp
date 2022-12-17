import { collection, doc, getDoc, setDoc, getDocs, getFirestore, query, orderBy, limit, updateDoc, deleteDoc } from 'firebase/firestore';

const AddMyStock = async (
  stockName: string,
  stockPrice: string | undefined,
  stockCount: string | undefined,
  stockSellOrBuying: string | undefined,
  hipr: string,
  lopr: string,
) => {
  const topLevelCol = window.sessionStorage.getItem('userUID');
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
  const prevSellPriceData: number = Number(docSnap.data()?.prevSellPrice);
  const prevSellCountData: number = Number(docSnap.data()?.prevSellCount);
  const prevBuyingPriceData: number = Number(docSnap.data()?.prevBuyingPrice);
  const prevBuyingCountData: number = Number(docSnap.data()?.prevBuyingCount);
  let buyingAveragePrice: number = Number(docSnap.data()?.buyingAverage);
  let buyingCountReduce: number = Number(docSnap.data()?.buyingCount);
  let sellAveragePrice = Number(docSnap.data()?.sellAverage);
  let sellCountReduce: number = Number(docSnap.data()?.sellCount);
  let prevSellPrice: number = Number(docSnap.data()?.prevSellPrice);
  let prevSellCount: number = Number(docSnap.data()?.prevSellCount);
  let prevBuyingPrice: number = Number(docSnap.data()?.prevBuyingPrice);
  let prevBuyingCount: number = Number(docSnap.data()?.prevBuyingCount);
  let totalPrice: number = Number(docSnap.data()?.total);
  let allBuyingPrice: number = Number(docSnap.data()?.누적구매액);
  let allSellPrice: number = Number(docSnap.data()?.누적판매액);
  let expectRateOfReturn: number = Number(docSnap.data()?.expectRateReturn);
  if (docSnap.exists()) {
    if (stockSellOrBuying === 'buying') {
      const prevBuyingValue = buyingAverageData * buyingCountData;
      const nextBuyingValue = Number(stockPrice) * Number(stockCount);
      buyingAveragePrice = Math.ceil((prevBuyingValue + nextBuyingValue) / (buyingCountData + Number(stockCount)));
      buyingCountReduce = buyingCountData + Number(stockCount);
      prevBuyingPrice = Number(stockPrice);
      prevBuyingCount = Number(stockCount);
      prevSellPrice = prevSellPriceData;
      prevSellCount = prevSellCountData;
      allBuyingPrice = -(buyingAveragePrice * buyingCountReduce);
      totalPrice = -allBuyingPriceData + allSellPriceData - nextBuyingValue;
      expectRateOfReturn = Number(
        (
          ((((Number(hipr) + Number(lopr)) / 2) * buyingCountReduce - buyingAveragePrice * buyingCountReduce) / (buyingAveragePrice * buyingCountReduce)) *
          100
        ).toFixed(2),
      );
    } else if (stockSellOrBuying === 'sell') {
      if (buyingCountData >= sellCountData + Number(stockCount)) {
        const prevSellValue = sellAverageData * sellCountData;
        const nextSellValue = Number(stockPrice) * Number(stockCount);
        sellAveragePrice = Math.ceil((prevSellValue + nextSellValue) / (sellCountData + Number(stockCount)));
        sellCountReduce = sellCountData + Number(stockCount);
        prevSellPrice = Number(stockPrice);
        prevSellCount = Number(stockCount);
        prevBuyingPrice = prevBuyingPriceData;
        prevBuyingCount = prevBuyingCountData;
        allSellPrice = sellAveragePrice * sellCountReduce;
        totalPrice = -allBuyingPriceData + allSellPriceData + nextSellValue;
        expectRateOfReturn = Number(
          (
            ((((Number(hipr) + Number(lopr)) / 2) * buyingCountReduce - buyingAveragePrice * buyingCountReduce) / (buyingAveragePrice * buyingCountReduce)) *
            100
          ).toFixed(2),
        );
      } else {
        return alert('보유수량 보다 많은 양을 매도하실 수 없습니다');
      }
    }
  } else {
    if (stockSellOrBuying === 'buying') {
      buyingAveragePrice = Math.ceil((Number(stockPrice) * Number(stockCount)) / Number(stockCount));
      buyingCountReduce = Number(stockCount);
      sellCountReduce = 0;
      prevSellPrice = 0;
      prevSellCount = 0;
      prevBuyingPrice = Number(stockPrice);
      prevBuyingCount = Number(stockCount);
      sellAveragePrice = 0;
      totalPrice = -(buyingAveragePrice * buyingCountReduce);
      allBuyingPrice = totalPrice;
      allSellPrice = 0;
      expectRateOfReturn = Number(
        (
          ((((Number(hipr) + Number(lopr)) / 2) * buyingCountReduce - buyingAveragePrice * buyingCountReduce) / (buyingAveragePrice * buyingCountReduce)) *
          100
        ).toFixed(2),
      );
    } else if (stockSellOrBuying === 'sell') {
      return alert('보유량이 없습니다');
    }
  }
  const prevSessions = {
    stockName,
    buyingAverage: buyingAverageData,
    buyingCount: buyingCountData,
    sellAverage: sellAverageData,
    sellCount: sellCountData,
    prevSellPrice: prevSellPriceData,
    precSellCount: prevSellCountData,
    prevBuyingPrice: prevBuyingPriceData,
    prevBuyingCount: prevBuyingCountData,
    total: totalPriceData,
    누적구매액: allBuyingPriceData,
    누적판매액: allSellPriceData,
    expectRateReturn: expectRateReturnData,
  };
  window.sessionStorage.setItem('PrevPrice', JSON.stringify(prevSessions));
  await setDoc(doc(db, `${topLevelCol}`, `${stockName}`), {
    stockName,
    buyingAverage: buyingAveragePrice,
    buyingCount: buyingCountReduce,
    sellAverage: sellAveragePrice,
    sellCount: sellCountReduce,
    prevSellPrice: prevSellPrice,
    prevSellCount: prevSellCount,
    prevBuyingPrice: prevBuyingPrice,
    prevBuyingCount: prevBuyingCount,
    total: totalPrice,
    누적구매액: Math.abs(allBuyingPrice),
    누적판매액: allSellPrice,
    expectRateReturn: expectRateOfReturn,
  });
};

//컬렉션 전체 문서 가져오기
const getMyStocks = async () => {
  const topLevelCol = window.sessionStorage.getItem('userUID');
  const db = getFirestore();
  let result: any[] = [];
  const querySnapshot = await getDocs(collection(db, `${topLevelCol}`));
  querySnapshot.docs.forEach((doc) => {
    result.push(doc.data());
  });
  return result;
};

//정렬
const getOrderList = async () => {
  const db = getFirestore();
  const q = query(collection(db, `${window.sessionStorage.getItem('userUID')}`), orderBy('누적구매액', 'desc'), limit(8)); //오름차순
  let result: any[] = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.docs.forEach((doc) => {
    result.push(doc.data());
  });
};

//이전 값 되돌리기
const returnStock = async (stockName: string) => {
  const topLevelCol = window.sessionStorage.getItem('userUID');
  const db = getFirestore();
  const docRef = doc(db, `${topLevelCol}`, `${stockName}`);
  const prevData = JSON.parse(window.sessionStorage.getItem('PrevPrice') || '{}');
  await updateDoc(docRef, prevData);
};

//삭제
const deleteStock = async (stockName: string) => {
  const topLevelCol = window.sessionStorage.getItem('userUID');
  const db = getFirestore();
  await deleteDoc(doc(db, `${topLevelCol}`, `${stockName}`));
};
export { AddMyStock, getMyStocks, getOrderList, returnStock, deleteStock };
