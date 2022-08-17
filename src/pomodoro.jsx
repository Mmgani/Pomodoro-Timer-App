import React, { Component } from 'react';
import Pomodoro from './TimerComponents/Pomodoro';
import Home from "./Home";
import { BrowserRouter,Switch,Route} from "react-router-dom";

class pomodoro extends Component {
  constructor(props) {
    super(props);
    this.state={
      restMinutes: 5,
      workMinutes: 25,
      seconds: 0,
      break: false,
      start: false,
      interval: ''
    }
  }

timer = () => {
  this.setState({
    seconds: this.state.seconds === 0 ? 59 : this.state.seconds - 1
  })

  if (this.state.break) {
    this.setState({restMinutes: this.state.seconds === 0 ? this.state.restMinutes-1 : this.state.restMinutes === 5 ? 4 : this.state.restMinutes})
  }

  if (this.state.restMinutes === -1) {
    this.setState({restMinutes: 5, break: false})
  }

  else {
    this.setState({workMinutes: this.state.seconds === 0 ? this.state.workMinutes -1 : this.state.workMinutes === 25 ? 24 : this.state.workMinutes})

    if (this.state.workMinutes === -1) {
      this.setState({workMinutes: 25, break: true})
    }
  }
}

startTimer = () => {
      this.setState({interval: setInterval(this.timer, 1000), start: !this.state.start});
    }

pauseTimer = () => {
  this.setState(prevState => {
    return {
      restMinutes: prevState.restMinutes,
      workMinutes: prevState.workMinutes,
      seconds: prevState.seconds,
      break: prevState.break,
      start: false,
      interval: clearInterval(prevState.interval)
    };
  })
}
  render() {
    return (
      <div className="App">
       
        <Pomodoro
          timer={this.timer}
          workMinutes={this.state.workMinutes}
          restMinutes={this.state.restMinutes}
          seconds={this.state.seconds}
          start={this.state.start}
          break={this.state.break}
          startTimer={this.startTimer}
          pauseTimer={this.pauseTimer}
            resetTimer={this.resetTimer}
          />
      </div>
    );
  }
}
export default pomodoro;




































// import React, { useState, useEffect } from "react";

// export default function Pomodoro() {
//   const [minutes, setMinutes] = useState(25);
//   const [seconds, setSeconds] = useState(0);
//   const [displayMessage, setDisplayMessage] = useState(false);
// //   const start = () => {
// //         const timer = setInterval(() => {
// //           setSecondsLeft((secondsLeft) => secondsLeft - 1);
// //           if (secondsLeft === 0) {
// //             clearInterval(timer);
// //           }
// //         }, 1000);
// //         setTimer(timer);
// //       };

//   useEffect(() => {
   
//     let interval = setInterval(() => {
//       clearInterval(interval);

//       if (seconds === 0) {
//         if (minutes !== 0) {
//           setSeconds(59);
//           setMinutes(minutes - 1);
//         } else {
//           let minutes = displayMessage ? 24 : 4;
//           let seconds = 59;

//           setSeconds(seconds);
//           setMinutes(minutes);
//           setDisplayMessage(!displayMessage);
//         }
//       } else {
//         setSeconds(seconds - 1);
//       }
//     }, 1000);
//   }, [seconds]);

//   const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
//   const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

//   return (
//     <div className="pomodoro">
//     <button  >start</button>
//       <div className="message">
//         {displayMessage && <div>Break time! New session starts in:</div>}
//       </div>
//       <div className="timer">
//         {timerMinutes}:{timerSeconds}
//       </div>
//     </div>
//   );
// }
// // import React, { useEffect, useState } from "react";

// // function Pomodoro() {

// //   const [secondsLeft, setSecondsLeft] = useState(25 * 60);
// //   const [timer, setTimer] = useState();

// //   const start = () => {
// //     const timer = setInterval(() => {
// //       setSecondsLeft((secondsLeft) => secondsLeft - 1);
// //       if (secondsLeft === 0) {
// //         clearInterval(timer);
// //       }
// //     }, 1000);
// //     setTimer(timer);
// //   };

// //   useEffect(() => {
// //     if (secondsLeft === 0) {
// //       clearInterval(timer);
// //     }
// //   }, [secondsLeft, timer]);

// //   useEffect(() => {
// //     return () => clearInterval(timer);
// //   }, [timer]);

// //   return (
// //     <div className="pomodoro">
// //     <h1>Pomodoro Timer</h1>
// //     <div className="message">
// // <div>Its Break Time!</div>
// //     </div>
// //       <div>25:00</div>
// //       <button onClick={start}>start</button>
// //       <div>{secondsLeft} seconds left</div>
// //     </div>
// //   );
// // }
// // export default Pomodoro;