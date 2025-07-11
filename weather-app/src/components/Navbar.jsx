export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 positiong: fixed top-0 z-50 w-full left-0">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-white font-bold">Weather App</p>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="!text-white hover:text-gray-200">Home</a>
          </li>
          <li>
            <a href="/about" className="!text-white hover:text-gray-200">About</a>
          </li>
          <li>
            <a href="/about" className="!text-white hover:text-gray-200">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}