import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='text-white  sticky top-0 z-50 bg-gradient-to-r from-blue-600 via-red-500 to-orange-700 body-font'>
          <div className='flex flex-wrap md:flex-row items-center p-3 '>
          <Link
          href={"/"}
          className='flex  font-extrabold uppercase items-center  ' >

          <Image className='rounded-4xl'
            alt="navbar" src={"/images/headerLogo.jpg"}
            width={60} height={60} />

          <p className=' leading-5  text-xl mx-2'>Pizza Wizza</p>

        </Link>
        <p>CopyRight © 2025 Pizza Wizza</p>
          </div>
      
    </div>
  )
}

export default Footer