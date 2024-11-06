"use client";

import { Search, Heart, ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export const experimental_ppr = true;

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { state } = useCart();

  const cartItemsCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Exclusive
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="link-underline">
            Home
          </Link>
          <Link href="/contact" className="link-underline">
            Contact
          </Link>
          <Link href="/about" className="link-underline">
            About
          </Link>
          <Link href="/auth/register" className="link-underline">
            Sign Up
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="pl-4 pr-10 py-2 rounded-md w-64 focus:outline-none focus:border-primary transition-colors bg-gray-100"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-black w-5 h-5" />
          </div>
          <button className="p-2 hover:text-primary transition-colors">
            <Heart className="w-6 h-6" />
          </button>
          <Link 
            href="/cart" 
            className="p-2 hover:text-primary transition-colors relative"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                {cartItemsCount > 99 ? '99+' : cartItemsCount}
              </span>
            )}
          </Link>
          <button
            className="p-2 hover:text-primary transition-colors md:hidden"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {showMobileMenu && (
        <div className="md:hidden bg-white shadow-lg p-4 absolute top-16 left-0 right-0 z-50">
          <div className="flex flex-col gap-4">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/auth/register" className="hover:text-primary transition-colors">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}