import DayForecast from "./DayForecast.jsx";
import { useEffect, useState } from "react";

export default function WeatherSection({ weatherData }) {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    //const location = "Dublin, Co.Dublin, Ireland";
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Dublin, Co. Dublin&days=10&aqi=no&alerts=no`;
    const [weather, setWeather] = useState(null);
    
    // This effect fetches the weather data once the component renders
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setWeather(data))
            .catch(console.error);
  }, []);

    return (
        <div className="flex flex-row">
            <DayForecast day="Monday" temperature={20} condition="cloudy"/>
            <DayForecast day="Tuesday" temperature={12} condition="Storms"/>
            <DayForecast day="Wednesday" temperature={22} condition="Rain"/>
            {weather ? (
                <>
                    <h2>Weather in {weather.location.name}</h2>
                    <p>{weather.current.temp_c}°C - {weather.current.condition.text}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}