import logo from './logo.svg';
import './App.css';
import React from 'react';
import Signup from './Signup/Signup';
// import {useState} from 'react';
// function App() {
//  const [count,setcounter]=useState(0)
//   return(
//   <>
//     <h1 >count{count}</h1>
//     <button onClick={()=>{setcounter(count+1)}}>increment</button>
//     <button onClick={()=>{setcounter(count-1)}}>decrement</button>
//   </>
//   );
// }
function App(){
  return(
    <div>
    <Signup/>
    </div>
  );
}

export default App;
