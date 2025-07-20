import HourlyForecast from './HourlyChart.jsx' 
import LocationMap from "./LocationMap";
import Card from './Common/Card.jsx';

export default function Location({ weather, current, location, selectedDay, tempUnit, distUnit }) {
    const currentWeather = <>
        <h2 className='text-2xl font-bold mb-2 text-grey-700'>{current.condition.text}</h2>
        <img className="m-auto" src={selectedDay?.day.condition.icon} alt="card-image" style={{maxWidth: "6rem"}}/>
        <div className="mt-2 text-center text-2xl font-semibold">{tempUnit=="C" ? current.temp_c : current.temp_f}°{tempUnit}</div>
        <div className="grid grid-cols-2 gap-y-1 text-sm p-4">
            <div className="font-medium text-right">Feels Like:</div>
            <div className="text-left pl-4">{tempUnit=="C" ? current.feelslike_c : current.feelslike_f}°{tempUnit}</div>
            <div className="font-medium text-right">Precipitation:</div>
            <div className="text-left pl-4">{current.precip_mm}mm</div>
            <div className="font-medium text-right">Humidity:</div>
            <div className="text-left pl-4">{current.humidity}%</div>
            <div className="font-medium text-right">Clouds:</div>
            <div className="text-left pl-4">{current.cloud}%</div>
            <div className="font-medium text-right">Wind:</div>
            <div className="text-left pl-4">{distUnit=="km" ? current.wind_kph : current.wind_mph} {distUnit=="km" ? "kph" : "mph"} {current.wind_dir}</div>
            <div className="font-medium text-right">UV:</div>
            <div className="text-left pl-4">{current.uv}</div>
            <div className="font-medium text-right">Visibility:</div>
            <div className="text-left pl-4">{distUnit=="km" ? current.vis_km : current.vis_miles} {distUnit=="km" ? "km" : "miles"}</div>
            <div className="font-medium text-right">Pressure:</div>
            <div className="text-left pl-4">{current.pressure_mb}mb</div>
        </div>
    </>;
    return (
        <>
            <h1 className="mb-4 text-4xl leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-black">{location}</h1>
            <h2 className='ms-2 text-gray-700 text-1xl md:text-2xl'>{weather.location.localtime}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
                <Card>{currentWeather}</Card>
                <div className="" style={{ minWidth: '25rem', zIndex: 0 }}>
                    <LocationMap  place={location} />
                </div>
            </div>
        </>
    );
}