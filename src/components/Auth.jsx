import React from "react";
import { auth, provider } from "../firebase/FireBaseConfig";
import { signInWithPopup } from "firebase/auth";

const Auth = () => {
  const signIn = ({setIsAuth}) => {
    signInWithPopup(auth, provider)
      .then((res) => {
        // console.log(res);
        localStorage.setItem("token",res.user.refreshToken)
        setIsAuth(true)
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="auth">
      <h1>Sohbet Odası</h1>
      <p>Devam etmek için giriş yapınız</p>
      <button onClick={signIn}>Google ile giriş yap</button>
    </div>
  );
};

export default Auth;
