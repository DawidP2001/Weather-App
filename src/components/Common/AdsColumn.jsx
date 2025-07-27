function AdsColumn({ children }) {
  return (
    <div className="grid grid-cols-3 md:flex md:flex-wrap md:flex-row md:items-center md:justify-center md:flex-col w-full md:w-1/4 md:p-4">
      {children}
    </div>
  );
}
export default AdsColumn;