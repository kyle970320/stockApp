import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const useLogin = () => {
  const navigate = useNavigate();
  const LoginFirebase = (email: string, password: string) => {
    return new Promise((resolve) => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          window.localStorage.setItem("userUID", user.uid);
          alert("로그인이 성공하였습니다. 식단 메인 페이지로 이동합니다.");
          console.log(user);
          navigate("/diet");
          resolve(user);
        })
        .catch((error) => {
          alert(error.message);
        });
    });
  };
  const LogoutFirebase = () => {
    return new Promise((resolve) => {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          window.localStorage.removeItem("userUID");
          alert("로그아웃 되었습니다");
          navigate("/");
          resolve("logout");
        })
        .catch((error) => {
          alert(error.message);
        });
    });
  };
  return [LoginFirebase, LogoutFirebase];
};

export default useLogin;
