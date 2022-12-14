import { collection, doc, getDoc, setDoc, getDocs, getFirestore, Firestore } from "firebase/firestore";
import { firebase, fireStore } from "./firebase/fbInit";

const topLevelCol = window.localStorage.getItem('userUID');

const AddMyStock = async(
  stockName:string,
  stockPrice:string|undefined,
  stockCount:string|undefined,
  stockSellOrBuying:string|undefined,
  )=>{
    const db = getFirestore();
    const docRef = doc(db, `${topLevelCol}`, `${stockName}`);
    const docSnap = await getDoc(docRef);
    const averageData = Number(docSnap.data()?.average);
    const buyingCountData = Number(docSnap.data()?.buyingCount);
    const sellCountData = Number(docSnap.data()?.sellCount);
    const totalPriceData:number = Number(docSnap.data()?.total);
    let averagePrice:number = Number(docSnap.data()?.average);
    let buyingCountReduce:number = Number(docSnap.data()?.buyingCount);
    let sellCountReduce:number = Number(docSnap.data()?.sellCount);
    let prevSellPrice:number = Number(docSnap.data()?.prevSell);
    let totalPrice:number = Number(docSnap.data()?.total);
    if (docSnap.exists()) {
      if(stockSellOrBuying === 'buying'){
        const prevStockValue = averageData * buyingCountData;
        const nextStockValue = Number(stockPrice) * Number(stockCount);
        averagePrice = Math.ceil((prevStockValue + nextStockValue) / (buyingCountData + Number(stockCount)));
        buyingCountReduce = buyingCountData + Number(stockCount);
        totalPrice = -(averagePrice*buyingCountReduce)
      } else if(stockSellOrBuying === 'sell'){
        if(buyingCountData >= (sellCountData + Number(stockCount))){
          sellCountReduce = sellCountData + Number(stockCount);
          prevSellPrice = Number(stockPrice);
          totalPrice = totalPriceData + prevSellPrice * sellCountReduce
        } else{
          return alert('보유수량 보다 많은 양을 매도하실 수 없습니다')
        }
      }
    } else {
      if(stockSellOrBuying === 'buying'){
        averagePrice = Math.ceil(Number(stockPrice) * Number(stockCount) / Number(stockCount));
        buyingCountReduce = Number(stockCount);
        sellCountReduce = 0;
        prevSellPrice = 0;
        totalPrice = -(averagePrice*buyingCountReduce)
      }else if(stockSellOrBuying === 'sell'){
       return alert('보유량이 없습니다');
      }
    }
  await setDoc(doc(db, `${topLevelCol}`, `${stockName}`), {
    stockName,
    average : averagePrice,
    buyingCount : buyingCountReduce,
    sellCount : sellCountReduce,
    prevSell : prevSellPrice, 
    total: totalPrice,
  });
}

//컬렉션 전체 문서 가져오기
const getMyStocks = async()=>{
  const db = getFirestore();
  let result:any[] = [];
  const querySnapshot = await getDocs(collection(db, `${topLevelCol}`));
  querySnapshot.docs.forEach((doc) => {result.push(doc.data())});
return result
}

// 단일문서 가져오기
const getMyOnlyOneStock = async()=>{
  const db = getFirestore();
  const docRef = doc(db, `${topLevelCol}`, "삼성화재");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log(docSnap.id, docSnap.data());
    console.log(docSnap.id, docSnap.data().sellPrice);
  } else {
    console.log("No such document!");
  }
}

export {AddMyStock, getMyStocks, getMyOnlyOneStock}