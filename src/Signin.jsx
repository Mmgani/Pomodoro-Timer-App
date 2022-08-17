import './App.css';
import {signInWithGoogle} from "./firebase"
import React, { useState } from "react";
function Signin() {
  


    const [hover, setHover] = useState();
  
    const handleMouseIn = () => {
      setHover(true);
    };
  
    const handleMouseOut = () => {
      setHover(false);
    };
  
    
    return (
      <div className="App">
      <h2>Sign to Use Pomodoro Timer App</h2>
       <button class="login-with-google-btn" onMouseOver={handleMouseIn} style={{backgroundColor:hover ? "black" : "white"}}onMouseOut={handleMouseOut} onClick={signInWithGoogle}> Sign in with Google </button>
       
        </div>
    );
  }
  
  export default Signin;