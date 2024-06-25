import { useNavigate, useParams } from "react-router-dom";

function SingleRecipe({ recipes }) {
  const router = useNavigate();
  const { id } = useParams();
  const recipe = recipes[id];
  console.log(recipe);

  return (
    <div className="detail">
      <div className="titldesc1">
        <h1>
          <u>{recipe.name}</u>
        </h1>
        <p>{recipe.description}</p>
      </div>
      <img src={recipe.image} alt="{recipe.image}" />
      <div className="ingredprepsteps1">
        <h3>InGredients</h3>
        <p>{recipe.indgriedients}</p>
        <h3>Preperation Steps</h3>
        <p>{recipe.directions}</p>
      </div>
      <div className="detailsbuttons">
        <button onClick={() => router("/")}></button>
        <button onClick={() => router("/recipe-list")}></button>
      </div>
    </div>
  );
}

export default SingleRecipe;
