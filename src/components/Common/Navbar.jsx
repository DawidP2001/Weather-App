// This is the navigation bar component for the weather app
import SearchRow from "./SearchRow";
import logo from "../../assets/sunny-and-cloudy.png"; // Adjust the path as necessary
import { useState } from "react";
export default function Navbar({setLocation, setTempUnit, setDistUnit}) {
const [showLogo, setShowLogo] = useState(true);

  return (
    <nav className="bg-blue-500 p-4 positiong: fixed top-0 z-50 w-full left-0">
      <div className={`container grid items-center ${showLogo ? "grid-cols-2" : "grid-cols-1"}`}>
        <div className={`flex items-center gap-2 ${showLogo ? "" : "hidden"}`}>
        <img src={logo} alt="SkyScan Logo" className="h-8" />
          <p 
            className="text-white font-bold"
            style={{ fontSize: "1.5rem", fontFamily: "Arial, sans-serif" }}
          >SkyScan</p>
          </div>
        <SearchRow setLocation={setLocation} className="" setShowLogo={setShowLogo} showLogo={showLogo} setTempUnit={setTempUnit} setDistUnit={setDistUnit} />
      </div>
    </nav>
  );
}