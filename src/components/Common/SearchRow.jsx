import { useState } from "react";
import TempToggle from "../Toggles/TempToggle";
import DistToggle from "../Toggles/DistToggle";
// Function component for the search bar and unit toggles
export default function SearchRow({setLocation, className, setShowLogo, showLogo, setTempUnit, setDistUnit}) {
    const [input, setInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [showMobileSearch, setShowMobileSearch] = useState(false);
    console.log(isOpen);
    const handleSubmit = (e) => {
        e.preventDefault();
        setLocation(input);
    };

    return (
        <>
            {/* Mobile */}
            <div className={`flex md:hidden ${className} flex justify-self-end gap-2`}>
                {/* Mobile Search bar */}
                <form 
                    className={`max-w-100 mx-auto ${showMobileSearch ? "block" : "hidden"}`} 
                    onSubmit={handleSubmit}
                    style={{ width: "100%", minWidth: "250px" }}
                >   
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input 
                            type="search" 
                            id="default-search"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="min-h-10 block w-full p-2 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500s dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Enter location" 
                            required 
                        />
                        <button 
                            type="submit" 
                            className="text-white absolute end-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            style={{ padding: "0.25rem 1rem", bottom: "0.4rem" }}
                        >Search</button>
                    </div>
                </form>
                {/* Search button */}
                <button 
                    type="button" 
                    onClick={() => {
                        setShowLogo(!showLogo);
                        setShowMobileSearch(!showMobileSearch);
                    }}
                    className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                <span className="sr-only">Search</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                </button>
                {/* Burger button */}
                <button 
                    id="navbar-hamburger-button"
                    type="button" 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                    aria-controls="navbar-hamburger" 
                    aria-expanded={isOpen}
                >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
                </button>
                <div 
                    className={`${isOpen ? "absolute" : "hidden"} right-0 top-10 flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700`} 
                    id="navbar-hamburger"
                >
                    <ul className={`flex flex-col`}>
                        <li className="pt-2 pb-2">
                            <TempToggle setTempUnit={setTempUnit} />
                        </li>
                        <li className="pt-4 pb-2">
                            <DistToggle setDistUnit={setDistUnit} />
                        </li>
                    </ul>
                </div>
            </div>

            {/* Desktop */}
            <div className={`flex md:w-100 hidden md:flex ${className}`}>   
                {/* Search bar */}
                <form 
                    className="max-w-md mx-auto min-w-100" 
                    onSubmit={handleSubmit}
                >   
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input 
                            type="search" 
                            id="default-search"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="min-h-10 block w-full p-2 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500s dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Enter location here" 
                            required 
                        />
                        <button 
                            type="submit" 
                            className="text-white absolute end-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            style={{ padding: "0.25rem 1rem", bottom: "0.4rem" }}
                        >Search</button>
                    </div>
                </form>
                {/* Unit toggles */}
                {/* Temperature unit toggle */}
                <TempToggle setTempUnit={setTempUnit} />
                {/* Distance unit toggle */}
                <DistToggle setDistUnit={setDistUnit} />
            </div>
        </>
    );
}