"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Make sure to import carousel styles

function CarouselView() {
  return (
    <div className="w-full relative">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
        transitionTime={700}
        swipeable
        emulateTouch
        className="rounded-2xl overflow-hidden shadow-lg"
      >
        {/* Slide 1 */}
        <div className="relative h-[36rem]">
          <img
            src="https://foodoncall.co.in/wp-content/uploads/2017/09/italian.jpg"
            alt="pizza"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-4xl font-bold drop-shadow-lg">Italian Delights</h2>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative h-[36rem]">
          <img
            src="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FRecipes%2F2020-07-how-to-make-a-milkshake-at-home%2F2020-06-08_AT-K19388"
            alt="pizza"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-4xl font-bold drop-shadow-lg">Fresh & Flavorful</h2>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative h-[36rem]">
          <img
            src="https://img.freepik.com/free-photo/delicious-sandwiches-fries-ketchup-wooden-cutting-board-dark-mix-color-surface_179666-42231.jpg?semt=ais_hybrid&w=740 "
            alt="pizza"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-4xl font-bold drop-shadow-lg">Spice It Up!</h2>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselView;
