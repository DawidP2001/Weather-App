import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Time", "Temperature"],
  ["12 AM", 0],
  ["1 AM", 0],
  ["2 AM", 0],
  ["3 AM", 0],
  ["4 AM", 0],
  ["5 AM", 0],
  ["6 AM", 0],
  ["7 AM", 0],
  ["8 AM", 0],
  ["9 AM", 0],
  ["10 AM", 0],
  ["11 AM", 0],
  ["12 PM", 0],
  ["1 PM", 0],
  ["2 PM", 0],
  ["3 PM", 0],
  ["4 PM", 0],
  ["5 PM", 0],
  ["6 PM", 0],
  ["7 PM", 0],
  ["8 PM", 0],
  ["9 PM", 0],
  ["10 PM", 0],
  ["11 PM", 0]
];

let options = {
  title: "Todays Temperature",
  hAxis: { title: "Time", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "70%", height: "70%" },
};
export default function HourlyChart({selectedDay}) {
  const [buttonState, setButtonState] = React.useState("Temperature");

  // Temperature
  if (buttonState === "Temperature") {
    data[0][1] = "Temperature";
    for (let i = 0; i < 24; i++) {
      data[i+1][1] = selectedDay?.hour[i]?.temp_c || 0;
    }
    options = {
      title: `${selectedDay?.date} Temperature`,
      hAxis: { 
        title: "Time", 
        titleTextStyle: { color: "#333" },
        textStyle: { fontSize: window.innerWidth < 768 ? 10 : 12 }
      },
      vAxis: { 
        minValue: 0, 
        title: "Temperature (°C)",
        titleTextStyle: { fontSize: window.innerWidth < 768 ? 11 : 13 },
        textStyle: { fontSize: window.innerWidth < 768 ? 10 : 12 }
      },
      chartArea: { 
        width: window.innerWidth < 768 ? "85%" : "70%", 
        height: window.innerWidth < 768 ? "60%" : "70%",
        left: window.innerWidth < 768 ? 50 : 80,
        top: window.innerWidth < 768 ? 40 : 60
      },
      titleTextStyle: { fontSize: window.innerWidth < 768 ? 14 : 16 },
      legend: { position: 'none' }
    }
    // Percipitation
  } else if (buttonState === "Percipitation") {
    data[0][1] = "Percipitation";
    for (let i = 0; i < 24; i++) {
      data[i+1][1] = selectedDay?.hour[i]?.precip_mm || 0;
    }
    options = {
      title: `${selectedDay?.date} Percipitation`,
      hAxis: { 
        title: "Time", 
        titleTextStyle: { color: "#333" },
        textStyle: { fontSize: window.innerWidth < 768 ? 10 : 12 }
      },
      vAxis: { 
        minValue: 0, 
        title: "Rainfall mm",
        titleTextStyle: { fontSize: window.innerWidth < 768 ? 11 : 13 },
        textStyle: { fontSize: window.innerWidth < 768 ? 10 : 12 }
      },
      chartArea: { 
        width: window.innerWidth < 768 ? "85%" : "70%", 
        height: window.innerWidth < 768 ? "60%" : "70%",
        left: window.innerWidth < 768 ? 50 : 80,
        top: window.innerWidth < 768 ? 40 : 60
      },
      titleTextStyle: { fontSize: window.innerWidth < 768 ? 14 : 16 },
      legend: { position: 'none' }
    }
    // Wind Speed 
  } else if (buttonState === "Wind Speed") {
    data[0][1] = "Wind Speed";
    for (let i = 0; i < 24; i++) {
      data[i+1][1] = selectedDay?.hour[i]?.wind_kph || 0;
    }
    options = {
      title: `${selectedDay?.date} Wind Speed`,
      hAxis: { 
        title: "Time", 
        titleTextStyle: { color: "#333" },
        textStyle: { fontSize: window.innerWidth < 768 ? 10 : 12 }
      },
      vAxis: { 
        minValue: 0, 
        title: "Wind Speed kph",
        titleTextStyle: { fontSize: window.innerWidth < 768 ? 11 : 13 },
        textStyle: { fontSize: window.innerWidth < 768 ? 10 : 12 }
      },
      chartArea: { 
        width: window.innerWidth < 768 ? "85%" : "70%", 
        height: window.innerWidth < 768 ? "60%" : "70%",
        left: window.innerWidth < 768 ? 50 : 80,
        top: window.innerWidth < 768 ? 40 : 60
      },
      titleTextStyle: { fontSize: window.innerWidth < 768 ? 14 : 16 },
      legend: { position: 'none' }
    }
  }
  return (
    <div className="p-2 md:p-4 m-2 md:m-5 bg-white flex flex-col justify-center shadow-lg rounded-lg overflow-x-auto">
      <div className="min-w-full md:min-w-96 min-w-sm flex items-center justify-center">
        <Chart 
          chartType="AreaChart" 
          data={data} 
          options={options}
          width="100%"
          height={window.innerWidth < 768 ? "300px" : "400px"}
          className="chart"
        />
      </div>
      <div className="flex flex-wrap gap-2 mt-4 justify-center">
        <button 
          className={`chart-button text-white text-xs md:text-sm px-3 py-2 md:px-4 md:py-2 ${buttonState === "Temperature" ? "bg-blue-700" : ""}`} 
          onClick={() => setButtonState("Temperature")}
        >
          Temperature
        </button>
        <button 
          className={`chart-button text-white text-xs md:text-sm px-3 py-2 md:px-4 md:py-2 ${buttonState === "Percipitation" ? "bg-blue-700" : ""}`} 
          onClick={() => setButtonState("Percipitation")}
        >
          Precipitation
        </button>
        <button 
          className={`chart-button text-white text-xs md:text-sm px-3 py-2 md:px-4 md:py-2 ${buttonState === "Wind Speed" ? "bg-blue-700" : ""}`} 
          onClick={() => setButtonState("Wind Speed")}
        >
          Wind Speed
        </button>
      </div>
    </div>
  );
}