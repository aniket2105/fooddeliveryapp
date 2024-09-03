// app/cart/page.js
'use client';

import Image from 'next/image';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
console.log(cart);
  const total = cart?.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleQuantityChange = (id, qty) => {
    if (qty < 1) return;
    updateQuantity(id, qty);
  };

  if (cart.length === 0) {
    return <div className="text-center">Your cart is empty.</div>;
  }

  return (
    <div className='container mx-auto'>
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <ul>
        {cart?.map((item) => (
          <li key={item.id} className="flex items-center mb-4">
            {/* <Image src={item?.image} alt={item.foodName} width={100} height={80} className="object-cover rounded" /> */}
            <div className="ml-4 flex-1">
              <h2 className="text-xl">{item.foodName}</h2>
              <p>${item.price.toFixed(2)}</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  className="px-2 py-1 bg-gray-200 rounded-l"
                >
                  -
                </button>
                <span className="px-4 py-1 border-t border-b">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  className="px-2 py-1 bg-gray-200 rounded-r"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="ml-4 text-red-500"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="text-right mt-4">
        <h2 className="text-2xl font-semibold">Total: ${total.toFixed(2)}</h2>
        <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}





// import { menuItems } from "../data";

// export default function MenuPage() {
//   return (
//     <div>
//       <h1>Menu</h1>
//       <ul>
//         {menuItems.map(item => (
//           <li key={item.id}>{item.name} - ${item.price}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
