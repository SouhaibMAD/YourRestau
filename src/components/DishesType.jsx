import React from "react";
import { useLocation, Link } from "react-router-dom";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";
import DishesCard from "../layouts/DishesCard";

// Dishes data categorized by type
const dishesData = {
  spicy: [img1, img2, img3],
  tasty: [img4, img5, img6],
  delicious: [img1, img5, img6],
  crispy: [img2, img3, img4],
};

// Custom hook to get query params from the URL
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const DishesType = () => {
  const query = useQuery();
  const type = query.get("type") || "spicy"; // Default to 'spicy' if no type is provided
  const selectedDishes = dishesData[type] || [];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10 capitalize">
        {type} Dishes
      </h1>

      <div className="flex flex-wrap gap-8 justify-center">
        {selectedDishes.length > 0 ? (
          selectedDishes.map((img, index) => (
            <DishesCard key={index} img={img} title={`${type} Dish`} price="$10.99" />
          ))
        ) : (
          <p className="text-gray-600">No dishes available for this category.</p>
        )}
      </div>

      <div className="mt-10">
        <Link to="/" className="bg-brightColor text-white px-6 py-2 rounded-lg">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default DishesType;
