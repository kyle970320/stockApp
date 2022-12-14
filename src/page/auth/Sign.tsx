import React, { useRef, useState } from "react";
import useRegister from "../../hooks/useRegister";
import { RegisterInFirebase } from "../../service/firebase/fbAuth";

const Login = () => {
  const [stateSignEmail, setSignEmail] = useState<string>("");
  const [stateSignPassword, setSignPassword] = useState<string>("");
  const [RegisterInFirebase] = useRegister();

  const handleSign = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    RegisterInFirebase(stateSignEmail, stateSignPassword);
  };
  return (
    <form>
      <input
        type="email"
        onChange={(e) => {
          setSignEmail(e.currentTarget.value);
          console.log(e.currentTarget.value);
        }}
      />
      <input
        type="password"
        onChange={(e) => {
          setSignPassword(e.currentTarget.value);
          console.log(e.currentTarget.value);
        }}
      />
      <button onClick={handleSign}>회원가입하기</button>
    </form>
  );
};

export default Login;
