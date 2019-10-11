import React, { useState, useEffect } from 'react'
import Recipe from './components/Recipe'
import './App.css'

const App = () => {

  const APP_ID = 'bdf1ed73'
  const APP_KEY = '535f3f42dfaed9dd2a001a6756e00bc0'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    getRecipes().then(data => {
      setRecipes(data)
    })
  }, [])

  const getRecipes = async (query = 'bread') => {
    const userQuery = query.toLowerCase()
    const response = await fetch(`https://api.edamam.com/search?q=${userQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    return data.hits
  }

  const handleInputChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getRecipes(search).then(data => {
      setRecipes(data)
      setSearch('')
    })
  }

  return (
    <div>
      <form className='searchForm' onSubmit={handleSubmit}>
        <input type="text" className='searchBar' value={search} onChange={handleInputChange} />
        <button type='submit' className='searchButton'>Search</button>
      </form>
      {recipes.map((recipe) => <Recipe recipeData={recipe} />)}
    </div>
  )
}

export default App
