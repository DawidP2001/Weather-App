function TodaysInfo() {
  return (
    <div className="todays-info">
        <h2 className="text-2xl font-bold mb-4">Today's Weather Information</h2>
        <p className="text-lg">Here you can display more detailed information about the selected day's weather.</p>
        <h3>Astro</h3>
        <p>Is Sun Currently Up</p>
        <p>Is Moon Currently Up</p>
        <p>Moon Illumination</p>
        <p>Moonrise</p>
        <p>MoonSet</p>
        <p>Sunrise</p>
        <p>Sunset</p>

        <h3>Weather</h3>
        <p>Humidity</p>
        <p>Average Temperature</p>
        <p>average vvisibility</p>
        <p>Chance of Rain</p>
        <p>Chance of Snow</p>
        <p>Maximum Temperature</p>
        <p>Maximum Wind Speed</p>
        <p>Minimum Temperature</p>
        <p>Total Precipitation</p>
        <p>Total Snow</p>
        <p>UV Index</p>
    </div>
  );
}

export default TodaysInfo;