import React from "react";
import recipe from "../api/recipe.json";

const MyRecepies = () => {
  const data = recipe;

  const recipeList = {
    allRecipeInfo: [],
  };

  if (data) {
    recipeList.allRecipeInfo = data.recipe.map((r) => ({
      recipeTitle: r.title,
      recipeDescription: r.description,
    }));
  }

  return (
    <div
      style={{
        textAlign: "left",
        padding: "15px",
        backgroundColor: "#DDE5F8",
        margin: "10px",
      }}
    >
      <h3>My Recipes</h3>
      {recipeList.allRecipeInfo.map((item) => {
        return <h5 key={item.recipeTitle}>{item.recipeTitle}</h5>;
      })}
    </div>
  );
};

export default MyRecepies;
