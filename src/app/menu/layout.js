"use client"; // Ensure this is at the top of the file

import { useCart } from "../context/CartContext";
import { menuItems } from "../data";

export default function MenuPage() {
  const { addToCart } = useCart();

  const handleAdd = (item) => {
    console.log("dasdakjdada");
    addToCart(item);
  };

  return (
    <div className="p-6 max-w-full mx-auto h-[calc(100vh-20vh)] overflow-y-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Menu</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden w-80 
                      transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={item.image}
              alt={item.foodName}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.foodName}</h2>
              <p className="text-gray-600 mb-4">${item.price.toFixed(2)}</p>
              <button
                onClick={() => handleAdd(item)}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
