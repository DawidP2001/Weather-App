// This is the navigation bar component for the weather app
import SearchRow from "./SearchRow";
import logo from "../../assets/sunny-and-cloudy.png"; // Adjust the path as necessary
export default function Navbar({setLocation}) {
  return (
    <nav className="bg-blue-500 p-4 positiong: fixed top-0 z-50 w-full left-0">
      <div className="container mx-auto flex justify-around items-center">
        <div className="flex items-center gap-2">
        <img src={logo} alt="SkyScan Logo" className="h-8" />
          <p 
            className="text-white font-bold"
            style={{ fontSize: "1.5rem", fontFamily: "Arial, sans-serif" }}
          >SkyScan</p>
          </div>
        <SearchRow setLocation={setLocation} />
      </div>
    </nav>
  );
}