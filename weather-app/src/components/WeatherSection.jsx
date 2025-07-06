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
        <div className="flex flex-wrap">
        {weather
            ? weather.forecast.forecastday.map((day, ) => (
                <DayForecast
                    weatherForecast={day}
                />
            ))
            : <p>Loading...</p>
        }
        </div>
    );
}