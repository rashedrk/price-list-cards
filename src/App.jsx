import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceList/PriceList'
import Chart from './components/Chart/Chart'
import PhoneBar from './components/PhoneBar/PhoneBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar ></Navbar>
      <h1 className="text-3xl font-bold underline">
      Hello world from tailwind!
    </h1>
    <PriceList></PriceList>
    <Chart></Chart>
    <PhoneBar></PhoneBar>
    </div>
  )
}

export default App
