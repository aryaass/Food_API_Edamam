import React, { useState } from "react";
import "./Home.css";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "../Recipe";
import Alert from "../Alert";

function Home() {
  const [text, setText] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "d189be18";
  const APP_KEY = "ae3e08342dd37274bf7bed3a7a0bf21d";

  const url = `https://api.edamam.com/search?q=${text}&app_id=${APP_ID}&app_key=${APP_KEY}&diet=low-carb`;
  
  const YOUR_APP_ID = "68f5740d";
  const YOUR_APP_KEY = "2af2230a7e805d70b572384c55b73c81";

  const url1 = `https://api.edamam.com/api/nutrition-details?app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  const getValue = async () => {
    if (text !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert("Maaf, makanan yang anda cari tidak ditemukan.");
      }
      console.log(result);
      setRecipes(result.data.hits);
      setText("");
      setAlert("");
    } else {
      setAlert("Isi kolom pencarian berikut!");
    }

    if (text !== "") {
      const result1 = await Axios.get(url1);
      if (!result1.data.more) {
        return setAlert("Maaf, makanan yang anda cari tidak ditemukan.");
      }
      console.log(result1);
      setRecipes(result1.data.hits);
      setText("");
      setAlert("");
    } else {
      setAlert("Isi kolom pencarian berikut!");
    }
  };

  const setSearch = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    getValue();
  };
  
  return (
    <div className="App">
      <h1>Cooking Recipe</h1>
      <form onSubmit={onSubmit} className="search-form">
        {alert !== "" && <Alert alert={alert} />}
        <input
          type="text"
          name="text"
          onChange={setSearch}
          value={text}
          autoComplete="off"
          placeholder="Pencarian Makanan dan Minuman"
        />
        <input type="submit" value="Cari" />
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} calorie={recipe.calories} />)}
      </div>
    </div>
  );
}

export default Home;
