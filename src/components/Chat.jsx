import React, { useState } from 'react'
// firebase formdanaldığımızı göndermek için importlar
import {addDoc,collection, serverTimestamp} from "firebase/firestore"
//firestore dan gelen db import
import { auth, db } from '../firebase/FireBaseConfig'
console.log(auth)
const Chat = ({room}) => {
  const [newMassage,setNewMessage]=useState("")
  const messagesRef=collection(db,"messages")
  const handleSubmit=async (e)=>{
   e.preventDefault();
  await addDoc(messagesRef,{text:newMassage,
  createdAt:serverTimestamp(),
  user:auth.currentUser.displayName,
  room:room,
 

})
setNewMessage(" ")
  }
  return (
    <div className='chat'>
      <header><p>Kullanıcı</p>
      <p>{room}</p>
      <a href="/">farklı oda</a></header>
      <div className="messages"></div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newMassage} onChange={(e)=>setNewMessage(e.target.value)}/>
        <button>Gönder</button>
      </form>
    </div>
  )
}

export default Chat