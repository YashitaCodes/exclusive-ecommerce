import React from 'react'
import SectionBanner from '../SectionBanner'
import CategoryCard from '../CategoryCard'

const categoriesData ={
    "Phones": "/cellphone.svg",
    "Computers": "/computer.svg",
    "Smartwatch": "/smartwatch.svg",
    "Camera": "/camera.svg",
    "Headphone": "/headphone.svg",
    "Gaming": "gamepad.svg"
}

const CategoriesSection = () => {
  return (
    <section className="mt-16">
    <SectionBanner heading="Categories" subtext="Browse by Category"/>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
        {Object.entries(categoriesData).map(([category, iconPath]) => (
          <CategoryCard
            key={category}
            icon={iconPath}
            name={category}
          />
        ))}
      </div>
      <hr className='mt-10'/>
    </section>
  )
}

export default CategoriesSection