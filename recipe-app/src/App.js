import "./App.css";
import { Route, Routes } from "react-router-dom";
import AddRecipe from "./components/AddRecipe";
import { useState } from "react";
import RecipeList from "./components/RecipeList";
import SingleRecipe from "./components/SingleRecipe";

function App() {
  const [recipes, setRecipes] = useState([]);

  const addRecipes = (recipe) => {
    setRecipes([...recipes, recipe]);
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AddRecipe addRecipes={addRecipes} />} />
        <Route path="/recipe-list" element={<RecipeList recipes={recipes} />} />
        <Route path="/recipe-details/:id" element={<SingleRecipe recipes={recipes} />} />
      </Routes>
    </div>
  );
}

export default App;
