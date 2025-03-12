import { useState } from 'react'

import './App.css'

function App() {

  const [isClicked, setIsClicked] = useState(false);
  console.log(`render`)

  const handleClick = () => {
    setIsClicked((current) => {
      console.log(`about to render and set isClicked to ${!current}`);
      return !current;
    });
    console.log(`Button is ${!isClicked ? 'clicked' : ' unclicked'}`);
  }

  return (
    <>
      <p>{`Button is ${isClicked ? 'clicked' : 'unclicked'}`}</p>
      <button onClick={handleClick}>useState</button>
    </>
  )
}

export default App
