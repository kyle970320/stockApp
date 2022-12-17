import { atom } from 'recoil';
import { stockData } from '../types/interface';
const recommandWord = atom({
  key: 'recommandWord',
  default: {} as stockData,
});
const rerenderList = atom({
  key: 'rerenderList',
  default: false,
});

export { recommandWord, rerenderList };
