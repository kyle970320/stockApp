import React, { useState } from "react";
import useCallStockList from "../hooks/useCallStockList";
import useLogin from "../hooks/useLogin";

const Header = () => {
  const { Logout: LogoutFirebase } = useLogin();
  const [stateStockList] = useCallStockList(true);
  return (
    <header>
      {stateStockList.length >= 1 && (
        <p>
          환영합니다! {stateStockList[0].lastName}
          {stateStockList[0].firstName}님
        </p>
      )}
      <button onClick={LogoutFirebase}>로그아웃</button>
    </header>
  );
};

export default Header;
