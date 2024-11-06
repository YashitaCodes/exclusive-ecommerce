import React from 'react'
import { Button } from '../ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from '../ProductCard'

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

const FeaturedProducts: React.FC<ProductProps> = ({products}) => {
  return (
    <section className="mt-16">
      <div className="flex items-end mb-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex justify-start items-center mr-auto">
              <div className="bg-primary w-5 h-8 rounded-lg mr-4" />
              <span className="text-primary font-bold">Our Products</span>
            </div>
            <h2 className="text-3xl font-bold">Explore Our Products</h2>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <button className="p-2 rounded-full transition-colors bg-gray-50 cursor-not-allowed">
              <ChevronLeft className="w-5 h-5 text-black" />
            </button>
            <button className="p-2 rounded-full transition-colors bg-gray-50 cursor-not-allowed">
              <ChevronRight className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
        {products.map((product: any, index: number) => (
          <ProductCard
              key={product.id}
              name={product.title}
              price={product.price}
              rating={Math.floor(product.rating.rate)}
              reviews={product.rating.count}
              image={product.image}
              isNew={Math.random() < 0.2}
          />
         ))}
        </div>
        <Button className='flex mt-16 mx-auto px-7'>View All Products</Button>
      </section>
  )
}

export default FeaturedProducts