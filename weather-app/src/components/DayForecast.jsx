// This componenent is responsible for displaying summary for a single day of weather forecast.
export default function dayForecast({weatherForecast, setSelectedDay}) {
    const conditionText = weatherForecast.day.condition?.text || "Condition not available";
    return (
        <button
            onClick={() => setSelectedDay(weatherForecast)}
            className="w-full bg-white"  
        >
            <p className="font-semibold text-blue-700">{conditionText}</p>
            <img className="rounded-t-lg mx-auto" src={weatherForecast.day.condition.icon} alt="" />
            <p className="text-gray-700">{weatherForecast.date}</p>
            <p className="text-gray-600">{weatherForecast.day.avghumidity}% humidity</p>
            <p className="text-gray-900 font-bold">{weatherForecast.day.avgtemp_c}&#176;C</p>
        </button>
    );
}