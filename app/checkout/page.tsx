"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CreditCard, Truck } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const SHIPPING_COST = 10.00;

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const { state } = useCart();

  const subtotal = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const total = subtotal + SHIPPING_COST;

  const handlePlaceOrder = () => {
    // Order processing logic wasn't defined in the requirements google docs or the figma file so just a console log
    // Please note however that console logging anything like this isn't best practice
    console.log('Processing order...');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-8">
          {/* Shipping Information */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Shipping Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="col-span-2 space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="123 Main St" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="New York" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zipCode">ZIP Code</Label>
                <Input id="zipCode" placeholder="10001" />
              </div>
            </div>
          </section>

          {/* Payment Method */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Payment Method</h2>
            <RadioGroup
              value={paymentMethod}
              onValueChange={setPaymentMethod}
              className="grid grid-cols-2 gap-4"
            >
              <div className={`border rounded-lg p-4 cursor-pointer ${
                paymentMethod === 'card' ? 'border-primary' : ''
              }`}>
                <RadioGroupItem value="card" id="card" className="sr-only" />
                <Label
                  htmlFor="card"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <CreditCard className="w-5 h-5" />
                  Credit Card
                </Label>
              </div>
              <div className={`border rounded-lg p-4 cursor-pointer ${
                paymentMethod === 'cash' ? 'border-primary' : ''
              }`}>
                <RadioGroupItem value="cash" id="cash" className="sr-only" />
                <Label
                  htmlFor="cash"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Truck className="w-5 h-5" />
                  Cash on Delivery
                </Label>
              </div>
            </RadioGroup>

            {paymentMethod === 'card' && (
              <div className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="0000 0000 0000 0000" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" />
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>

        {/* Order Summary */}
        <div className="h-fit p-6 border rounded-lg space-y-4">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          
          <div className="space-y-4">
            {/* Display cart items */}
            <div className="space-y-2">
              {state.items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.name} × {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${SHIPPING_COST.toFixed(2)}</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <Button 
            className="w-full" 
            onClick={handlePlaceOrder}
            disabled={state.items.length === 0}
          >
            Place Order
          </Button>
        </div>
      </div>
    </div>
  );
}