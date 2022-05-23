import './App.css'
import SearchBar from "../Searchbar/SearchBar"
import SearchResults from "../SearchResults/SearchResults"
import Playlist from "../Playlist/Playlist"
import { useEffect, useState } from 'react'
import Spotify from '../../util/Spotify'

import logo from "./logo.png"

function App() {
    const [searchResults, setSearchResults] = useState([])

    const [playlistTracks, setPlaylistTracks] = useState([])

    const [playlistName, setPlaylistName] = useState("New Playlist")

    useEffect(() => {
      Spotify.getAccessToken();
    }, [])
    
    // Search
    async function searchSpotify(searchTerms) {
      const results = await Spotify.search(searchTerms)
      setSearchResults(results)
    }

    // Add tracks to playlist
    function addTrack(track) {
      setPlaylistTracks(oldPlaylistTracks => {
        if (oldPlaylistTracks.includes(track)) {
          return oldPlaylistTracks
        }
        else {
          return [...oldPlaylistTracks, track]
        }
      });
    }

    // Remove tracks from playlist
    function removeTrack(track) {
      setPlaylistTracks(playlistTracks.filter((currentTrack)=> currentTrack.id !== track.id));
    }

    // Update playlistname
    function updatePlaylistName(name) {
      setPlaylistName(name)
    }

    // Save playlist
    function savePlaylist() {
      const trackURIs = playlistTracks.map(track => track.uri)
      // iterates through the playlists array and returns a new array that consists of the track uri
      Spotify.savePlayList(playlistName, trackURIs)
      setPlaylistTracks([]);
    }

  return (
    <div>
      <div className='logo'>
        <h1><img src={logo} alt="logo"/></h1>
      </div>
      <div className="App">
        <SearchBar onSearch={searchSpotify} />
        <div className="App-playlist">
          <SearchResults tracks={searchResults} onAdd={addTrack} />
          <Playlist tracks={playlistTracks} onRemove={removeTrack} playlistName={playlistName} onNameChange={updatePlaylistName} onSave={savePlaylist} />
        </div>
      </div>
    </div>
  )
}

export default App
