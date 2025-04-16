"use client"
import Input from '@/common/Input'
import Link from 'next/link'
import React, { useState } from 'react'

function Login() {
  const [formLogin, setFormLogin] = useState({
    email: "",
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
          'url("https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-md   dark:bg-gray-900 bg-white rounded-xl shadow-lg px-8 py-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-5">
            <Input
            type='email'
              label="Email"
              placeholder="UserID"
              value={formLogin.email}
              onChange={(e) => setFormLogin({ ...formLogin, email: e.target.value })}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter password"
              value={formLogin.password}
              onChange={(e) => setFormLogin({ ...formLogin, password: e.target.value })}
            />
          </div>
          <div className='flex justify-between items-center'>
            <button
              type="submit"
              className="mt-6 cursor-pointer  px-4 bg-blue-500  bg-gradient-to-r to-orange-600 via-red-500 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Submit
            </button>

            <Link href={"/signin"}  ><button
              className="mt-6    px-4 cursor-pointer bg-gradient-to-r to-orange-600 via-red-500 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              New User?
            </button></Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
