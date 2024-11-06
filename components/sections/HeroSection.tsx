import React from 'react'
import Carousel from '../Carousel'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type HeroSectionProps = {
    categories: string[];
  };

const HeroSection: React.FC<HeroSectionProps> = ({categories}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4 hidden md:block">
        {categories.slice().reverse().map((category, index) => (
        <button
          key={category}
          className="w-full flex items-center justify-between py-2 hover:text-primary transition-colors"
        >
          <span className="capitalize">{category}</span>
          {index < 2 && <ChevronRight className="w-5 h-5" />}
        </button>
      ))}
        </div>
        <div className="col-span-1 md:col-span-3">
          <Carousel />
        </div>
      </div>
  )
}

export default HeroSection