export interface myList {
  stockName: string;
  buyingAverage: number;
  buyingCount: number;
  sellAverage: number;
  sellCount: number;
  prevSell: number;
  total: number;
  firstName: string;
  lastName: string;
  expectRateReturn: number;
  누적구매액: number;
  누적판매액: number;
}

export interface stockData {
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
