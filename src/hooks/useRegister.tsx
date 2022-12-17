import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getFirestore } from 'firebase/firestore';
const errorMaessage = [['email-already-in-use', '이미 가입된 이메일입니다']];
const useRegister = () => {
  const navigate = useNavigate();
  const RegisterInFirebase = (email: string, password: string, firstName: string, lastName: string) => {
    return new Promise((resolve) => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          const db = getFirestore();
          setDoc(doc(db, user.uid, 'userInfo'), {
            email,
            password,
            firstName,
            lastName,
          });
          alert('회원가입이 완료되었습니다.');
          navigate('/');
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
  return [RegisterInFirebase];
};

export default useRegister;
