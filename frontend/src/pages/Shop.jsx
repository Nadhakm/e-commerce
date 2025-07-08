import React, { useState } from "react";
import {
  FaHeart,
  FaShoppingCart,
  FaSun,
  FaMoon,
  FaUser,
  FaFilter,
  FaSortAlphaDown,
  FaCheck,
} from "react-icons/fa";

const Shop = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleCart = (id) => {
    setCart((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const products = Array.from({ length: 12 }, (_, i) => ({ id: i + 1, name: `Product ${i + 1}` }));

  return (
    <div className={darkMode ? "dark bg-zinc-900 text-white min-h-screen" : "bg-[#f2d6dc] text-gray-800 min-h-screen"}>
      <div className="max-w-7xl mx-auto p-4 transition-all duration-300 flex">
        {/* Sidebar Filter Panel */}
        {showFilter && (
          <div className="w-64 bg-white dark:bg-zinc-800 border-r border-gray-300 dark:border-gray-600 p-4 space-y-4">
            <div className="text-sm font-semibold text-right cursor-pointer text-blue-500" onClick={() => setShowFilter(false)}>
              HIDE FILTERS ↑
            </div>
            {['Collection', 'Scale', 'Brand', 'Price', 'Rating'].map((filter, i) => (
              <div key={i} className="text-sm border-b py-2 cursor-pointer flex justify-between">
                <span>{filter}</span> <span>+</span>
              </div>
            ))}
          </div>
        )}

        <div className={`flex-1 px-4 ${showFilter ? 'ml-4' : ''}`}>
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Collectos</h1>
            <div className="flex items-center gap-4">
              <input type="text" placeholder="Search" className="p-2 rounded-md border dark:bg-zinc-700" />
              <FaHeart className="cursor-pointer" />
              <FaShoppingCart className="cursor-pointer" />
              <FaUser className="cursor-pointer" />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center border-b py-2">
            <div className="flex gap-6">
              <a href="#" className="hover:underline">Home</a>
              <a href="#" className="hover:underline font-semibold">Shop</a>
              <a href="#" className="hover:underline">About</a>
              <a href="#" className="hover:underline">Contact</a>
            </div>
            <button onClick={() => setDarkMode(!darkMode)} className="text-sm border px-2 py-1 rounded">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          {/* Filter & Sort Bar */}
          <div className="flex justify-between items-center py-4">
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="flex items-center gap-2 text-sm bg-pink-200 dark:bg-zinc-700 px-3 py-1 rounded"
            >
              <FaFilter /> Filter
            </button>

            <div className="relative">
              <button
                onClick={() => setShowSort(!showSort)}
                className="flex items-center gap-2 text-sm bg-pink-200 dark:bg-zinc-700 px-3 py-1 rounded"
              >
                <FaSortAlphaDown /> Sort
              </button>
              {showSort && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-zinc-800 rounded shadow-md py-2 z-10">
                  {['Alphabetically', 'Price', 'Newest'].map((option, i) => (
                    <div key={i} className="px-4 py-2 hover:bg-pink-100 dark:hover:bg-zinc-600 cursor-pointer">
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Product Grid */}
          <h2 className="text-xl font-bold mb-4 text-center">All Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative border rounded-xl p-6 shadow-sm bg-pink-50 dark:bg-pink-200 hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-2 right-2 text-xl"
                >
                  {wishlist.includes(product.id) ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaHeart className="text-gray-400" />
                  )}
                </button>
                <div className="text-center py-6">{product.name}</div>
                <button
                  onClick={() => toggleCart(product.id)}
                  className="absolute bottom-2 right-2 text-xl"
                >
                  {cart.includes(product.id) ? (
                    <FaCheck className="text-green-500" />
                  ) : (
                    <FaShoppingCart className="text-gray-600" />
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="flex justify-around text-center my-8 text-sm">
            <div>Fast Delivery</div>
            <div>Secure Payment</div>
            <div>Quality Package</div>
          </div>

          {/* Footer */}
          <footer className="flex justify-between items-center px-6 py-4 border-t border-gray-300 dark:border-gray-700 text-sm">
            <div className="space-x-6">
              <a href="#" className="hover:underline">Contact Us</a>
              <a href="#" className="hover:underline">Help</a>
            </div>
            <span className="text-center">© 2025 Collectos</span>
            <div>
              <a href="#" className="hover:underline">Social Networks</a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Shop;
