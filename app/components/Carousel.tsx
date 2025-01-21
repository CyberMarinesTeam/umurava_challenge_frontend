"use client";

import React, { useState } from "react";

interface CarouselProps {
  slides: string[]; // Array of image URLs or text
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      <div className="flex items-center justify-between">
        <button
          className="text-2xl p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          onClick={goToPrevious}
        >
          ❮
        </button>
        <div className="flex-grow text-center">
          <div
            className="transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <p
                key={index}
                className="text-xl font-semibold p-4"
                style={{
                  display: "inline-block",
                  width: "100%",
                }}
              >
                {slide}
              </p>
            ))}
          </div>
        </div>
        <button
          className="text-2xl p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          onClick={goToNext}
        >
          ❯
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
