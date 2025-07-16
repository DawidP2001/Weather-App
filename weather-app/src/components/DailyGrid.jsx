function DailyGrid({selectedDay}) {
const tableBody = [];
for (let i = 0; i < selectedDay?.hour?.length; i++) {
    const hour = selectedDay.hour[i];
    tableBody.push(
        <tr key={i} className="bg-white border-b hover:bg-gray-50">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{hour.time.split(" ")[1]}</td>
            <td className="px-6 py-4">{hour.cloud}</td>
            <td className="px-6 py-4">{hour.chance_of_rain}%</td>
            <td className="px-6 py-4">{hour.precip_mm} mm</td>
            <td className="px-6 py-4">{hour.wind_kph} kph</td>
            <td className="px-6 py-4">{hour.humidity}%</td>
            <td className="px-6 py-4">{hour.temp_c} °C</td>
            <td className="px-6 py-4">{hour.uv}</td>
        </tr>
    )
}
    return (
        <>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg m-10">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Hour
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Cloud
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Chance of Rain
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Percipitation
                            </th>
                            <th scope="col" class="px-6 py-3">
                            Wind
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Humidity
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Temperature
                            </th>
                            <th scope="col" class="px-6 py-3">
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