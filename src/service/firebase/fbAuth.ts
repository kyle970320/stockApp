import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

interface SystemError {
  code: string;
  message: string;
}

//회원가입 함수
const RegisterInFirebase = (email: string, password: string) => {
  return new Promise((resolve) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        alert("회원가입이 완료되었습니다.");
        resolve(user);
      })
      .catch((error: SystemError) => {
        alert("안됨");
      });
  });
};

//로그인 함수
const LoginInFirebase = (email: string, password: string) => {
  return new Promise((resolve) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        resolve(user);
      })
      .catch((error) => {
        alert(error.message);
      });
  });
};

//로그아웃함수
const fnSignOut = () => {
  return new Promise((resolve) => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        resolve(auth);
      })
      .catch((error: SystemError) => {
        alert(error.message);
      });
  });
};

export { RegisterInFirebase, LoginInFirebase };
