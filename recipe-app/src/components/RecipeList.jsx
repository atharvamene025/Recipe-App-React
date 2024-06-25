import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeList = ({ recipes }) => {
  const router = useNavigate();

  return (
    <div id="mainlist">
      <div className="list-container">
        {recipes.map((recipe, index) => (
          <div key={index} className="lists">
            <div onClick={()=>router(`/recipe-details/${index}`)} className="name">
              <h1>{recipe.name}</h1>
              <br />
              <img style={{height:"300px"}}
            
                src={recipe.image}
                alt="{recipe.title}"
              />
              <div className="description">
                <p>{recipe.description}</p>
              </div>
            </div>
          </div>
        ))}

        <button onClick={()=>router("/")}>Add More Recipies</button>
      </div>
    </div>
  );
};

export default RecipeList;
