function CardKeyValuePair({ label, value }) {
  return (
    <div className="grid grid-cols-2 gap-y-1 text-sm">
      <span className="font-medium text-right p-1">{label}:</span>
      <span className="text-left pl-4">{value}</span>
    </div>
  );
}

export default CardKeyValuePair;