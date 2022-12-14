import {atom} from 'recoil'
interface stockData {
  itmsNm: string;
  mrktCtg: string;
  hipr: string;
  lopr: string;
  isinCd: string;
}
const recommandWord = atom({
  key: 'recommandWord',
  default: <stockData>{},
});
const rerenderList = atom({
  key : 'rerenderList',
  default: 0,
})

export {recommandWord, rerenderList}
