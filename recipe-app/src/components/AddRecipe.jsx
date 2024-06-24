import React, { useState } from "react";

const AddRecipe = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [Indgriedients, setIndgriedients] = useState("");
  const [directions, setDirections] = useState("");
  const [image, setImage] = useState("");


  

  return (
    <div>
      <div id="main-page">
        <div id="content">
          <label htmlFor="">Recipe Name</label>
          <br />
          <input type="text" name="name" id="" />
          <br />
          <label htmlFor="">Description</label>
          <br />
          <input type="text" name="name" id="" />
          <br />
          <label htmlFor="">Indgriedients</label>
          <br />
          <input type="text" name="name" id="" />
          <br />
          <label htmlFor="">Directions</label>
          <br />
          <input type="text" name="name" id="" />
          <br />
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
