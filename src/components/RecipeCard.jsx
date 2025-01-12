import React from 'react'

 
function RecipeCard({recipe}) {
    const {idMeal, strMeal, strCategory, strMealThumb} = recipe;
  return (
    <div className='card'>
        <img src={strMealThumb} alt={strMeal}  className='card-image'/>
      <div className="card-body">
        <span className='category'>{strCategory}</span>
        <h3>{strMeal}</h3>
        <a href={"http://www.themealdb.com/meal/" + idMeal} target='_blank'>Ingredient</a>
      </div>
    </div>
  )
}

export default RecipeCard
