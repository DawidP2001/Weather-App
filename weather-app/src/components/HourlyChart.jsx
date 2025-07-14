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
    for (let i = 0; i < 24; i++) {
      data[i+1][1] = selectedDay?.hour[i]?.temp_c || 0;
    }
    options = {
      title: `${selectedDay?.date} Temperature`,
      hAxis: { title: "Time", titleTextStyle: { color: "#333" } },
      vAxis: { minValue: 0, title: "Temperature (°C)" },
      chartArea: { width: "70%", height: "70%" },
    }
    // Percipitation
  } else if (buttonState === "Percipitation") {
    for (let i = 0; i < 24; i++) {
      data[i+1][1] = selectedDay?.hour[i]?.precip_mm || 0;
    }
    options = {
      title: `${selectedDay?.date} Percipitation`,
      hAxis: { title: "Time", titleTextStyle: { color: "#333" } },
      vAxis: { minValue: 0, title: "Rainfall mm" },
      chartArea: { width: "70%", height: "70%" },
    }
    // Wind Speed 
  } else if (buttonState === "Wind Speed") {
    for (let i = 0; i < 24; i++) {
      data[i+1][1] = selectedDay?.hour[i]?.wind_kph || 0;
    }
    options = {
      title: `${selectedDay?.date} Wind Speed`,
      hAxis: { title: "Time", titleTextStyle: { color: "#333" } },
      vAxis: { minValue: 0, title: "Wind Speed kph" },
      chartArea: { width: "70%", height: "70%" },
    }
  }
  return (
    <div>
      <div>
        <button className="text-white" onClick={() => setButtonState("Temperature")}>Temperature</button>
        <button className="text-white" onClick={() => setButtonState("Percipitation")}>Percipitation</button>
        <button className="text-white" onClick={() => setButtonState("Wind Speed")}> Wind Speed</button>
      </div>
      <Chart chartType="AreaChart" data={data} options={options} />
    </div>
  );
}