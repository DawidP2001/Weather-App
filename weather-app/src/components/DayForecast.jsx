

// This componenent is responsible for displaying summary for a single day of weather forecast.
export default function dayForecast({weatherForecast, setSelectedDay}) {
    const conditionText = weatherForecast.day.condition?.text || "Condition not available";
    return (
    <>
        <button onClick={() => setSelectedDay(weatherForecast)} className="m-1 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg mx-auto" src={weatherForecast.day.condition.icon} alt="" />
            <div>
                <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">{weatherForecast.date}</p>
                <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">{weatherForecast.day.avghumidity}% humidity</p>
                <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">{weatherForecast.day.avgtemp_c}&#176;C</p>
                <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">{conditionText}</p>
                <p className="whitespace-nowrap overflow-hidden overflow-ellipsis"></p>
            </div>
        </button>
    </>
    );
}