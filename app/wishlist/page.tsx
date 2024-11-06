"use client";

import { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { getProducts } from '@/lib/api';
import { Heart } from 'lucide-react';

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    getProducts(4).then((products) => {
      const productsWithIds = products.map((product, index) => ({
        ...product,
        id: product.id || `generated-id-${index}`, 
      }));
      setWishlistItems(productsWithIds);
      setLoading(false);
    });

  }, []);

  if (loading) {
    return <div className="min-h-[60vh] flex items-center justify-center">Loading...</div>;
  }

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <Heart className="w-16 h-16 text-gray-300" />
        <h2 className="text-2xl font-semibold">Your wishlist is empty</h2>
        <p className="text-gray-500">Start adding items you love to your wishlist</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
      <div className="grid grid-cols-4 gap-6">
        {wishlistItems.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.title}
            price={item.price}
            rating={Math.floor(item.rating.rate)}
            reviews={item.rating.count}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
