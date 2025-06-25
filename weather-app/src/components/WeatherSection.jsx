import DayForecast from "./DayForecast.jsx";

export default function WeatherSection({ weatherData }) {
    return (
        <>
            <div className="flex flex-row">
                <DayForecast day="Monday" temperature={20} condition="cloudy"/>
                <DayForecast day="Tuesday" temperature={12} condition="Storms"/>
                <DayForecast day="Wednesday" temperature={22} condition="Rain"/>
            </div>
        </>
    );
}