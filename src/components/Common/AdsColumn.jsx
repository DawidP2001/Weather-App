function AdsColumn({ children }) {
  return (
    <div className="flex flex-wrap flex-row items-center justify-center md:flex-col w-full md:w-1/4 p-4">
      {children}
    </div>
  );
}
export default AdsColumn;