function CardKeyValuePair({ label, value }) {
  return (
    <div className="grid grid-cols-2 gap-y-1 text-sm">
      <span className="font-medium text-right p-1">{label}:</span>
      <span className="font-medium text-left pl-4 p-1 text-gray-500">{value}</span>
    </div>
  );
}

export default CardKeyValuePair;