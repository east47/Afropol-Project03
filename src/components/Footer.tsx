import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin as LinkedIn, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold text-amber-500">
                <span className="text-amber-400">AFROPOL</span>
              </div>
              <div className="text-sm font-semibold text-amber-400 tracking-wider">FINE FOODS</div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Premium wholesale supplier of high-quality nuts, dried fruits, seeds, and grains 
              serving the restaurant, foodservice, and wholesale sectors across London and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <LinkedIn size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="/products" className="hover:text-amber-400 transition-colors">Products</a></li>
              <li><a href="/clients" className="hover:text-amber-400 transition-colors">Clients</a></li>
              <li><a href="/contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Unit 1, Avas House</p>
                  <p>Haverstock Terrace, London SW8 4AS</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-amber-400 flex-shrink-0" />
                <p>+44 (0) 20 7610 3950</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-amber-400 flex-shrink-0" />
                <p>mail@afropol.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Afropol Fine Foods. All rights reserved. Website by Square Eye Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;