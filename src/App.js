import React, { useEffect, useState } from "react";
import "./myStyles.css";
import Recipe from "./Recipe";
import { Container, Card } from "react-bootstrap";
const App = () => {
  const app_ID = "d2d33a47";
  const app_Key = "f909ab15a2e628794c1b8e10d1a47ce6";

  //const example = `https://api.edamam.com/search?q=chicken&app_id=${app_ID}&app_key=${app_Key}`;

  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState();
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    console.log("Testing for every time ");
    fun();
  }, [query]);

  const fun = async () => {
    var da = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${app_ID}&app_key=${app_Key}`
    );
    var data = await da.json();
    console.log(data.hits);
    setItems(data.hits);
  };
  const InputHandler = (e) => {
    // console.log("InputHandler", e.target.value);
    setSearch(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <div>
      <h1> Recipe App</h1>
      <h4>By VenkataSai</h4>

      <form className="bestView" onSubmit={handleForm}>
        <h1>Enter your favourite food hear</h1>
        <input type="text" value={search} onChange={InputHandler} />
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          type="submit"
        >
          Submit
        </button>
      </form>
      {items.map((Food) => {
        return (
          <Recipe
            key={Food.recipe.calories}
            label={Food.recipe.label}
            cal={Food.recipe.calories}
            Image={Food.recipe.image}
            ingredients={Food.recipe.ingredients}
          />
        );
      })}
    </div>
  );
};

export default App;
//image, calories, labelb;
