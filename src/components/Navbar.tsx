import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-purple-600">
            SnickerSnap
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link to="/features" className="text-gray-700 hover:text-purple-600 transition-colors">
              Features
            </Link>
            <Link to="/team" className="text-gray-700 hover:text-purple-600 transition-colors">
              Team
            </Link>
            <Link to="/beta-signup" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
              Join Beta
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/features"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                to="/team"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>
              <Link
                to="/beta-signup"
                className="block px-3 py-2 rounded-md text-white bg-purple-600 hover:bg-purple-700"
                onClick={() => setIsOpen(false)}
              >
                Join Beta
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;