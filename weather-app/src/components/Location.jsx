export default function WeatherSection({ location }) {
    return (
        <>
            <div className="flex flex-row">
                <div>
                    <h2>{location}</h2>
                    <p>temperature</p>
                    <p>pressure</p>
                    <p>humidity</p>
                    <p>wind speed</p>
                    <p>condition</p>
                    <p>icon</p>
                    <p>percipitation</p>
                    <p>Map</p>
                </div>
                
            </div>
        </>
    );
}