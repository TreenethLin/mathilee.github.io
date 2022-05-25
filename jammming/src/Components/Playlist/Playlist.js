import "./Playlist.css"
import Track from "../Track/Track"

function Playlist({playlistName, onNameChange, tracks, onRemove, onSave}) {
  function handleNameChange(event) {
    onNameChange(event.target.value)
  }

  return (
    <div className="Playlist">
      <input placeholder={playlistName} onChange={handleNameChange}/>
      <div className="TrackList">
        {tracks.map((track) => {
            return <Track 
            key={track.id} 
            track={track}
            trackActionCharacter="-"
            handleTrackAction={onRemove}/>
        })}
        </div>
        <div className="button">
          <button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>
      </div>
    </div>
  )
}

export default Playlist