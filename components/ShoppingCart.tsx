import React from 'react';
import { Minus, Plus, X } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartProps {
  items?: CartItem[];
  onUpdateQuantity?: (id: string, quantity: number) => void;
  onRemoveItem?: (id: string) => void;
}

const ShoppingCart = ({ 
  items = [], 
  onUpdateQuantity = () => {}, 
  onRemoveItem = () => {} 
}: CartProps) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  return (
    <div className="max-w-6xl mx-auto p-4 space-y-8">
      {/* Main Cart Table */}
      <div className="bg-white rounded-lg shadow-sm">
        <table className="w-full">
          <thead className="border-b border-gray-200">
            <tr className="text-left">
              <th className="py-4 px-6 font-medium text-gray-600">Product</th>
              <th className="py-4 px-6 font-medium text-gray-600">Price</th>
              <th className="py-4 px-6 font-medium text-gray-600">Quantity</th>
              <th className="py-4 px-6 font-medium text-gray-600 text-right">Subtotal</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {items.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="py-6 px-6">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <X size={20} />
                    </button>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <span className="font-medium text-gray-800">{item.name}</span>
                  </div>
                </td>
                <td className="py-6 px-6">
                  <span className="text-gray-800">${item.price}</span>
                </td>
                <td className="py-6 px-6">
                  <div className="flex items-center border rounded w-24">
                    <button
                      onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      className="p-2 hover:bg-gray-100"
                    >
                      <Minus size={16} />
                    </button>
                    <input
                      type="text"
                      value={String(item.quantity).padStart(2, '0')}
                      className="w-full text-center border-x"
                      readOnly
                    />
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-gray-100"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </td>
                <td className="py-6 px-6 text-right">
                  <span className="font-medium text-gray-800">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <button className="px-6 py-3 border rounded-lg hover:bg-gray-50 text-gray-800 font-medium">
          Return To Shop
        </button>
        <button className="px-6 py-3 border rounded-lg hover:bg-gray-50 text-gray-800 font-medium">
          Update Cart
        </button>
      </div>

      {/* Coupon and Cart Total */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Coupon Section */}
        <div className="flex flex-col sm:flex-row gap-4 h-min">
          <input
            type="text"
            placeholder="Coupon Code"
            className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 font-medium">
            Apply Coupon
          </button>
        </div>

        {/* Cart Total */}
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
          <h2 className="text-xl font-bold text-gray-800">Cart Total</h2>
          <div className="space-y-3 divide-y">
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Shipping:</span>
              <span className="text-gray-800">Free</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Total:</span>
              <span className="font-bold text-xl">${subtotal.toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 font-medium mt-4">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;