// This is the navigation bar component for the weather app
import SearchRow from "./SearchRow";

export default function Navbar({setLocation}) {
  return (
    <nav className="bg-blue-500 p-4 positiong: fixed top-0 z-50 w-full left-0">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-white font-bold">Weather App</p>
        <SearchRow setLocation={setLocation} />
      </div>
    </nav>
  );
}