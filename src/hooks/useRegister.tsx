import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
interface SystemError {
  code: string;
  message: string;
}

const useRegister = () => {
  const navigate = useNavigate();
  const RegisterInFirebase = (email: string, password: string) => {
    return new Promise((resolve) => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          alert("회원가입이 완료되었습니다.");
          navigate("/");
          resolve(user);
        })
        .catch((error: SystemError) => {
          alert(error.message);
        });
    });
  };
  return [RegisterInFirebase];
};

export default useRegister;
