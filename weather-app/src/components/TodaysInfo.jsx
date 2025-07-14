// weather-app/src/components/TodaysInfo.jsx
// This component displays detailed information about today's weather

import Card from './Common/Card.jsx';

function TodaysInfo({selectedDay}) {
  const lunarCard = <>
    <h3>Astro</h3>
    <p>Is Sun Currently Up: {selectedDay.astro.is_sun_up}</p>
    <p>Is Moon Currently Up: {selectedDay.astro.is_moon_up}</p>
    <p>Moon Illumination: {selectedDay.astro.moon_illumination}</p>
    <p>Moon Phase: {selectedDay.astro.moon_phase}</p>
    <p>Moonrise: {selectedDay.astro.moonrise}</p>
    <p>MoonSet: {selectedDay.astro.moonset}</p>
    <p>Sunrise: {selectedDay.astro.sunrise}</p>
    <p>Sunset: {selectedDay.astro.sunset}</p>
  </>;
  const weatherCard = <>
    <h3>Weather</h3>
    <p>Average Humidity: {selectedDay.day.avghumidity}</p>
    <p>Average Temperature: {selectedDay.day.avgtemp_c}</p>
    <p>average vvisibility: {selectedDay.day.avgvis_km}</p>
    <p>Chance of Rain: {selectedDay.day.daily_chance_of_rain}</p>
    <p>Chance of Snow: {selectedDay.day.daily_chance_of_snow}</p>
    <p>Maximum Temperature: {selectedDay.day.maxtemp_c}</p>
    <p>Maximum Wind Speed: {selectedDay.day.maxwind_kph}</p>
    <p>Minimum Temperature: {selectedDay.day.mintemp_c}</p>
    <p>Total Percipitation: {selectedDay.day.totalprecip_mm}</p>
    <p>Total Snow: {selectedDay.day.totalsnow_cm}</p>
    <p>UV Index: {selectedDay.day.uv}</p>
  </>;
  
  return (
    <div className="todays-info">
        <h2 className="text-2xl font-bold mb-4">Today's Weather Information</h2>
        <p className="text-lg">Here you can display more detailed information about the selected day's weather.</p>
        <div className="flex">
          <Card children={lunarCard}/>
          <Card children={weatherCard}/>  
        </div>
    </div>
  );
}

export default TodaysInfo;