import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Button from "../layouts/Button";

const DishesCard = (props) => {
  return (
    <div className="w-full lg:w-1/4 p-5 rounded-lg shadow-md bg-white transition-all duration-300 
      hover:shadow-2xl hover:translate-y-[-5px]">
      <img className="rounded-xl w-full h-40 object-cover" src={props.img} alt="img" />
      <div className="space-y-4">
        <h3 className="font-semibold text-center text-xl pt-6">{props.title}</h3>
        <div className="flex flex-row justify-center">
          <BsStarFill className="text-yellow-500" />
          <BsStarFill className="text-yellow-500" />
          <BsStarFill className="text-yellow-500" />
          <BsStarFill className="text-yellow-500" />
          <BsStarHalf className="text-yellow-500" />
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <h3 className="font-semibold text-lg">{props.price}</h3>
          {/* {<Button title="Buy Now" />} */}
        </div>
      </div>
    </div>
  );
};

export default DishesCard;
