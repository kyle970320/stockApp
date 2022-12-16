import {atom} from 'recoil'
interface stockData {
  itmsNm: string;
  mrktCtg: string;
  hipr: string;
  lopr: string;
  isinCd: string;
  dpr: string;
  mkp: string;
  basDt: string;
  clpr: string;
  fltRt: string;
  lstgStCnt: string;
  mrktTotAmt: string;
  srtnCd: string;
  trPrc: string;
  trqu: string;
  vs: string;
}
const recommandWord = atom({
  key: 'recommandWord',
  default: <stockData>{},
});
const rerenderList = atom({
  key : 'rerenderList',
  default: false,
})

export {recommandWord, rerenderList}
