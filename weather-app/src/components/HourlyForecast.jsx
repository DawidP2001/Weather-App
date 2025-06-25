import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Year", "Sales"],
  ["12 AM", 1000],
  ["1 AM", 1170],
  ["2 AM", 660],
  ["3 AM", 1030],
];

const options = {
  title: "Todays Temperature",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "70%", height: "70%" },
};
export default function HourlyForecast() {
  return (
    <div>
      return <Chart chartType="AreaChart" data={data} options={options} />
    </div>
  );
}