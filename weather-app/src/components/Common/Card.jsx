function Card({ children, className }) {
  return (
    <div
        className={`relative flex flex-col my-6 bg-white shadow-lg  border border-slate-200 rounded-lg ${className}`}
        style={{ padding: "1rem", width: "25rem"}}
    >
      {children}
    </div>
  );
}

export default Card;