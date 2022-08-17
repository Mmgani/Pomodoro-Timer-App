import './App.css';
import {signInWithGoogle} from "./firebase"
import React, { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import Pomodoro from './pomodoro';
function Home() {
    
  const signOuthandle = ()=>{
    const auth = getAuth();
signOut(auth).then(() => {
  
}).catch((error) => {
 console.log(error);
});
  }
  
    
    return (
      <div className="home">
      <div className="homebtn">
         <button className="login-with-google-btn"   onClick={signOuthandle}> Sign Out </button>
       </div>
      <h3>Welcome {localStorage.getItem("name")}</h3>
        <h3>{localStorage.getItem("email")}</h3>
        <div>
<Pomodoro />
        
</div>
       </div>
      
    );
  }
  
  export default Home;