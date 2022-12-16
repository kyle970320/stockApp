import axios from 'axios';
const customAxios = axios.create({
  baseURL: 'https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService',
  timeout: 1000,
  headers:{
    "Content-Type": "application/json"
  },
})
const AxiosApiItemQuery = async(word:string, date:string) => {
  const apiData = await customAxios.get('getStockPriceInfo',{
    params: {
      serviceKey: 'g4VOdRGXDRyXBvs%2FYEYpLGMnX%2BOQE1wfNEJipSDMlweYUrYOwCO8hdh261HHPkFDbvSkVyRE388W0q84%2BfPZHw%3D%3D',
      numOfRows: '10',
      pageNo: '1',
      resultType: 'json',
      basDt: `${date}`,
      itmsNm:`${word}`,
    },
  }
    // `?serviceKey=g4VOdRGXDRyXBvs%2FYEYpLGMnX%2BOQE1wfNEJipSDMlweYUrYOwCO8hdh261HHPkFDbvSkVyRE388W0q84%2BfPZHw%3D%3D&numOfRows=10&pageNo=1&resultType=json&basDt=${date}&itmsNm=${word}`,
  )
  return apiData
};

const AxiosApiLikeItemQuery = async(word:string, date:string) => {
  const apiData = await customAxios.get('getStockPriceInfo',{
    params: {
      serviceKey: 'g4VOdRGXDRyXBvs%2FYEYpLGMnX%2BOQE1wfNEJipSDMlweYUrYOwCO8hdh261HHPkFDbvSkVyRE388W0q84%2BfPZHw%3D%3D',
      numOfRows: '10',
      pageNo: '1',
      resultType: 'json',
      basDt: `${date}`,
      likeItmsNm:`${word}`,
    },
  }
    // `?serviceKey=g4VOdRGXDRyXBvs%2FYEYpLGMnX%2BOQE1wfNEJipSDMlweYUrYOwCO8hdh261HHPkFDbvSkVyRE388W0q84%2BfPZHw%3D%3D&numOfRows=10&pageNo=1&resultType=json&basDt=${date}&likeItmsNm=${word}`,
  )
  return apiData
};

export {AxiosApiItemQuery,AxiosApiLikeItemQuery};
