"use client"
import Card from '@/components/home/Card'
import CarouselView from '@/components/home/Carousel'
import React, { useEffect, useState } from 'react'
import cardData from '../../../src/data/cardData'

function page() {
const [categoryFood,setCategoryFood] =useState([])
console.log(categoryFood,"categoryFood")

  let categories = new Set()
  const foodData = []
  const handleData = () => {
    cardData.map((data) => {
      return foodData.push(data), categories.add(data.category)
    })

    setCategoryFood([...categories])
 
  }

  useEffect(() => {
    handleData()
  }, [])

  return (
    <div>
      <CarouselView />
 {categoryFood.map((category)=>{
return <><div className='text-4xl mt-10 mb-3 font-bold'>
{category}
</div>
<hr/>
<div className='flex flex-col items-center justify-center'>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
    {
      foodData.filter((foodData)=> category ===foodData.category).map((data)=>{
        return <Card key={data} foodData={data} />

      })

      
    }

  </div>

</div>
</> 
})}
     
    </div>
  )
}

export default page