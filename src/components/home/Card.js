"use client"
import React from 'react';

function Card({ foodData }) {
  console.log("iinnn")
  console.log(foodData,"dasdds")
  const priceOption = ["regular", "medium", "large"]
  return (
    <div className="p-4">
      <div className="w-80 rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
        {/* Image Section */}
        <div className="w-full h-48 border">
          <img
            src="https://www.dominos.co.in/files/items/Margherit.jpg"
            alt="pizza"
            className="w-full h-full object-center"
          />
        </div>

        {/* Text Section */}
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-1">Margherita Pizza</h3>
          <p className="text-gray-600 text-sm">
            Classic delight with 100% real mozzarella cheese.
          </p>
        </div>
        <div className="p-4 flex justify-between">

          <select className='border px-2 py-2 rounded-2xl'>
            {Array.from(Array(6), (e, i) => {
              <>
                <option value={i} key={i}>{i + 1}</option>
              </>
            })}
          </select>
          <select className='border px-2 py-2 rounded-2xl'>
            {priceOption.map((e, index) => {

              <option key={index} value={e}>{e} </option>

            })}
          </select>

        </div>
        <div className="p-4 flex justify-between">
          <button className='px-2 py-2 bg-gradient-to-r cursor-pointer from-blue-600 via-red-500 to-orange-700 rounded-lg text-white'>Add</button>
          <p>₹49/.</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
