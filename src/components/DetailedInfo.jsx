// weather-app/src/components/TodaysInfo.jsx
// This component displays detailed information about today's weather

import Card from './Common/Card.jsx';
import HourlyChart from './HourlyChart.jsx';
import CardKeyValuePair from './Common/CardKeyValuePair.jsx';

function DetailedInfo({ title, selectedDay, tempUnit, distUnit }) {
  const lunarCard = (
    <div className="space-y-2">
      <h3 className="text-xl font-semibold mb-2 border-b pb-1">Astro</h3>
      <div className="grid grid-cols-1 gap-y-1 text-sm">
        <CardKeyValuePair label="Sun Up" value={selectedDay.astro.is_sun_up ? 'Yes' : 'No'} />
        <CardKeyValuePair label="Moon Up" value={selectedDay.astro.is_moon_up ? 'Yes' : 'No'} />
        <CardKeyValuePair label="Moon Illumination" value={selectedDay.astro.moon_illumination} />
        <CardKeyValuePair label="Moon Phase" value={selectedDay.astro.moon_phase} />
        <CardKeyValuePair label="Moonrise" value={selectedDay.astro.moonrise} />
        <CardKeyValuePair label="MoonSet" value={selectedDay.astro.moonset} />
        <CardKeyValuePair label="Sunrise" value={selectedDay.astro.sunrise} />
        <CardKeyValuePair label="Sunset" value={selectedDay.astro.sunset} />
      </div>
    </div>
  );
  // There isn't a value for snow in the API, so we calculate it from cm to inches
  const snowInches = selectedDay.day.totalsnow_cm/2.54;
  const weatherCard = (
    <div className="space-y-2">
      <h3 className="text-xl font-semibold mb-2 border-b pb-1">Weather</h3>
      <div className="grid grid-cols-1 gap-y-1 text-sm">
        <CardKeyValuePair label="Average Humidity" value={`${selectedDay.day.avghumidity} %`} />
        <CardKeyValuePair label="Average Temperature" value={`${tempUnit === "C" ? selectedDay.day.avgtemp_c : selectedDay.day.avgtemp_f}°${tempUnit}`} />
        <CardKeyValuePair label="Average Visibility" value={`${distUnit === "km" ? selectedDay.day.avgvis_km : selectedDay.day.avgvis_miles} ${distUnit}`} />
        <CardKeyValuePair label="Chance of Rain" value={`${selectedDay.day.daily_chance_of_rain} %`} />
        <CardKeyValuePair label="Chance of Snow" value={`${selectedDay.day.daily_chance_of_snow} %`} />
        <CardKeyValuePair label="Maximum Temperature" value={`${tempUnit === "C" ? selectedDay.day.maxtemp_c : selectedDay.day.maxtemp_f}°${tempUnit}`} />
        <CardKeyValuePair label="Maximum Wind Speed" value={`${distUnit === "km" ? selectedDay.day.maxwind_kph : selectedDay.day.maxwind_mph} ${distUnit === "km" ? "km/h" : "mph"}`} />
        <CardKeyValuePair label="Minimum Temperature" value={`${tempUnit === "C" ? selectedDay.day.mintemp_c : selectedDay.day.mintemp_f}°${tempUnit}`} />
        <CardKeyValuePair label="Total Percipitation" value={`${distUnit === "km" ? selectedDay.day.totalprecip_mm : selectedDay.day.totalprecip_in} ${distUnit === "km" ? "mm" : "inches"}`} />
        <CardKeyValuePair label="Total Snow" value={`${distUnit === "km" ? snowInches : selectedDay.day.totalsnow_cm} ${distUnit === "km" ? "inches" : "cm"}`} />
        <CardKeyValuePair label="UV Index" value={selectedDay.day.uv} />
      </div>
    </div>
  );

  return (
    <div className="todays-info mx-auto">
      <div className='bg-white shadow-lg rounded-lg mx-auto'>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-lg">Here you can display more detailed information about the selected day's weather.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>{lunarCard}</Card>
          <Card>{weatherCard}</Card>
        </div>
      </div>
    </div>
  );
}

export default DetailedInfo;