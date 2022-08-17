
import './App.css';
import {getAuth,} from "firebase/auth";
import React, { useState } from "react";
import { BrowserRouter,Switch,Route} from "react-router-dom";
import Signin from "./Signin";
import Home from "./Home";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [isSignedin,setSignin]=useState(true);
const auth = getAuth();
onAuthStateChanged(auth,(user)=> {
if (user){
  return setSignin(true);
}return setSignin(false);
});
if (isSignedin===true){
  return (
    <BrowserRouter>
<Switch>
<Route  Path="/" component={Home}/>
</Switch>
</BrowserRouter>
  );
}else{
 return (
    <BrowserRouter>
<Switch>
<Route  Path="/" component={Signin}/>
</Switch>
    </BrowserRouter>
   
  );
 }
}

export default App;
