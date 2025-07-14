// weather-app/src/components/TodaysInfo.jsx
// This component displays detailed information about today's weather

import Card from './Common/Card.jsx';

function DetailedInfo({ title, selectedDay }) {
  const lunarCard = (
    <div className="space-y-2">
      <h3 className="text-xl font-semibold mb-2 border-b pb-1">Astro</h3>
      <div className="grid grid-cols-2 gap-y-1 text-sm">
        <div className="font-medium border-b border-gray-500">Sun Up:</div>
        <div className="font-medium border-b border-gray-500">{selectedDay.astro.is_sun_up ? 'Yes' : 'No'}</div>
        <div className="font-medium border-b border-gray-500">Moon Up:</div>
        <div className="font-medium border-b border-gray-500">{selectedDay.astro.is_moon_up ? 'Yes' : 'No'}</div>
        <div className="font-medium border-b border-gray-500">Moon Illumination:</div>
        <div className="font-medium border-b border-gray-500">{selectedDay.astro.moon_illumination}</div>
        <div className="font-medium border-b border-gray-500">Moon Phase:</div>
        <div className="font-medium border-b border-gray-500">{selectedDay.astro.moon_phase}</div>
        <div className="font-medium border-b border-gray-500">Moonrise:</div>
        <div className="font-medium border-b border-gray-500">{selectedDay.astro.moonrise}</div>
        <div className="font-medium border-b border-gray-500">MoonSet:</div>
        <div className="font-medium border-b border-gray-500">{selectedDay.astro.moonset}</div>
        <div className="font-medium border-b border-gray-500">Sunrise:</div>
        <div className="font-medium border-b border-gray-500">{selectedDay.astro.sunrise}</div>
        <div className="font-medium border-b border-gray-500">Sunset:</div>
        <div className="font-medium border-b border-gray-500">{selectedDay.astro.sunset}</div>
      </div>
    </div>
  );

  const weatherCard = (
    <div className="space-y-2">
      <h3 className="text-xl font-semibold mb-2 border-b pb-1">Weather</h3>
      <div className="grid grid-cols-2 gap-y-1 text-sm">
        <div className="font-medium border-b border-gray-500">Average Humidity:</div>
        <div className="font-medium border-b border-gray-500">{selectedDay.day.avghumidity}</div>
        <div className="font-medium border-b border-gray-500">Average Temperature:</div>
        <div className="font-medium border-b border-gray-500">{selectedDay.day.avgtemp_c}</div>
        <div className="font-medium border-b border-gray-500">Average Visibility:</div>
        <div className="font-medium border-b border-gray-500">{selectedDay.day.avgvis_km}</div>
        <div className="font-medium border-b border-gray-500">Chance of Rain:</div>
        <div className="font-medium border-b border-gray-500">{selectedDay.day.daily_chance_of_rain}</div>
        <div className="font-medium border-b border-gray-500">Chance of Snow:</div>
        <div className="font-medium border-b border-gray-500">{selectedDay.day.daily_chance_of_snow}</div>
        <div className="font-medium border-b border-gray-500">Maximum Temperature:</div>
        <div className="font-medium border-b border-gray-500">{selectedDay.day.maxtemp_c}</div>
        <div className="font-medium border-b border-gray-500">Maximum Wind Speed:</div>
        <div className="font-medium border-b border-gray-500">{selectedDay.day.maxwind_kph}</div>
        <div className="font-medium border-b border-gray-500">Minimum Temperature:</div>
        <div className="font-medium border-b border-gray-500">{selectedDay.day.mintemp_c}</div>
        <div className="font-medium border-b border-gray-500">Total Percipitation:</div>
        <div className="font-medium border-b border-gray-500">{selectedDay.day.totalprecip_mm}</div>
        <div className="font-medium border-b border-gray-500">Total Snow:</div>
        <div className="font-medium border-b border-gray-500">{selectedDay.day.totalsnow_cm}</div>
        <div className="font-medium border-b border-gray-500">UV Index:</div>
        <div className="font-medium border-b border-gray-500">{selectedDay.day.uv}</div>
      </div>
    </div>
  );

  return (
    <div className="todays-info">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-lg">Here you can display more detailed information about the selected day's weather.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>{lunarCard}</Card>
        <Card>{weatherCard}</Card>
      </div>
    </div>
  );
}

export default DetailedInfo;