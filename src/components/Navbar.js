import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GiShoppingCart } from "react-icons/gi";
import { MdOutlineLogin } from "react-icons/md";
import { BsFillSignIntersectionFill } from "react-icons/bs";


function Navbar() {
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
        <div className='md:ml-auto flex flex-wrap items-center text-base justify-center'>

          <Link href={"/cart"}
            className='mr-5 hover:text-gray-300  text-xl flex items-center'
          >Cart
            <GiShoppingCart />
            <span className=' px-2 bg-white text-black rounded-3xl'>0</span>
          </Link>

          <Link href={"/orders"}
            className='mr-5 hover:text-gray-300  text-xl flex items-center'
          >My Orders
            <GiShoppingCart />
          </Link>

          <Link href={"/login"}
            className='mr-5 hover:text-gray-300  text-xl flex items-center'
          >Login
            <MdOutlineLogin />
          </Link>
          <Link href={"/signin"}
            className='mr-5 hover:text-gray-300  text-xl flex items-center'
          >Signin
            <BsFillSignIntersectionFill />

          </Link>
        </div>

      </div>
    </div>
  )
}

export default Navbar