// This column contains the main content of the weather app
// Currentyl unused -> will be used in combination with AddColumn
function MainColumn({ children }) {
  return (
    <div className="flex flex-col items-center justify-center w-full mb-4">
      {children}
    </div>
  );
}