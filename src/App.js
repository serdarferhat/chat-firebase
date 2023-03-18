import React, { useState } from "react";
import Auth from "./components/Auth";

function App() {
  const [isAuth,setIsAuth]=useState(localStorage.getItem("token"))

  if(!isAuth){
    <Auth/>
  }
  return (
    <div className="App">
      Oda İsmi Giriniz
    </div>
  );
}

export default App;
