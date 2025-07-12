
import HourlyForecast from './HourlyChart.jsx' 
import LocationMap from "./LocationMap";

export default function Location({ weather, location,selectedDay }) {
    return (
        <div className="flex flex-row justify-around items-center" style={{ width: '100vw' }}>
            <div className="">
                <div 
                    className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg"
                    style={{background: "grey", padding: "1rem", width: "25rem"}}
                >
                    <img className="" src={selectedDay?.day.condition.icon} alt="card-image" style={{maxWidth: "6rem"}}/>
                    <div className="p-4">
                        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                            {location}
                        </h6>
                        <p className="text-slate-600 leading-normal font-light">{selectedDay?.day.condition.text}</p>
                        <p className="text-black">Average Temperature:{selectedDay?.day.avgtemp_c}</p>
                        <p className="text-black">Total Percipitation: {selectedDay?.day.totalprecip_mm}mm</p>
                        <p className="text-black">Humidity: {selectedDay?.day.avghumidity}%</p>
                    </div>
                    <div className="">
                        <h1 className="text-2xl font-bold text-center mb-4">Hourly Forecast</h1>
                        <HourlyForecast weather={weather} selectedDay={selectedDay} />
                    </div>
                </div>
            </div>
            
            <div className="" style={{ minWidth: '25rem', zIndex: 0 }}>
                <LocationMap  place={location} />
            </div>
        </div>
    );
}