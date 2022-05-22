import "./SearchResults.css"
import Track from "../Track/Track"

function SearchResults({tracks, onAdd}) {
  return (
    <div className="SearchResults">
        <h2>Results</h2>
        <div className="TrackList">
        {tracks.map((track) => {
            return <Track 
            key={track.id} 
            track={track}
            trackActionCharacter="+"
            handleTrackAction={onAdd}/>
        })}
        </div>
    </div>
  )
}

export default SearchResults