/**
 * Things to do:
 * - For the selected day section display more information
 * - Add a search bar to search for different locations
 * - Add a carousel for the hourly forecast
 * - Add a carousel to select the daily forecast
 * - Add a way to select the amount of days to forecast
 * - Add a way to select the unit of measurement (Celsius/Fahrenheit)
 * - Add a carousel for the daily forecast
 * - Add a carousel for the hourly forecast
 */

import { useEffect, useState } from "react";
import './App.css'
import Navbar from './components/Common/Navbar.jsx'
import Footer from './components/Common/Footer.jsx'
import WeatherSection from './components/ForecastCarousel.jsx'
import Location from './components/Location.jsx'
import DailyGrid from './components/DailyGrid.jsx'
import SearchRow from './components/Common/SearchRow.jsx' 
import TodaysInfo from './components/TodaysInfo.jsx'
import Card from './components/Common/Card.jsx'

function App() {
  // This state holds the location of the weather forecast
  // It is initialized to Dublin, Co. Dublin, Ireland
  const [location, setLocation] = useState("Dublin, Co. Dublin, Ireland");

  // This state holds the selected days forecast data
  const [selectedDay, setSelectedDay] = useState(null)
  console.log("Selected Day: ", selectedDay);
  // State to hold all the forecast weather data
  const [weather, setWeather] = useState(null);
  
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  let url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=10&aqi=no&alerts=no`;
  
  // This effect fetches the weather data once the component renders
  useEffect(() => {
      fetch(url)
          .then(res => res.json())
          .then(data => {setWeather(data); setSelectedDay(data?.forecast?.forecastday[0]); })
          .catch(console.error);
  }, [url]);
  if (!weather || !selectedDay) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <div className='flex flex-col items-center justify-center w-full mb-0'>
      <Navbar />
      <SearchRow setLocation={setLocation}/>
      <Location weather={weather} location={location} selectedDay={selectedDay}/>
      <TodaysInfo selectedDay={selectedDay}/>
      <WeatherSection weather={weather} setSelectedDay={setSelectedDay} />
      <DailyGrid selectedDay={selectedDay}/>
      <Footer />
    </div>
  )
}

export default App
