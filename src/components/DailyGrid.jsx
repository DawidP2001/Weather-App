function DailyGrid({selectedDay}) {
const tableBody = [];
for (let i = 0; i < selectedDay?.hour?.length; i++) {
    const hour = selectedDay.hour[i];
    tableBody.push(
        <tr key={i} className="bg-white border-b hover:bg-gray-50 text-xs md:text-md">
            <td className="px-2 md:px-6 md:py-4 font-medium text-gray-900 whitespace-nowrap">{hour.time.split(" ")[1]}</td>
            <td className="">
                <img className="m-auto" src={hour.condition.icon} alt="card-image"/>
            </td>
            <td className="px-3 md:px-6 md:py-4 text-center">{hour.temp_c} °C</td>
            <td className="px-3 md:px-6 md:py-4 text-center">{hour.precip_mm} mm</td>
            <td className="px-3 md:px-6 md:py-4 text-center">{hour.wind_kph} kph</td>
            <td className="md:px-6 md:py-4 text-center hidden md:table-cell">{hour.cloud}</td>
            <td className="md:px-6 md:py-4 text-center hidden md:table-cell">{hour.chance_of_rain}%</td>
            <td className="md:px-6 md:py-4 text-center hidden md:table-cell">{hour.humidity}%</td>
            <td className="md:px-6 md:py-4 text-center hidden md:table-cell">{hour.uv}</td>
        </tr>
    )
}
    return (
        <div className="flex flex-col items-center justify-center w-full my-5">
            <div className="bg-white shadow-lg rounded-lg relative md:overflow-x-auto shadow-lg sm:rounded-lg md:m-10 flex justify-center" style={{maxWidth: "100vw"}}>
                <table className="md:w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                        <tr>
                            <th scope="col" colSpan="5" className="md:px-6 py-3 break-words md:hidden table-cell text-center">
                                Hourly Forecast
                            </th>
                            <th scope="col" className="md:px-6 py-3 break-words hidden md:table-cell">
                                Hour
                            </th>
                            <th scope="col" className="md:px-6 py-3 break-words hidden md:table-cell">
                                Icon
                            </th>
                            <th scope="col" className="md:px-6 py-3 break-words hidden md:table-cell">
                                Temperature
                            </th>
                            <th scope="col" className="md:px-6 py-3 break-words hidden md:table-cell">
                                Precipitation
                            </th>
                            <th scope="col" className="md:px-6 py-3 break-words hidden md:table-cell">
                                Wind
                            </th>
                            <th scope="col" className="md:px-6 py-3 break-words hidden md:table-cell">
                                Cloud
                            </th>
                            <th scope="col" className="md:px-6 py-3 break-words hidden md:table-cell">
                                Chance of Rain
                            </th>
                            <th scope="col" className="md:px-6 py-3 break-words hidden md:table-cell">
                                Humidity
                            </th>
                            <th scope="col" className="md:px-6 py-3 break-words hidden md:table-cell">
                                UV
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableBody}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DailyGrid;