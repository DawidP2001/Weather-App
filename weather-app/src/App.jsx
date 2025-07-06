/**
 * Things to do:
 * - For the selected day section display more information
 * - Add geolocation to the app
 * - Add a search bar to search for different locations
 * - Add a carousel for the hourly forecast
 * - Add a carousel to select the daily forecast
 * - Add a way to select the amount of days to forecast
 * - Add a way to select the unit of measurement (Celsius/Fahrenheit)
 */

import { useEffect, useState } from "react";
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import WeatherSection from './components/WeatherSection.jsx'
import Location from './components/Location.jsx'
import HourlyForecast from './components/HourlyForecast.jsx'  
import SearchRow from './components/SearchRow.jsx' 


function App() {
      const [selectedDay, setSelectedDay] = useState(null)
      const [weather, setWeather] = useState(null);
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      //const location = "Dublin, Co.Dublin, Ireland";
      const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Dublin, Co. Dublin&days=10&aqi=no&alerts=no`;
      
      // This effect fetches the weather data once the component renders
      useEffect(() => {
          fetch(url)
              .then(res => res.json())
              .then(data => setWeather(data))
              .catch(console.error);
    }, []);
  return (
    <div className='flex flex-col items-center justify-center w-full mb-0'>
      <Navbar />
      <SearchRow />
      <Location location="Dublin, Co.Dublin, Ireland" selectedDay={selectedDay}/>
      <HourlyForecast />
      <WeatherSection weather={weather} setSelectedDay={setSelectedDay} />
      <Footer />
    </div>
  )
}

export default App
