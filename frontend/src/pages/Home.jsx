import React, { useState } from "react";
import { FaHeart, FaShoppingCart, FaUser, FaSun, FaMoon, FaCheck } from "react-icons/fa";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
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

  const products = Array.from({ length: 8 }, (_, i) => ({ id: i + 1, name: `Product ${i + 1}` }));

  return (
    <div className={darkMode ? "dark bg-zinc-900 text-white min-h-screen" : "bg-[#f2d6dc] text-gray-800 min-h-screen"}>
      <div className="max-w-6xl mx-auto p-4">
        {/* Top Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Collectos</h1>
          <div className="flex items-center gap-4">
            <input type="text" placeholder="Search" className="p-2 rounded-md border" />
            <FaHeart className="cursor-pointer" />
            <FaShoppingCart className="cursor-pointer" />
            <FaUser className="cursor-pointer" />
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="flex justify-between items-center border-b py-2">
          <div className="flex gap-6">
            <a href="#" className="hover:underline font-semibold">Home</a>
            <a href="#" className="hover:underline">Shop</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact Us</a>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-sm border px-2 py-1 rounded"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Banner */}
        <section className="flex items-center justify-between px-6 py-10 bg-pink-300 dark:bg-zinc-800 rounded-md mx-4 mt-4">
            <div className="text-2xl font-semibold">Explore the Collections</div>
            <div className="w-2/5 h-40 bg-white dark:bg-zinc-700 rounded-xl flex justify-center items-center">
                <div className="text-xl font-medium">Image</div>
            </div>
        </section>

        <br /><br />

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="relative border rounded-xl p-6 shadow-sm bg-pink-50 dark:bg-pink-200 hover:shadow-xl transition duration-300 ease-in-out">
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
  );
};

export default Home;