import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './../styles/AddRecipe.css'

const AddRecipe = ({ addRecipes }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [indgriedients, setIndgriedients] = useState("");
  const [directions, setDirections] = useState("");
  const [image, setImage] = useState("");

  const router = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    router("/recipe-list");

    const newRecipe = {
      name,
      description,
      indgriedients,
      directions,
      image,
    };
    console.log(newRecipe);
    addRecipes(newRecipe);
  }
  // console.log(recipeData)

  return (
    <div>
      <div id="main-page">
        <h1>Recipe App</h1>
        <div id="content">
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Recipe Name</label>
            <br />
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              id=""
            />
            <br />
            <label htmlFor="">Description</label>
            <br />
            <input
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              name="description"
              id=""
            />
            <br />
            <label htmlFor="">Indgriedients</label>
            <br />
            <textarea
              onChange={(e) => setIndgriedients(e.target.value)}
              type="text"
              name="Indgriedients"
              id=""
            />
            <br />
            <label htmlFor="">Directions</label>
            <br />
            <textarea
              onChange={(e) => setDirections(e.target.value)}
              type="text"
              name="Directions"
              id=""
            />
            <br />
            <label htmlFor="">Image</label>
            <br />
            <input
              onChange={(e) => setImage(e.target.value)}
              type="text"
              name="Image"
            />
            <br />
            <input type="submit" name="" id="" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
