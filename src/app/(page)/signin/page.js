"use client"
import Input from '@/common/Input'
import Link from 'next/link'
import React, { useState } from 'react'

function SignIn() {
  const [formLogin, setFormLogin] = useState({
    name: "",
    email: "",
    geolocation: "",
    password: ""
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formLogin, "formdata")
  }
  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{
        backgroundImage:
          'url("https://static.vecteezy.com/system/resources/previews/002/267/790/large_2x/veggie-and-non-veggie-pizza-combo-on-wooden-background-free-photo.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-md   dark:bg-gray-900  bg-white rounded-xl shadow-lg px-8 py-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-5">
            <Input
              label="Name"
              placeholder="Name"
              value={formLogin.name}
              onChange={(e) => setFormLogin({ ...formLogin, name: e.target.value })}
              required
            />
            <Input
              label="Email"
              type='email'
              placeholder="Email"
              value={formLogin.email}
              onChange={(e) => setFormLogin({ ...formLogin, email: e.target.value })}
              required
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter password"
              value={formLogin.password}
              onChange={(e) => setFormLogin({ ...formLogin, password: e.target.value })}
              required
            />
            <Input
              label="Address"
              type="text"
              placeholder="enter your address"
              value={formLogin.geolocation}
              onChange={(e) => setFormLogin({ ...formLogin, geolocation: e.target.value })}
              required
            />
          </div>
          <div className='flex justify-between items-center'>
            <button
              type="submit"
              className="mt-6 cursor-pointer  px-4 bg-blue-500  bg-gradient-to-r to-orange-600 via-red-500 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Submit
            </button>

            <Link href={"/login"}  ><button
              className="mt-6   bg-blue-500 px-4 cursor-pointer bg-gradient-to-r to-orange-600 via-red-500 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Already a User?
            </button></Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn