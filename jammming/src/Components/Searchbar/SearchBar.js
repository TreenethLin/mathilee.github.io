import { useState } from "react"
import "./SearchBar.css"

function SearchBar({onSearch}) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleTermChange =(event) => {
    event.preventDefault()
    setSearchTerm(event.target.value)
    }

  const handleSearch = () => {
    onSearch(searchTerm)
    }

  const handleKeyPress= (event) => {
        if (event.key === "Enter") {
          handleSearch();
    }
}

  return (
    <div className="SearchBar">
        <input onChange={handleTermChange} onKeyPress={handleKeyPress} placeholder="Enter A Song, Album, or Artist" />
        <button class="SearchButton" onClick={handleSearch}>SEARCH</button>
    </div>
  )
}

export default SearchBar