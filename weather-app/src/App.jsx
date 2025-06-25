import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import WeatherSection from './components/WeatherSection.jsx'
import Location from './components/Location.jsx'
import HourlyForecast from './components/HourlyForecast.jsx'  
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Location location="Dublin, Co.Dublin, Ireland"/>
      <HourlyForecast />
      <WeatherSection weatherData={{ temperature: 25, condition: 'Sunny' }} />
      <Footer />
    </>
  )
}

export default App
