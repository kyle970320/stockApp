import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
const errorMaessage = [
  ['wrong-password', '비밀번호를 잘못 입력하셨습니다'],
  ['invalid-email', '이메일 형식이 아닙니다'],
  ['user-not-found', '가입되지 않은 이메일입니다'],
];

const useLogin = () => {
  const navigate = useNavigate();
  const LoginFirebase = (email: string, password: string) => {
    return new Promise((resolve) => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          window.sessionStorage.setItem('userUID', user.uid);
          alert('로그인이 성공하였습니다. 메인 페이지로 이동합니다.');
          navigate('/mystock/main');
          resolve(user);
        })
        .catch((error) => {
          errorMaessage.filter((el) => {
            if (error.message.includes(el[0])) {
              return alert(el[1]);
            }
          });
        });
    });
  };
  const LogoutFirebase = () => {
    return new Promise((resolve) => {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          window.sessionStorage.removeItem('userUID');
          alert('로그아웃 되었습니다');
          navigate('/');
          resolve('logout');
        })
        .catch((error) => {
          alert(error.message);
        });
    });
  };
  return { Login: LoginFirebase, Logout: LogoutFirebase };
};

export default useLogin;
