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
        className={`m-auto relative flex flex-col my-6 bg-white shadow-2xl p-10 md:p-5 border border-slate-200 rounded-lg ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;