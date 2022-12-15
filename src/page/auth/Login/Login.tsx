import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../../hooks/useLogin";
import styles from "./Login.module.css";
import loginImage from "../../../img/login.png";
const Login = () => {
  const [stateLoginEmail, setLoginEmail] = useState<string>("");
  const [stateLoginPassword, setLoginPassword] = useState<string>("");
  const { Login: LoginFirebase } = useLogin();
  const handleLogin = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    LoginFirebase(stateLoginEmail, stateLoginPassword);
  };
  return (
    <section className={styles.section}>
      <div>
        <figure>
          <img src={loginImage} alt="로그인이미지" />
        </figure>
        <div>
          <p>Hello!</p>
          <p>wellcom to Stock App!</p>
          <h2>
            login <span>your account</span>
          </h2>
          <form className={styles.form}>
            <label htmlFor="loginEmail">user email</label>
            <input
              id="loginEmail"
              type="email"
              onChange={(e) => {
                setLoginEmail(e.currentTarget.value);
                console.log(e.currentTarget.value);
              }}
            />
            <label htmlFor="loginPassword">password</label>
            <input
              id="loginPassword"
              type="password"
              onChange={(e) => {
                setLoginPassword(e.currentTarget.value);
                console.log(e.currentTarget.value);
              }}
            />
            <button onClick={handleLogin}>log in</button>
            <Link to={"/sign"}>sign in</Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
