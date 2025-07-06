

import LocationMap from "./LocationMap";
import sunnyAndCloudy from "../assets/sunny-and-cloudy.png";

export default function WeatherSection({ location, selectedDay }) {

    console.log("Selected Day:", selectedDay);
    return (
        <div className="flex flex-row justify-around items-center" style={{ width: '100%' }}>
            <div className="w-50">
                <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                    <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                        <img src={sunnyAndCloudy} alt="card-image" />
                    </div>
                    <div className="p-4">
                        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                            {location}
                        </h6>
                        <p className="text-slate-600 leading-normal font-light">{selectedDay?.day.condition.text}</p>
                        <p className="text-black">Average Temperature:{selectedDay?.day.avgtemp_c}</p>
                        <p className="text-black">Total Percipitation: {selectedDay?.day.totalprecip_mm}mm</p>
                        <p className="text-black">Humidity: {selectedDay?.day.avghumidity}%</p>
                    </div>
                </div>  
            </div>
            <div className="w-50 z-0">
                <LocationMap  place={location} />
            </div>
        </div>
    );
}