
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-gaushala-green-600">
            गौ सेवा <span className="text-gaushala-saffron-500">Connect</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium text-gray-700 hover:text-gaushala-green-500 transition-colors">
            Home
          </Link>
          <Link to="/about" className="font-medium text-gray-700 hover:text-gaushala-green-500 transition-colors">
            About Us
          </Link>
          <Link to="/initiatives" className="font-medium text-gray-700 hover:text-gaushala-green-500 transition-colors">
            Our Initiatives
          </Link>
          <Link to="/transparency" className="font-medium text-gray-700 hover:text-gaushala-green-500 transition-colors">
            Transparency
          </Link>
          <Link to="/donors" className="font-medium text-gray-700 hover:text-gaushala-green-500 transition-colors">
            Donor Recognition
          </Link>
          <Link to="/contact" className="font-medium text-gray-700 hover:text-gaushala-green-500 transition-colors">
            Contact Us
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/donate">
            <Button className="bg-gaushala-saffron-500 hover:bg-gaushala-saffron-600 text-white">
              Donate Now
            </Button>
          </Link>
          <Link to="/volunteer">
            <Button variant="outline" className="border-gaushala-green-500 text-gaushala-green-500 hover:bg-gaushala-green-50">
              Volunteer
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md text-gray-700"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              to="/"
              className="px-4 py-2 font-medium text-gray-700 hover:text-gaushala-green-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 font-medium text-gray-700 hover:text-gaushala-green-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/initiatives"
              className="px-4 py-2 font-medium text-gray-700 hover:text-gaushala-green-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Initiatives
            </Link>
            <Link
              to="/transparency"
              className="px-4 py-2 font-medium text-gray-700 hover:text-gaushala-green-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Transparency
            </Link>
            <Link
              to="/donors"
              className="px-4 py-2 font-medium text-gray-700 hover:text-gaushala-green-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Donor Recognition
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 font-medium text-gray-700 hover:text-gaushala-green-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <div className="flex flex-col gap-3 mt-2">
              <Link to="/donate" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-gaushala-saffron-500 hover:bg-gaushala-saffron-600 text-white">
                  Donate Now
                </Button>
              </Link>
              <Link to="/volunteer" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full border-gaushala-green-500 text-gaushala-green-500 hover:bg-gaushala-green-50">
                  Volunteer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
