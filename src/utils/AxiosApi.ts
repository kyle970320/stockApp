import axios from "axios";

const AxiosApi = async(word:string) => {
  const apiData = await axios.get(
    `https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=g4VOdRGXDRyXBvs%2FYEYpLGMnX%2BOQE1wfNEJipSDMlweYUrYOwCO8hdh261HHPkFDbvSkVyRE388W0q84%2BfPZHw%3D%3D&numOfRows=10&pageNo=2&resultType=json&likeItmsNm=${word}`,
    {
      headers:{
        "Content-Type": "application/json"
      }
    }
  )
  return apiData
};

export default AxiosApi;
