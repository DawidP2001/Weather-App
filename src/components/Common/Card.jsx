function CardKeyValuePair({ label, value }) {
  return (
    <div className="flex justify-between mb-2">
      <span className="font-medium text-gray-700">{label}:</span>
      <span className="text-gray-900">{value}</span>
    </div>
  );
}

function Card({ children, className }) {
  return (
    <div
        className={`m-auto relative flex flex-col my-6 bg-white shadow-lg  border border-slate-200 rounded-lg ${className}`}
        style={{ padding: "1rem", width: "25rem"}}
    >
      {children}
    </div>
  );
}

export default Card;