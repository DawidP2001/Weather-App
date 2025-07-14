
import HourlyForecast from './HourlyChart.jsx' 
import LocationMap from "./LocationMap";
import Card from './Common/Card.jsx';

export default function Location({ current, location,selectedDay }) {
    const currentWeather = <>
        <img className="m-auto" src={selectedDay?.day.condition.icon} alt="card-image" style={{maxWidth: "6rem"}}/>
        <div className="p-4">
            <p className="text-slate-600 leading-normal font-light">{current.condition.text}</p>
            <p className="text-black">Temperature:{current.temp_c}</p>
            <p className="text-black">Percipitation: {current.precip_mm}mm</p>
            <p className="text-black">Humidity: {current.avghumidity}%</p>
            <p className="text-black">Clouds: {current.cloud}%</p>
            <p className="text-black">Wind: {current.wind_kph}%</p>
            <p className="text-black">Wind Direction: {current.wind_dir}%</p>
        </div>
    </>;
    return (
        <>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-black">{location}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>{currentWeather}</Card>
                <div className="" style={{ minWidth: '25rem', zIndex: 0 }}>
                    <LocationMap  place={location} />
                </div>
            </div>
        </>
    );
}