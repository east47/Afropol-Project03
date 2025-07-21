import React from 'react';
import { MapPin, Users, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Us</h1>
            <nav className="flex justify-center space-x-2 text-gray-600">
              <span>Home</span>
              <span>/</span>
              <span className="text-amber-600">About us</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Afropol Fine Foods is a family run business based in Central London. We supply high quality fine food 
                  products to the restaurant, wholesale and retail sectors.
                </p>
                
                <p>
                  Our main products are a full range of high quality nuts and dried fruit including pistachios, almonds, cashews, 
                  walnuts, hazelnuts, pecans, pine nuts and macadamias as well as raisins, sultanas, apricots, figs, 
                  cranberries and cherries. In addition, we offer a selected range of seeds and grains including pumpkin seeds, 
                  sunflower seeds, sesame seeds and quinoa.
                </p>
                
                <p>
                  We also offer selected dry store items for restaurants and caterers including a range of chocolates, sugars 
                  and oils.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={32} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Central London</h3>
              <p className="text-gray-600">Based in the heart of London's food district</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Family Business</h3>
              <p className="text-gray-600">Trusted family-run operation with personal service</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600">BRC accredited with SALSA certification</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe size={32} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Sourcing</h3>
              <p className="text-gray-600">Premium ingredients from worldwide suppliers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;