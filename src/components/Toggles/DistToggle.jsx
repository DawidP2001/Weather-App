function DistToggle({ setDistUnit }) {
  return (
    <div className="inline-flex items-center gap-2 font-bold">
        <label htmlFor="Distance-component-on" className="text-slate-600 text-sm cursor-pointer">Km</label>
        <div className="relative inline-block w-11 h-5">
            <input 
                id="Distance-component-on" 
                type="checkbox" 
                onChange={(e) => setDistUnit(e.target.checked ? "mi" : "km")}
                className="peer appearance-none w-11 h-5 bg-gray-300 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" 
            />
            <label htmlFor="Distance-component-on" className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
            </label>
        </div>
        <label htmlFor="Distance-component-on" className="text-slate-600 text-sm cursor-pointer">Mi</label>
    </div>
  );
}
export default DistToggle;