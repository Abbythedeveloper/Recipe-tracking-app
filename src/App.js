import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";
import RecipeView from "./RecipeView";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  const deleteRecipe = (indexToDelete) => {
    setRecipes((currentRecipes) =>
      currentRecipes.filter((_, index) => index !== indexToDelete)
    );
  };
  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList
        recipes={recipes}
        deleteRecipe={deleteRecipe}
        setRecipes={setRecipes}
      />
      <RecipeCreate
        recipes={recipes}
        setRecipes={setRecipes}
        deleteRecipe={deleteRecipe}
      />
    </div>
  );
}
//<PostList posts={posts} deletePosts={deletePosts}/>
export default App;
