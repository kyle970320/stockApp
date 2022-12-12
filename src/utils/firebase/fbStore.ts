import { collection, doc, setDoc, getFirestore, Firestore } from "firebase/firestore";
import { firebase, fireStore } from "./fbInit";

//문서 추가
const AddMyStock = async(
  stockName:string,
  sellPrice:string|undefined,
  sellCount:string|undefined,
  buyingPrice:string|undefined,
  buyingCount:string|undefined
  )=>{
  const topLevelCol = window.localStorage.getItem('userUID')
  const db = getFirestore();
  await setDoc(doc(db, `${topLevelCol}`, `${stockName}`), {
    stockName,
    sellPrice,
    sellCount,
    buyingPrice,
    buyingCount
  });
}

export {AddMyStock}