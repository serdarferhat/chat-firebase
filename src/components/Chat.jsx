import React from 'react'

const Chat = ({room}) => {
  return (
    <div className='chat'>
      <header><p>Kullanıcı</p>
      <p>{room}</p>
      <a href="/">farklı oda</a></header>
      <div className="messages"></div>
      <form action="">
        <input type="text" />
        <button>Gönder</button>
      </form>
    </div>
  )
}

export default Chat