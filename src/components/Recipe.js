import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients, calories} = recipe.recipe;
  const kalori = Math.round(calories);
  // untuk mengambil data protein
  const { PROCNT } = recipe.recipe.totalNutrients;
  const Protein = Math.round(PROCNT.quantity);

  // untuk mengambil data fat
  const { FAT } = recipe.recipe.totalNutrients;
  const Fat = Math.round(FAT.quantity);

  //untuk mengambil data carbs
  const { CHOCDF } = recipe.recipe.totalNutrients;
  const Karbo = Math.round(CHOCDF.quantity);

  return (
    <div className="recipe zoom">
      <h4>{label}</h4>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        Link Website 
      </a>
      <pre><p className="calories">Kalori: {kalori} Kal</p></pre>
      <pre><p className="calories">Protein: {Protein} g</p></pre>
      <pre><p className="calories">Lemak: {Fat} g</p></pre>
      <pre><p className="calories">Karbohidrat: {Karbo} g</p></pre>
      <button onClick={() => setShow(!show)}>Alat dan Bahan</button>
      {show && <RecipeDetails ingredients={ingredients} />}
    </div>
  );
};

export default Recipe;
