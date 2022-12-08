import axios from "axios";

const AxiosApi = async(word:string) => {
  const apiData = await axios.get(
    `http://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1/getFoodNtrItdntList1?ServiceKey=g4VOdRGXDRyXBvs%2FYEYpLGMnX%2BOQE1wfNEJipSDMlweYUrYOwCO8hdh261HHPkFDbvSkVyRE388W0q84%2BfPZHw%3D%3D&desc_kor=${word}&numOfRows=10&type=json`,
    {
      headers:{
        "Content-Type": "application/json"
      }
    }
  )
  return apiData
};

export default AxiosApi;
