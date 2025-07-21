import { format } from 'date-fns';

// This componenent is responsible for displaying summary for a single day of weather forecast.
export default function dayForecast({weatherForecast, setSelectedDay, className, disabled= false}) {
    const conditionText = weatherForecast.day.condition?.text || "Condition not available";
    const date = new Date(weatherForecast.date);
    const dayOfWeek = format(date, 'EEEE');
    const premiumClasses = "cursor-default blur mx-2 my-2 w-full bg-gray-800 rounded-lg shadow-md p-3 flex flex-col items-center justify-center disabled-button"
    return (
        <>
            <button
                onClick={() => setSelectedDay(weatherForecast)}
                className={ `${className} md:mx-2 md:my-2 md:w-full hover:border hover:border-gray-900 hover:bg-blue-100 rounded-lg shadow-md p-3 flex flex-col items-center justify-center transition duration-300 transform hover:scale-101` + (disabled ? premiumClasses : "") }
                disabled={disabled}
            >
                <h3 className="text-lg font-semibold text-gray-800">{dayOfWeek}</h3>
                <p className="text-gray-600">{format(date, 'dd MMMM')}</p>
                <img 
                    className="rounded-t-lg mx-auto" 
                    src={weatherForecast.day.condition.icon} 
                    alt=""
                    style={{ width: "50px", height: "50px" }}
                />
                <p className="font-semibold text-gray-900">{conditionText}</p>
                <p className="font-semibold text-gray-900">{weatherForecast.day.avgtemp_c}&#176;C</p>
                <p className="text-gray-800">{weatherForecast.day.totalprecip_mm}mm rain</p>
                <p className="text-gray-800">{weatherForecast.day.maxwind_kph}km/h wind</p>
            </button>
            {disabled && <span className="text-gray-500 text-3xl relative bottom-40 start-2 text-yellow-500 opacity-60 -mt-4">Premium</span>}
        </>
    );
}