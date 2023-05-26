import React from "react";

const RecipeCard = ({ chefRecipe }) => {
  const { name, ingredients, instructions } = chefRecipe;
  return (
    <div className="border-b-2 border-gray-400 rounded shadow p-2 space-y-2 my-3">
      <h4>
        <span className="font-semibold mr-2 underline">Recipe Name:</span>
        {name}
      </h4>
      <p>
        <span className="font-semibold mr-1">Ingredients:</span>
        <small>{ingredients}</small>
      </p>
      <p>
        <span className="font-semibold mr-1">Instructions:</span>
        <small>{instructions}</small>
      </p>
    </div>
  );
};

export default RecipeCard;
