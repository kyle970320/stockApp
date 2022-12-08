import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [stateLoginEmail, setLoginEmail] = useState<string>("");
  const [stateLoginPassword, setLoginPassword] = useState<string>("");
  const [LoginFirebase] = useLogin();
  const handleLogin = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    LoginFirebase(stateLoginEmail, stateLoginPassword);
  };
  return (
    <form>
      <input
        type="email"
        onChange={(e) => {
          setLoginEmail(e.currentTarget.value);
          console.log(e.currentTarget.value);
        }}
      />
      <input
        type="password"
        onChange={(e) => {
          setLoginPassword(e.currentTarget.value);
          console.log(e.currentTarget.value);
        }}
      />
      <button onClick={handleLogin}>로그인</button>
      <Link to={"/sign"}>회원가입하기</Link>
    </form>
  );
};

export default Login;
