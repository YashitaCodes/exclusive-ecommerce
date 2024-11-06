"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Package, Heart, Clock, CreditCard, User } from 'lucide-react';

export default function AccountPage() {
  const [profileImage, setProfileImage] = useState('/placeholder-avatar.jpg');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center gap-8 mb-8">
        <div className="relative w-24 h-24">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
          <Button
            variant="outline"
            size="icon"
            className="absolute bottom-0 right-0 rounded-full"
            onClick={() => {
              // Handle image upload
            }}
          >
            <User className="w-4 h-4" />
          </Button>
        </div>
        <div>
          <h1 className="text-3xl font-bold">John Doe</h1>
          <p className="text-gray-500">john@example.com</p>
        </div>
      </div>

      <Tabs defaultValue="orders" className="space-y-8">
        <TabsList>
          <TabsTrigger value="orders" className="flex items-center gap-2">
            <Package className="w-4 h-4" /> Orders
          </TabsTrigger>
          <TabsTrigger value="wishlist" className="flex items-center gap-2">
            <Heart className="w-4 h-4" /> Wishlist
          </TabsTrigger>
          <TabsTrigger value="history" className="flex items-center gap-2">
            <Clock className="w-4 h-4" /> History
          </TabsTrigger>
          <TabsTrigger value="payment" className="flex items-center gap-2">
            <CreditCard className="w-4 h-4" /> Payment Methods
          </TabsTrigger>
        </TabsList>

        <TabsContent value="orders" className="space-y-4">
          <div className="grid gap-4">
            {/* Sample Order */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Order #12345</h3>
                  <p className="text-sm text-gray-500">Placed on March 15, 2024</p>
                </div>
                <Button variant="outline">Track Order</Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="wishlist">
          <div className="grid grid-cols-4 gap-6">
            {/* Wishlist items will be rendered here */}
          </div>
        </TabsContent>

        <TabsContent value="history">
          <div className="space-y-4">
            {/* Order history will be rendered here */}
          </div>
        </TabsContent>

        <TabsContent value="payment" className="space-y-6">
          <div className="grid gap-4">
            <div className="border rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <CreditCard className="w-6 h-6" />
                <div>
                  <p className="font-medium">•••• •••• •••• 4242</p>
                  <p className="text-sm text-gray-500">Expires 12/24</p>
                </div>
              </div>
              <Button variant="outline">Remove</Button>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Add New Card</h3>
            <div className="grid gap-4">
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
              <Button>Add Card</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}