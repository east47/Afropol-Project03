import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Globe, Truck } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Welcome to <span className="text-amber-600">Afropol Fine Foods</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Premium suppliers of high quality ingredients to the wholesale, foodservice and restaurant sectors
              </p>
              <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                We supply many London restaurants with dried food products such as nuts, dried fruit, seeds and quinoa. 
                We also pack nuts, dried fruit, seeds and spices for wholesalers and restaurant suppliers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/products"
                  className="inline-flex items-center px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Browse Our Products
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-amber-600 font-semibold rounded-lg border-2 border-amber-600 hover:bg-amber-50 transition-all duration-200 shadow-lg"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Afropol Fine Foods?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by restaurants, wholesalers, and food service providers across London and beyond
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                <Award size={32} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">BRC accredited supply with SALSA accreditation ensuring the highest food safety standards</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                <Users size={32} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted Partner</h3>
              <p className="text-gray-600">Family-run business serving over 70 leading restaurants and food service providers</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                <Globe size={32} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Sourcing</h3>
              <p className="text-gray-600">Premium ingredients sourced from the finest producers worldwide</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                <Truck size={32} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliable Service</h3>
              <p className="text-gray-600">Consistent supply and delivery to meet your business needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Please browse through our product section for more information and do not hesitate to contact us with any queries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              View Product Range
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-amber-600 transition-all duration-200 shadow-lg"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;