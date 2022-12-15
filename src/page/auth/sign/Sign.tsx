import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import useInput from "../../../hooks/useInput";
import useRegister from "../../../hooks/useRegister";
import { RegisterInFirebase } from "../../../service/firebase/fbAuth";
import styles from "./Sign.module.css";
const Login = () => {
  const [RegisterInFirebase] = useRegister();
  const [stateSignEmail, changeEmail, setSignEmail] = useInput("");
  const [stateSignPassword, changePassword, setSignPassword] = useInput("");
  const [stateFirstName, changeFirstName, setFirstName] = useInput("");
  const [stateLastName, changeLastName, setSignLastName] = useInput("");
  const handleSign = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    RegisterInFirebase(
      stateSignEmail,
      stateSignPassword,
      stateFirstName,
      stateLastName
    );
    setSignEmail("");
    setSignPassword("");
    setFirstName("");
    setSignLastName("");
  };
  return (
    <form className={styles.form}>
      <label htmlFor="signEmail">Email</label>
      <input
        id="signEmail"
        type="email"
        placeholder="이메일을 입력하세요"
        value={stateSignEmail}
        onChange={(e) => {
          changeEmail(e);
        }}
      />
      <label htmlFor="signPassword">Password</label>
      <input
        id="signPassword"
        type="password"
        placeholder="비밀번호를을 입력하세요"
        value={stateSignPassword}
        onChange={(e) => {
          changePassword(e);
        }}
      />
      <label htmlFor="signFirstName">First Name</label>
      <input
        id="signFirstName"
        type="text"
        placeholder="이름"
        value={stateFirstName}
        onChange={(e) => {
          changeFirstName(e);
        }}
      />
      <label htmlFor="signLastName">Last Name</label>
      <input
        id="signLastName"
        type="text"
        placeholder="성"
        value={stateLastName}
        onChange={(e) => {
          changeLastName(e);
        }}
      />
      <button onClick={handleSign}>회원가입하기</button>
      <p>
        If you are already registered? <Link to="/">Go to login</Link>
      </p>
    </form>
  );
};

export default Login;
