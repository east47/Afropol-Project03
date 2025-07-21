import React, { useState } from 'react';
import { Search, Filter, Eye } from 'lucide-react';
import { productsData } from '../data/products';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = ['All', 'Nuts', 'Dried Fruits', 'Seeds', 'Grains', 'Specialty Items'];

  // Fallback image handler
  const handleImageError = (e) => {
    e.target.src = 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400';
  };

  // Get category-specific fallback image
  const getCategoryFallbackImage = (category) => {
    const fallbackImages = {
      'Nuts': 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Dried Fruits': 'https://images.pexels.com/photos/1030842/pexels-photo-1030842.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Seeds': 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Grains': 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Specialty Items': 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400'
    };
    return fallbackImages[category] || fallbackImages['Nuts'];
  };
  const filteredProducts = productsData.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.origin.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const openProductModal = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Products</h1>
            <nav className="flex justify-center space-x-2 text-gray-600">
              <span>Home</span>
              <span>/</span>
              <span className="text-amber-600">Products</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search size={20} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Filter size={20} className="absolute left-3 top-3 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none bg-white"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => openProductModal(product)}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                  onError={handleImageError}
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <Eye size={32} className="text-white opacity-0 hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-3">Origin: {product.origin}</p>
                <p className="text-gray-700 text-sm line-clamp-3">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-amber-600 font-semibold">View Details</span>
                  <div className="flex space-x-2">
                    {product.isVegetarian && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Vegetarian</span>
                    )}
                    {product.isVegan && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Vegan</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h2>
                <button
                  onClick={closeProductModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-64 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.src = getCategoryFallbackImage(selectedProduct.category);
                    }}
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Origin</h3>
                    <p className="text-gray-700">{selectedProduct.origin}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                    <p className="text-gray-700">{selectedProduct.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Ingredients</h3>
                    <p className="text-gray-700">{selectedProduct.ingredients}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Allergen Information</h3>
                    <p className="text-gray-700">{selectedProduct.allergenInfo}</p>
                  </div>
                </div>
              </div>
              
              {/* Nutritional Information */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Nutritional Values per 100g</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    {Object.entries(selectedProduct.nutritionalValues || {}).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-1">
                        <span className="text-gray-700">{key}</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Packaging Information</h3>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <p className="text-gray-700">{selectedProduct.packaging}</p>
                    <p className="text-gray-700"><strong>Storage:</strong> {selectedProduct.storage}</p>
                    <p className="text-gray-700"><strong>Shelf Life:</strong> {selectedProduct.shelfLife}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;