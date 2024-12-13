import React, { useState } from "react";

const CategoriesSection = ({ categories, onCategoryClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);  
    }
  };

  const handleNextClick = () => {
    if (currentIndex < categories.length - 1) {
      setCurrentIndex(currentIndex + 1);  
    }
  };


  const areCategoriesAvailable = categories.length > 0;

  return (
    <div className="my-8 px-4 md:px-8">


      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`, 
            }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="min-w-[280px] md:min-w-[320px] lg:min-w-[360px] bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-all cursor-pointer"
                onClick={() => onCategoryClick(category.id)}
              >
                <img
                  className="w-full h-48 object-cover rounded-md mb-4"
                  src={category.image}
                  alt={category.name}
                />
                <h3 className="text-xl font-semibold text-gray-800 text-center">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </div>


        <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4">
          <button
            className="bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700"
            onClick={handlePrevClick}
            disabled={currentIndex === 0 || !areCategoriesAvailable} 
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700"
            onClick={handleNextClick}
            disabled={currentIndex === categories.length - 1 || !areCategoriesAvailable} 
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
  