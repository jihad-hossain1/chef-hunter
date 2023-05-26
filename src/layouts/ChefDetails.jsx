import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "./chefRecipe/RecipeCard";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
// import 'react-toastify/dist/ReactToastify.css';

const ChefDetails = () => {
  const chefdata = useLoaderData();
  const [bookmarked, setBookmarked] = useState(true);
  const handleBookMark = () => {
    setBookmarked(!bookmarked);
    if (bookmarked) {
      toast.success("Successfully bookmarked");
    }
  };
  console.log(chefdata);
  return (
    <div className="grid md:grid-cols-2 gap-3 border border-gray-400 shadow-md rounded-md m-5">
      <div>
        <div>
          <img src={chefdata.image} className="rounded-br-md" alt="" />
          <button
            onClick={handleBookMark}
            disabled={!bookmarked}
            className="border border-gray-300 p-2 rounded shadow"
          >
            {bookmarked ? (
              <FaRegBookmark></FaRegBookmark>
            ) : (
              <FaBookmark className="text-gray-600"></FaBookmark>
            )}
          </button>
          <Toaster />
        </div>
        <div className="ml-2 p-2">
          <h3 className="font-semibold text-xl">{chefdata.name}</h3>
          <p>
            <span className="font-semibold mr-2">Experience:</span>
            {chefdata.experience}
          </p>
          <p>
            <span className="font-semibold mr-2">Recipe:</span>
            {chefdata.recipe}
          </p>
          <p>
            <span className="font-semibold mr-2">Likes:</span>
            {chefdata.likes}
          </p>
          <p>
            <span className="font-semibold mr-2">Rating:</span>
            {chefdata.rating}
          </p>
          <p>
            <span className="font-semibold mr-2">Chef Bio: </span>
            <small>{chefdata.chef_bio}</small>
          </p>
        </div>
      </div>
      <div>
        <h4 className="text-center text-3xl my-4 font-semibold underline text-gray-600">
          Special Recipe
        </h4>
        {chefdata.recipe_name.map((chefRecipe, index) => (
          <RecipeCard key={index} chefRecipe={chefRecipe}></RecipeCard>
        ))}
      </div>
    </div>
  );
};

export default ChefDetails;
