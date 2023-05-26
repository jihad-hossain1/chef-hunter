import { Rating } from "@smastrom/react-rating";
import React from "react";

const ReviewsCard = ({ food }) => {
  return (
    <div className="border border-t-0 border-warning rounded-xl shadow-md">
      <img className="rounded-md shadow-md" src={food.image} alt="" />
      <div className="text-center py-2">
        <h2 className="text-xl font-semibold uppercase">{food.name}</h2>
        <h3 className="my-2 text-md font-semibold">Chef: {food.chef_name}</h3>
        {/* <Rating className="w-5" value={food.rating} readOnly /> */}
        <p>Rating: {food.rating}</p>
      </div>
    </div>
  );
};

export default ReviewsCard;
