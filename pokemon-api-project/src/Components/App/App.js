import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import SearchBar from '../SearchBar/SearchBar'
import SearchResult from '../SearchResult/SearchResult'
import pokeapi from "../../images/pokeapi.png"

function App() {
  const [name, setName] = useState("pikachu")
  const [data, setData] = useState([])
  const [error, setError] = useState(false)

  async function getPokemon() {
    try {
      setError(false)
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      let pokemonData = await response.json()
      setData(pokemonData)
      
    } catch (error) {
      setData(false)
      setError(true)
    }
  }

  useEffect(() => {
    getPokemon()
  },[])

  function handleSubmit(event) {
    event.preventDefault()
    getPokemon()
  }

  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-br from-rose-200 to-rose-400'>
      <div className="bg-white text-center justify-center items-center rounded-3xl border shadow-lg p-10 max-w-xs">
        <Header logo={pokeapi}/>
        <SearchBar handleSubmit={handleSubmit} setName={setName} name={name} data={data} error={error}/>
        <SearchResult error={error} data={data} />
      </div>
    </div>
  )
}

export default App