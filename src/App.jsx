/**
 * Things to do:
 * - Add a way make a modal when you click on the premium section
 * - Add a redirect to my website when you click on an ad
 * - Add more information to the footer for contact and about us
 * - Add a way to change the theme of the app (light/dark mode)
 * - Add more animations to the app
 */

import { useEffect, useState } from "react";
import './App.css'
import Navbar from './components/Common/Navbar.jsx'
import Footer from './components/Common/Footer.jsx'
import WeatherSection from './components/ForecastCarousel.jsx'
import Location from './components/Location.jsx'
import DailyGrid from './components/DailyGrid.jsx'
import SearchRow from './components/Common/SearchRow.jsx' 
import DetailedInfo from './components/DetailedInfo.jsx'
import Card from './components/Common/Card.jsx'
import AdsColumn from "./components/Common/AdsColumn.jsx";
import AdsRow from "./components/Common/AdsRow.jsx";
import HourlyChart from "./components/HourlyChart.jsx";
import Ad from "./components/Common/Ad.jsx";

import ad1 from './assets/Ads/Ad1.jpg';
import ad2 from './assets/Ads/Ad2.jpg';
import ad3 from './assets/Ads/Ad3.jpg'; 
import ad4 from './assets/Ads/Ad4.jpg';
import ad5 from './assets/Ads/Ad5.jpg';
import ad6 from './assets/Ads/Ad6.jpg';
import ad7 from './assets/Ads/Ad7.jpg';
import ad8 from './assets/Ads/Ad8.jpg';
import ad9 from './assets/Ads/Ad9.jpg';

function App() {
  // This state holds the unit of measurement for temperature
  // It is initialized to Celsius
  const [tempUnit, setTempUnit] = useState("C"); 

  // This state holds the unit of measurement for distance
  // It is initialized to kilometers
  const [distUnit, setDistUnit] = useState("km");

  // This state holds the location of the weather forecast
  // It is initialized to Dublin, Co. Dublin, Ireland
  const [location, setLocation] = useState("Dublin, Co. Dublin, Ireland");

  // This state holds the selected days forecast data
  const [selectedDay, setSelectedDay] = useState(null)
  
  // State to hold all the forecast weather data
  const [weather, setWeather] = useState(null);
  if(weather){
    console.log(weather);
  }
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  let url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=10&aqi=no&alerts=no`;
  
  // This effect fetches the weather data once the component renders
  useEffect(() => {
      fetch(url)
          .then(res => res.json())
          .then(data => {setWeather(data); setSelectedDay(data?.forecast?.forecastday[0]); })
          .catch(console.error);
  }, [url]);
  // If weather data is not available or selected day is not set, show a loading message
  if (!weather || !selectedDay) {
    return <div className="loading">Loading...</div>;
  }
  
  return (
    <div 
      className='flex flex-col items-center justify-center w-full mb-0 overflow-x-hidden'
      style={{maxWidth: "100vw", overflowX: "hidden"}}
    >
      <Navbar setLocation={setLocation} setTempUnit={setTempUnit} setDistUnit={setDistUnit} />
      <div className="mt-20"></div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto p-4 h-full">
        <div>
          <Location weather={weather} current={weather.current} location={location} selectedDay={selectedDay} tempUnit={tempUnit} distUnit={distUnit} />
          <WeatherSection weather={weather} setSelectedDay={setSelectedDay} />
          <DetailedInfo selectedDay={selectedDay} tempUnit={tempUnit} distUnit={distUnit}/>
          <HourlyChart selectedDay={selectedDay} />
          <DailyGrid selectedDay={selectedDay}/>
        </div>
        <AdsColumn>
          <Ad image={ad1}/>
          <Ad image={ad2}/>
          <Ad image={ad3}/>
          <Ad image={ad4}/>
          <Ad image={ad5}/>
          <Ad image={ad6}/>
          <Ad image={ad7}/>
          <Ad image={ad8}/>
          <Ad image={ad9}/>
          <Ad image={ad1}/>
          <Ad image={ad2}/>
          <Ad image={ad3}/>
          <Ad image={ad4}/>
        </AdsColumn>
      </div>
      <Footer />
    </div>
  )
}

export default App