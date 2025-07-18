import { useState } from "react";

export default function SearchRow({setLocation}) {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setLocation(input);
    };

    return (
        <div className="flex">   
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
            <div className="inline-flex items-center gap-2 mx-10 font-bold">
                <label htmlFor="switch-component-on" className="text-slate-600 text-sm cursor-pointer">C</label>
                <div className="relative inline-block w-11 h-5">
                    <input id="switch-component-on" type="checkbox" className="peer appearance-none w-11 h-5 bg-gray-300 rounded-full checked:bg-gray-800 cursor-pointer transition-colors duration-300" />
                    <label htmlFor="switch-component-on" className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
                    </label>
                </div>
                <label htmlFor="switch-component-on" className="text-slate-600 text-sm cursor-pointer">F</label>
            </div>
            <div className="inline-flex items-center gap-2 font-bold">
                <label htmlFor="switch-component-on" className="text-slate-600 text-sm cursor-pointer">Km</label>
                <div className="relative inline-block w-11 h-5">
                    <input id="switch-component-on" type="checkbox" className="peer appearance-none w-11 h-5 bg-gray-300 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" />
                    <label htmlFor="switch-component-on" className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
                    </label>
                </div>
                <label htmlFor="switch-component-on" className="text-slate-600 text-sm cursor-pointer">M</label>
            </div>
        </div>
    );
}