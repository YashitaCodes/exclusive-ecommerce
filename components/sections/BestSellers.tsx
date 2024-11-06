'use client';

import React, { useRef, useState, useEffect } from 'react';
import ProductCard from '../ProductCard';
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

interface ProductProps {
  products: Product[];
}

const BestSellers: React.FC<ProductProps> = ({ products }) => {

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
    <section className="mt-28">
      <div className="flex items-end mb-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex justify-start items-center mr-auto">
            <div className="bg-primary w-5 h-8 rounded-lg mr-4"/>
            <span className="text-primary font-bold">This Month</span>
          </div>
          <h2 className="text-3xl font-bold">Best Selling Products</h2>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <Button>
            View All
          </Button>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="grid grid-flow-col auto-cols-[minmax(250px,_1fr)] gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        onScroll={checkScrollability}
      >
        {products.map((product) => (
          <div key={product.id} className="snap-start">
            <ProductCard
              name={product.title}
              price={product.price}
              originalPrice={product.price * 1.2}
              rating={Math.floor(product.rating.rate)}
              reviews={product.rating.count}
              image={product.image}
              isNew={false}
            />
          </div>
        ))}
      </div>
      {/* <Button className='flex mt-16 mx-auto px-7'>View All Products</Button> */}
      <hr className='mt-10'/>
    </section>
  );
};

export default BestSellers;