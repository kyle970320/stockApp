import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useInput from '../../../hooks/useInput';
import useRegister from '../../../hooks/useRegister';
import useValidate from '../../../hooks/useValidate';
import styles from './Sign.module.css';
const Login = () => {
  const [RegisterInFirebase] = useRegister();
  const [stateSignEmail, changeEmail, setSignEmail] = useInput('');
  const [stateSignPassword, changePassword, setSignPassword] = useInput('');
  const [stateSignPasswordCheck, changePasswordCheck, setSignPasswordCheck] = useInput('');
  const [stateFirstName, changeFirstName, setFirstName] = useInput('');
  const [stateLastName, changeLastName, setSignLastName] = useInput('');
  const {
    validateUser: lockButton,
    validateEmail: validateEmail,
    validatePassword: validatePassword,
    validatePasswordCheck: validatePasswordCheck,
    passwordCheckError: statePasswordCheckError,
    emailError: stateEmailError,
    passwordError: statePasswordError,
    isAbled: stateDisabled,
  } = useValidate();
  // const emailRef = useRef<HTMLInputElement>(null);
  // const passwordRef = useRef<HTMLInputElement>(null);
  const handleSign = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    RegisterInFirebase(stateSignEmail, stateSignPassword, stateFirstName, stateLastName);
    setSignEmail('');
    setSignPassword('');
    setFirstName('');
    setSignLastName('');
  };
  useEffect(() => {
    lockButton(stateSignEmail, stateSignPassword, stateSignPasswordCheck, stateFirstName, stateLastName);
    validateEmail(stateSignEmail);
    validatePassword(stateSignPassword);
    validatePasswordCheck(stateSignPassword, stateSignPasswordCheck);
  });
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
      <p className={styles.error}>{stateEmailError && stateSignEmail && stateEmailError}</p>
      <label htmlFor="signPassword">Password</label>
      <input
        id="signPassword"
        type="password"
        placeholder="8자리 이상의 비밀번호를을 입력하세요"
        value={stateSignPassword}
        onChange={(e) => {
          changePassword(e);
        }}
      />
      <p className={styles.error}>{statePasswordError && stateSignPassword && statePasswordError}</p>
      <label htmlFor="signPasswordCheck">Password Check</label>
      <input
        id="signPasswordCheck"
        type="password"
        value={stateSignPasswordCheck}
        onChange={(e) => {
          changePasswordCheck(e);
        }}
      />
      <p className={styles.error}>{stateSignPassword && stateSignPasswordCheck && statePasswordCheckError}</p>
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
      <button disabled={stateDisabled} onClick={handleSign}>
        Sign!
      </button>
      <p className={styles.login}>
        If you are already registered? <Link to="/">Go to login</Link>
      </p>
    </form>
  );
};

export default Login;
