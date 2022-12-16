import axios from "axios";
const customAxios = axios.create({
  baseURL:
    "https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});
const AxiosApiItemQuery = async (word: string, date: string) => {
  const apiData = await axios.get(
    `https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=${process.env.REACT_APP_STOCK_KEY}&numOfRows=10&pageNo=1&resultType=json&basDt=${date}&itmsNm=${word}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return apiData;
};

const AxiosApiLikeItemQuery = async (word: string, date: string) => {
  const apiData = await axios.get(
    `https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=${process.env.REACT_APP_STOCK_KEY}&numOfRows=10&pageNo=1&resultType=json&basDt=${date}&likeItmsNm=${word}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return apiData;
};

const AxiosApiLikeDateQuery = async (word: string, date: string) => {
  const apiData = await axios.get(
    `https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=${process.env.REACT_APP_STOCK_KEY}&numOfRows=31&pageNo=1&resultType=json&likeBasDt=${date}&itmsNm=${word}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return apiData;
};
const AxiosApiNews = async (utf8: string) => {
  const id = process.env.REACT_APP_NAVER_ID;
  const password = process.env.REACT_APP_NAVER_KEY;
  const apiData = await axios.get(
    `/api/v1/search/news.json?query=${utf8}&display=15&start=1&sort=date`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-Naver-Client-Id": "ZeA7avlaUaZEWPS8ANP0",
        "X-Naver-Client-Secret": "zAeGCWaHni",
      },
    }
  );
  return apiData;
};
export {
  AxiosApiItemQuery,
  AxiosApiLikeItemQuery,
  AxiosApiLikeDateQuery,
  AxiosApiNews,
};
