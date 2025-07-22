function DailyGrid({selectedDay}) {
const tableBody = [];
for (let i = 0; i < selectedDay?.hour?.length; i++) {
    const hour = selectedDay.hour[i];
    tableBody.push(
        <tr key={i} className="bg-white border-b hover:bg-gray-50 text-xs md:text-md">
            <td className="md:px-6 md:py-4 font-medium text-gray-900 whitespace-nowrap">{hour.time.split(" ")[1]}</td>
            <td className="">
                <img className="m-auto" src={hour.condition.icon} alt="card-image"/>
            </td>
            <td className="md:px-6 md:py-4 text-center">{hour.cloud}</td>
            <td className="md:px-6 md:py-4 text-center">{hour.chance_of_rain}%</td>
            <td className="md:px-6 md:py-4 text-center">{hour.precip_mm} mm</td>
            <td className="md:px-6 md:py-4 text-center">{hour.wind_kph} kph</td>
            <td className="md:px-6 md:py-4 text-center">{hour.humidity}%</td>
            <td className="md:px-6 md:py-4 text-center">{hour.temp_c} °C</td>
            <td className="md:px-6 md:py-4 text-center">{hour.uv}</td>
        </tr>
    )
}
    return (
        <>
            <div className="bg-white shadow-lg rounded-lg relative md:overflow-x-auto shadow-md sm:rounded-lg m-10 flex justify-center">
                <table className="md:w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                        <tr>
                            <th scope="col" className="md:px-6 py-3 break-words">
                                Hour
                            </th>
                            <th scope="col" className="md:px-6 py-3 break-words">
                                Icon
                            </th>
                            <th scope="col" className="md:px-6 py-3 break-words">
                                Cloud
                            </th>
                            <th scope="col" className="md:px-6 py-3 break-words">
                                Chance of Rain
                            </th>
                            <th scope="col" className="md:px-6 py-3 break-words">
                                Precipitation
                            </th>
                            <th scope="col" className="md:px-6 py-3 break-words">
                                Wind
                            </th>
                            <th scope="col" className="md:px-6 py-3 break-words">
                                Humidity
                            </th>
                            <th scope="col" className="md:px-6 py-3 break-words">
                                Temperature
                            </th>
                            <th scope="col" className="md:px-6 py-3 break-words">
                                UV
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableBody}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default DailyGrid;