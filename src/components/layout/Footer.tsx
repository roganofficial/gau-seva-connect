import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Heart, Mail, Phone, MapPin } from "lucide-react";
const Footer = () => {
  return <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gaushala-saffron-400">
              गौ सेवा Connect
            </h3>
            <p className="text-gray-400 mb-4">
              Dedicated to the protection and welfare of cows, providing shelter, food, and medical care to these sacred animals.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/initiatives" className="text-gray-400 hover:text-white transition-colors">Our Initiatives</Link>
              </li>
              <li>
                <Link to="/transparency" className="text-gray-400 hover:text-white transition-colors">Transparency</Link>
              </li>
              <li>
                <Link to="/donors" className="text-gray-400 hover:text-white transition-colors">Donor Recognition</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Support Us</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/donate" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Heart size={18} /> Donate
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Heart size={18} /> Volunteer
                </Link>
              </li>
              <li>
                
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 text-gaushala-saffron-400" />
                <span className="text-gray-400">123 Gaushala Road, Village Name, District, State - PIN Code</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-gaushala-saffron-400" />
                <a href="tel:+911234567890" className="text-gray-400 hover:text-white transition-colors">+91 12345 67890</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-gaushala-saffron-400" />
                <a href="mailto:info@gauseva-connect.org" className="text-gray-400 hover:text-white transition-colors">info@gauseva-connect.org</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} गौ सेवा Connect. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;