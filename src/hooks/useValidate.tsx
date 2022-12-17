import React, { useState } from 'react';
import { emailRegExp, passwordRegExp } from '../utils/regExp';

const useValidate = () => {
  const [stateDisabled, setDisabled] = useState<boolean | undefined>(true);
  const [stateEmailError, setEmailError] = useState<string>('');
  const [statePasswordError, setPasswordError] = useState<string>('');
  const lockButton = (email: string, password: string, firstName: string, lastName: string) => {
    if (emailRegExp.test(email) && passwordRegExp.test(password) && firstName && lastName) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const validateEmail = (email: string) => {
    !emailRegExp.test(email) !== false ? setEmailError('유효하지 않은 이메일입니다.') : setEmailError('');
  };
  const validatePassword = (password: string) => {
    !passwordRegExp.test(password) !== false ? setPasswordError('유효하지 않은 비밀번호입니다.') : setPasswordError('');
  };

  return {
    validateUser: lockButton,
    validateEmail: validateEmail,
    validatePassword: validatePassword,
    emailError: stateEmailError,
    passwordError: statePasswordError,
    isAbled: stateDisabled,
  };
};

export default useValidate;
