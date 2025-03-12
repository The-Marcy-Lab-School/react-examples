import { useState } from 'react'
import fetchData from './adapters/fetchData';

import './App.css'

function App() {
  const [data, setData] = useState(null);

  const handelFetching = async () => {
    const [result, error] = await fetchData('http://localhost:4000/data');
    if (result) setData(result);
    if (error) console.error(error);
  }
  return (
    <>
      
    </>
  )
}

export default App
