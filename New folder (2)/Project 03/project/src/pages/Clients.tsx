import React from 'react';
import { Star, Award, Users, TrendingUp } from 'lucide-react';

const Clients = () => {
  const clientList = [
    'Wholesalers', 'Specialist grocers', 'Restaurant suppliers', 'Restaurants',
    'Hotels', 'Moro', 'Tamarind', 'Chutneys Mary', 'Bombay Brasserie',
    'Amaya', 'Veeraswamy', 'Jamavar', 'Bombay Bustle', 'Graze on 5th',
    'Cinnamon Group', 'Masalawala', 'Quilon', 'Dishoom Group', 'Oblix',
    'Honey & Co', 'Honey & Smoke', 'Honey Deli', 'Rocca di Lupo',
    'Gelupo', 'Olive Restaurants', 'Lott', 'Gunpowder', 'Tate Modern',
    'The Palomar', 'Zuma', 'Drunken Butler', 'Mortimer House Kitchen',
    'Scully', 'Marylebone Cricket Club', 'Delumma', 'Nathalie',
    'Isabel Mayfair', 'Urban Greens', 'Alux', 'Kazuello', 'Kue',
    'Ule Bakery'
  ];

  const stats = [
    { icon: Users, value: '70+', label: 'Restaurant Partners' },
    { icon: Star, value: '5★', label: 'Average Rating' },
    { icon: TrendingUp, value: '15+', label: 'Years Experience' },
    { icon: Award, value: 'BRC', label: 'Accredited' }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Clients</h1>
            <nav className="flex justify-center space-x-2 text-gray-600">
              <span>Home</span>
              <span>/</span>
              <span className="text-amber-600">Clients</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon size={32} className="text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Trusted by London's Finest</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We supply our fine food products to a wide range of clients in the restaurant, wholesale and retail sectors. 
              Our clients include:
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Client Categories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-amber-50 rounded-lg p-4 text-center">
                <h4 className="font-semibold text-amber-800">Wholesalers</h4>
              </div>
              <div className="bg-amber-50 rounded-lg p-4 text-center">
                <h4 className="font-semibold text-amber-800">Specialist Grocers</h4>
              </div>
              <div className="bg-amber-50 rounded-lg p-4 text-center">
                <h4 className="font-semibold text-amber-800">Restaurant Suppliers</h4>
              </div>
              <div className="bg-amber-50 rounded-lg p-4 text-center">
                <h4 className="font-semibold text-amber-800">Restaurants & Hotels</h4>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Leading Restaurant Partners</h3>
            <p className="text-gray-600 mb-6">We supply over 70 leading restaurants including:</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {clientList.slice(4).map((client, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 text-center hover:bg-amber-50 transition-colors duration-200"
                >
                  <span className="text-gray-800 font-medium">{client}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Join Our Client Family</h3>
            <p className="text-gray-600 mb-4">
              Ready to experience premium quality ingredients with reliable service? 
              Contact us today to discuss your requirements.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;