import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/homePage/Banner/Banner'
import Players from './components/homePage/plyers/Players';
import Navbar from './components/navbar/Navbar'

const fetchPlayer = async()=> {
  const res = await fetch("/data.json");
  return res.json();
}


function App() {
  const playersPromise = fetchPlayer();
  const [coin, setCoin] = useState(50000);

  return (
    <>
      <Navbar coin={coin} />
      <Banner/>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin}/>
      </Suspense>
    </>
  )
}

export default App
