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
    `https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=g4VOdRGXDRyXBvs%2FYEYpLGMnX%2BOQE1wfNEJipSDMlweYUrYOwCO8hdh261HHPkFDbvSkVyRE388W0q84%2BfPZHw%3D%3D&numOfRows=10&pageNo=1&resultType=json&basDt=${date}&itmsNm=${word}`,
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
    `https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=g4VOdRGXDRyXBvs%2FYEYpLGMnX%2BOQE1wfNEJipSDMlweYUrYOwCO8hdh261HHPkFDbvSkVyRE388W0q84%2BfPZHw%3D%3D&numOfRows=10&pageNo=1&resultType=json&basDt=${date}&likeItmsNm=${word}`,
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
    `https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=g4VOdRGXDRyXBvs%2FYEYpLGMnX%2BOQE1wfNEJipSDMlweYUrYOwCO8hdh261HHPkFDbvSkVyRE388W0q84%2BfPZHw%3D%3D&numOfRows=31&pageNo=1&resultType=json&likeBasDt=${date}&itmsNm=${word}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return apiData;
};
const AxiosApiNews = async (utf8: string) => {
  const id = "ZeA7avlaUaZEWPS8ANP0";
  const password = "zAeGCWaHni";
  const apiData = await axios.get(
    `/api/v1/search/news.json?query=${utf8}&display=15&start=1&sort=date`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-Naver-Client-Id": id,
        "X-Naver-Client-Secret": password,
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
