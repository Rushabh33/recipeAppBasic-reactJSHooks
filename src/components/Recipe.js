import React from 'react'

const Recipe = ({ recipeData }) => {
  return (
    <div>
      <h1>{recipeData.recipe.label}</h1>
      <p>{recipeData.recipe.calories}</p>
      <img src={recipeData.recipe.image} alt="" />
    </div>
  )
}

export default Recipe
