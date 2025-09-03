import { Link } from "react-router";

export function Navbar() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-around items-center my-15 border-1 border-gray-300 w-70 font-semibold text-xl py-4 rounded-xl shadow-xl">
        <p className="text-gray-800 hover:text-blue-500">
          <Link to="/">Home</Link>
        </p>
        <p className="text-gray-800 hover:text-blue-500">
          <Link to="/about">About</Link>
        </p>
      </div>
    </div>
  );
}
