'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../ProductCard';
import Timer from '../Timer';
import { Button } from '../ui/button';

interface Product {
  id: number;
  title: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  image: string;
}

interface FlashSalesProps {
  products: Product[];
}

// Custom random number logic to prevent React Hydration Errors based on Pi Numbers 
// (Thought it was fun to base it on the digits of pi as a pseudo-randomisation logic)
const generatePiBasedDiscount = (index: number): number => {
  const piString = "314159265358979323846264338327950288419716939937510582097494459230781640";
  const digit = parseInt(piString[index % piString.length]);  
  return (digit * 10) + 10;
};

const FlashSales: React.FC<FlashSalesProps> = ({ products }) => {
  const [productsWithDiscounts] = useState(() => 
    products.map((product, index) => ({
      ...product,
      discount: generatePiBasedDiscount(index)
    }))
  );

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, [products]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      
      setTimeout(checkScrollability, 400);
    }
  };

  return (
    <section className="mt-5 md:mt-28">
      <div className="flex items-end mb-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex justify-start items-center mr-auto">
            <div className="bg-primary w-5 h-8 rounded-lg mr-4"/>
            <span className="text-primary font-bold">Today&apos;s</span>
          </div>
          <h2 className="text-3xl font-bold">Flash Sales</h2>
        </div>
        <div className="hidden md:flex items-center ml-20">
          <div className="ml-auto relative scale-95">
            <Timer />
          </div>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <button 
            onClick={() => scroll('left')}
            className={`p-2 rounded-full transition-colors ${
              canScrollLeft 
                ? 'bg-gray-100 hover:bg-gray-200' 
                : 'bg-gray-50 cursor-not-allowed'
            }`}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className={`w-5 h-5 ${
              canScrollLeft ? 'text-black' : 'text-gray-300'
            }`} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className={`p-2 rounded-full transition-colors ${
              canScrollRight 
                ? 'bg-gray-100 hover:bg-gray-200' 
                : 'bg-gray-50 cursor-not-allowed'
            }`}
            disabled={!canScrollRight}
          >
            <ChevronRight className={`w-5 h-5 ${
              canScrollRight ? 'text-black' : 'text-gray-300'
            }`} />
          </button>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="grid grid-flow-col auto-cols-[minmax(250px,_1fr)] gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        onScroll={checkScrollability}
      >
        {productsWithDiscounts.map((product) => (
          <div key={product.id} className="snap-start">
            <ProductCard
              id={product.id.toString()}
              name={product.title}
              price={product.price}
              originalPrice={product.price * 1.2}
              discount={product.discount}
              rating={Math.floor(product.rating.rate)}
              reviews={product.rating.count}
              image={product.image}
              isNew={false}
            />
          </div>
        ))}
      </div>
      <Button className='flex mt-16 mx-auto px-7'>View All Products</Button>
      <hr className='mt-10'/>
    </section>
  );
};

export default FlashSales;
