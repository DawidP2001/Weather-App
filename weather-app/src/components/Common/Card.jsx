function Card({ children, className }) {
  return (
    <div
        className={`relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg ${className}`}
        style={{background: "grey", padding: "1rem", width: "25rem"}}
    >
      {children}
    </div>
  );
}

export default Card;