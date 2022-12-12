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
export {recommandWord}
