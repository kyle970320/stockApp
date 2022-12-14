import React from "react";
import "./App.css";
import { AxiosApiLikeItemQuery } from "./service/axios/AxiosApi";
import { analytics } from "./service/firebase/fbInit";
function App() {
  const myData = async () => {
    const result = await AxiosApiLikeItemQuery("하이트", "20221201");
    console.log(result);
  };
  // console.log(analytics);
  const firebaseLogin = analytics;

  return (
    <div className="App">
      <button onClick={myData}>hihi</button>
      <span
        onClick={() => {
          console.log(window.confirm("1이 맞습니까?"));
        }}
      >
        안녕하세요
      </span>
    </div>
  );
}

export default App;
