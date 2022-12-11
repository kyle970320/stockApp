import { collection, doc, setDoc, getFirestore } from "firebase/firestore";

//중첩 콜렉션 추가
const AddMyStock = async(stockName:string,sellPrice:number,sellCount:number,buyingPrice:number,buyingCount:number)=>{
  const data = {
    stockName,
    sellPrice,
    sellCount,
    buyingPrice,
    buyingCount
  }
  const db = getFirestore();
  const refCollection = doc(collection(db,"student/docID/friends"));
  await setDoc(refCollection, data);
}