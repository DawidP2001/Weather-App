import LocationMap from "./LocationMap";
import sunnyAndCloudy from "../assets/sunny-and-cloudy.png";

export default function WeatherSection({ location }) {
    return (
        <>
            <div classNameName="flex flex-row">
                <div>
                    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                            <img src={sunnyAndCloudy} alt="card-image" />
                        </div>
                        <div className="p-4">
                            <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                                {location}
                            </h6>
                            <p className="text-slate-600 leading-normal font-light">
                                The weather in {location} is currently sunny with a temperature of 25°C. Expect clear skies throughout the day with a light breeze from the east.
                            </p>
                            <p>
                                temperature: 25°C
                                pressure: 1012 hPa
                                humidity: 60%
                                wind speed: 10 km/h
                                condition: sunny
                                percipitation: 0 mm
                            </p>
                        </div>
                    </div>  
                </div>
                <LocationMap lat="53.349805" lon="-6.26031" />
            </div>
        </>
    );
}