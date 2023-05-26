import React from "react";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  // console.log(chef.id);
  // console.log({`/chef/:${chef.id}`})
  return (
    <div className="rounded-xl shadow border border-b-warning hover:border-2 hover:shadow-md">
      <div>
        <img className="object-cover rounded-md" src={chef.image} alt="" />
        <div className="flex justify-between items-center px-4">
          <div>
            <h4 className="font-semibold">{chef.name}</h4>
            <p>Experience: {chef.experience}</p>
            <p>Recipe: {chef.recipe}</p>
            <p>Likes: {chef.likes}</p>
          </div>
          <div className="">
            <Link
              className="border border-warning px-3 py-1 hover:bg-warning rounded-md text-sm "
              to={`/chefdata/${chef?.id}`}
            >
              View Recipe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
