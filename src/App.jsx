import './App.css';
import SlotsRoll from "./SlotsRoll"; 
import React, { useState } from 'react';

function App() {
  const [reload, setReload] = useState(false);
  const handleClick = () => {
    setReload(!reload); // Toggle the state to trigger a re-render
  }
  return (
    <>
      <SlotsRoll key={reload ? '1' : '0'}/>
      <SlotsRoll key={reload ? '2' : '1'}/>
      <SlotsRoll key={reload ? '3' : '2'}/>
      <button onClick={handleClick}>Gamble</button>
    </>
  )
}

export default App
