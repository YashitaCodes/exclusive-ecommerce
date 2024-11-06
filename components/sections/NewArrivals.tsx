import React from 'react'
import BentoGrid from '../BentoGrid'

const NewArrivals = () => {
  return (
    <section className='mt-32'>
        <div className="flex items-end mb-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex justify-start items-center mr-auto">
              <div className="bg-primary w-5 h-8 rounded-lg mr-4" />
              <span className="text-primary font-bold">Featured</span>
            </div>
            <h2 className="text-3xl font-bold">New Arrivals</h2>
          </div>
        </div>
        <BentoGrid />
        
    </section>
  )
}

export default NewArrivals