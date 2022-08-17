import React from 'react';
import { BrowserRouter,Switch,Route} from "react-router-dom";
import Home from "../Home";

const Pomodoro = props => {
  function refreshPage(){ 
    window.location.reload(); 
}
  return (
    <div> <span>
    <button className="buttonpomo" onClick={props.start ? props.pauseTimer : props.startTimer}>{props.start ? 'Pause' : 'Start'}</button>
    </span>
    <span><button className="buttonpomo" onClick={refreshPage}>Reset</button>
    </span>
      <p className='timer'>{props.break ? props.restMinutes : props.workMinutes} : {props.seconds < 10 ? `0${props.seconds}` : props.seconds}
      </p>
      
    </div>
  )
}

export default Pomodoro;