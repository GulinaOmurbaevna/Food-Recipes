 import React, { useEffect, useState } from 'react'
 import './App.css'
import RecipeCard from './components/RecipeCard';
import SearchBar from './components/SearchBar';
//  import SearchBar from './components/SearchBar'

 const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
 
 function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([])

  const searchRecipes = async () => {
    setIsLoading(true);
    const url = apiUrl + query;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    setRecipes(data.meals);
    setIsLoading(false);
  }

  useEffect(() => {
     searchRecipes();
  }, [])


  const handleSubmit = (event) => {
    event.preventDefault()
    searchRecipes()
  }
   return (
     <div className='container'>
         {/* <SearchBar /> */}
         <h2>Our recipe app</h2>

         <SearchBar  handleSubmit={handleSubmit}  onChange={(event) => setQuery(event.target.value)} value ={query} isLoading={isLoading}/>
          <div className='recipes'>
            {recipes
             ? recipes.map((recipe) => (
                  <RecipeCard key={recipe.idMeal} recipe={recipe} />
             ))
                : "no recipes"}
          </div>
     </div>
   )
 }
 
 export default App
 
