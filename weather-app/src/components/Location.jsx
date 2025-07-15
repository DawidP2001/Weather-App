import HourlyForecast from './HourlyChart.jsx' 
import LocationMap from "./LocationMap";
import Card from './Common/Card.jsx';

export default function Location({ weather, current, location, selectedDay }) {
    const currentWeather = <>
        <h2 className='text-2xl font-bold mb-2 text-grey-700'>{current.condition.text}</h2>
        <img className="m-auto" src={selectedDay?.day.condition.icon} alt="card-image" style={{maxWidth: "6rem"}}/>
        <div className="grid grid-cols-2 gap-y-1 text-sm">
            <div className="font-medium text-right">Temperature:</div>
            <div className="text-left pl-4">{current.temp_c}°C</div>
            <div className="font-medium text-right">Precipitation:</div>
            <div className="text-left pl-4">{current.precip_mm} mm</div>
            <div className="font-medium text-right">Humidity:</div>
            <div className="text-left pl-4">{current.avghumidity}%</div>
            <div className="font-medium text-right">Clouds:</div>
            <div className="text-left pl-4">{current.cloud}%</div>
            <div className="font-medium text-right">Wind:</div>
            <div className="text-left pl-4">{current.wind_kph} kph</div>
            <div className="font-medium text-right">Wind Direction:</div>
            <div className="text-left pl-4">{current.wind_dir}</div>
        </div>
    </>;
    return (
        <>
            <h1 className="mb-4 text-4xl leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-black">{location}</h1>
            <h2 className='ms-2 text-gray-700 text-1xl md:text-2xl'>{weather.location.localtime}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-20">
                <Card>{currentWeather}</Card>
                <div className="" style={{ minWidth: '25rem', zIndex: 0 }}>
                    <LocationMap  place={location} />
                </div>
            </div>
        </>
    );
}