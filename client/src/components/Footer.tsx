import { PawPrint, MapPin, Phone, Clock, Facebook, Instagram, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <PawPrint className="text-primary text-2xl" />
              <h3 className="text-xl font-bold">Meow Meow Pet Shop</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted pet care partner in Savar, providing quality products and loving service for your furry family members.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/8801712345678" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-primary transition-colors duration-200">Home</a></li>
              <li><a href="/products" className="text-gray-400 hover:text-primary transition-colors duration-200">Products</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-primary transition-colors duration-200">About</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-primary transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="/products?category=cat" className="text-gray-400 hover:text-primary transition-colors duration-200">Cat Food</a></li>
              <li><a href="/products?category=dog" className="text-gray-400 hover:text-primary transition-colors duration-200">Dog Food</a></li>
              <li><a href="/products?category=accessories" className="text-gray-400 hover:text-primary transition-colors duration-200">Pet Accessories</a></li>
              <li><a href="/products?category=accessories" className="text-gray-400 hover:text-primary transition-colors duration-200">Pet Toys</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Savar, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+880 1712-345678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>10AM - 10PM (Every Day)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Meow Meow Pet Shop. All rights reserved.</p>
        </div>
      </div>

      {/* Floating Messenger Button */}
      <a
        href="https://m.me/meowmeowpetshop"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-110 z-40"
      >
        <MessageSquare className="w-6 h-6" />
      </a>
    </footer>
  );
}
