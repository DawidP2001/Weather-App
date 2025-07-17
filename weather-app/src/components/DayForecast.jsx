import { format } from 'date-fns';

// This componenent is responsible for displaying summary for a single day of weather forecast.
export default function dayForecast({weatherForecast, setSelectedDay}) {
    const conditionText = weatherForecast.day.condition?.text || "Condition not available";
    const date = new Date(weatherForecast.date);
    const dayOfWeek = format(date, 'EEEE');
    return (
        <button
            onClick={() => setSelectedDay(weatherForecast)}
            className="mx-2 my-2 w-full bg-white border border-solid border-gray-400 hover:border-gray-900 hover:bg-blue-100 rounded-lg shadow-md p-3 flex flex-col items-center justify-center transition duration-300 transform hover:scale-101"  
        >
            <h3 className="text-lg font-semibold text-gray-800">{dayOfWeek}</h3>
            <p className="text-gray-600">{format(date, 'dd MMMM')}</p>
            <img className="rounded-t-lg mx-auto" src={weatherForecast.day.condition.icon} alt="" />
            <p className="font-semibold text-gray-900">{conditionText}</p>
            <p className="font-semibold text-gray-900">{weatherForecast.day.avgtemp_c}&#176;C</p>
            <p className="text-gray-800">{weatherForecast.day.totalprecip_mm}mm rain</p>
            <p className="text-gray-800">{weatherForecast.day.maxwind_kph}km/h wind</p>
        </button>
    );
}