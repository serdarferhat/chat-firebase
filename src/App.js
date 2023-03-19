import React, { useRef, useState } from "react";
import Auth from "./components/Auth";
import Chat from "./components/Chat";
import "./styles/style.css";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));
  const inputRef = useRef(null);
  const [room, setRoom] = useState(null);

  if (!isAuth) {
    <Auth  setIsAuth={setIsAuth}/>;
  }
  return (
    <div className="container">
      {room ? (
        <Chat  room={room}/>
      ) : (
        <div className="container-room">
          {" "}
          <h1>Sohbet Odası</h1>
          <p>Hangi Odaya Gireceksiniz?</p>
          <input type={"text"} ref={inputRef}></input>
          <button
            onClick={() => {
              setRoom(inputRef.current.value);
            }}
          >
            Odaya Gir
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
