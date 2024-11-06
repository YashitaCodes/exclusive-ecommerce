"use client";

import { Heart, Eye, Star, Check } from "lucide-react";
import Image from "next/image";
import { useState } from 'react';
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  image: string;
  isNew?: boolean;
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  discount,
  rating,
  reviews,
  image,
  isNew,
}: ProductCardProps) {
  const { dispatch } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    if (isAdded) return;
    
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id,
        name,
        price,
        image,
        quantity: 1,
      },
    });
    
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="product-card group relative">
      <div className="relative aspect-square rounded overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {discount && (
            <span className="bg-primary text-white px-3 py-1 text-sm font-medium rounded">
              -{discount}%
            </span>
          )}
          {isNew && (
            <span className="bg-green-500 text-white px-3 py-1 text-sm font-medium rounded">
              NEW
            </span>
          )}
        </div>
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-sm">
            <Heart className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-sm">
            <Eye className="w-4 h-4" />
          </button>
        </div>
        <button 
          onClick={handleAddToCart}
          className={`
            absolute bottom-0 left-0 right-0 py-3 text-center
            transition-all duration-300 ease-in-out
            flex items-center justify-center gap-2
            ${isAdded 
              ? 'bg-green-500 text-white cursor-default' 
              : 'bg-black text-white cursor-pointer hover:bg-opacity-85 opacity-0 group-hover:opacity-100'
            }
          `}
        >
          {isAdded ? (
            <>
              <Check className="w-4 h-4" />
              Added to cart
            </>
          ) : (
            'Add to Cart'
          )}
        </button>
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="font-medium line-clamp-1">{name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-primary font-semibold">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-gray-400 line-through text-sm">${originalPrice.toFixed(2)}</span>
          )}
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"
              }`}
            />
          ))}
          <span className="text-sm text-gray-500 ml-1">({reviews})</span>
        </div>
      </div>
    </div>
  );
}