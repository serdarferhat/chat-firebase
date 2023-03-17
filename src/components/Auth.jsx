import React from 'react'
import { auth,provider } from '../firebase/FireBaseConfig'
import { signInWithPopup } from 'firebase/auth'



const Auth = () => {
  return (
    <div className='auth'>
                <h1>Sohbet Odası</h1>
                <p>Devam etmek için giriş yapınız</p>
                <button onClick={signIn}>Google ile giriş yap</button>
    </div>
  )
}

export default Auth