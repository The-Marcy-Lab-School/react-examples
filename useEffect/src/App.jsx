import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    alert(`Button is ${isClicked ? 'clicked' : 'not clicked'}`);
  }, [isClicked]);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  return (
    <>
      <button onClick={handleClick}>useEffect</button>
    </>
  )
}

export default App
