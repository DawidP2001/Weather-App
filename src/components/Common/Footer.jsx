export default function Footer() {
    return (
        <footer className="bg-blue-500 p-4 mt-8 w-screen left-0 mb-0" style={{ width: "100vw" }}>
        <div className="container mx-auto text-center flex flex-row justify-center items-center">
            <div>
                <p className="text-white text-sm ">
                    &copy; {new Date().getFullYear()} Weather App. All rights reserved.
                </p>
                Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
            </div>
            <a className="md:absolute md:right-5" href="https://www.weatherapi.com/" title="Free Weather API"><img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0" /></a>
        </div>
        </footer>
    );
}