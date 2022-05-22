import "./Track.css"

function Track({track, trackActionCharacter, handleTrackAction}) {
  
  return (
    <div class="Track">
        <div class="Track-information">
            <h3>{track.name}</h3>
            <p>{track.artist} | {track.album}</p>
        </div>
        <button className="Track-action" onClick={() => handleTrackAction(track)}>
                {trackActionCharacter}
        </button>
    </div>
  )
}

export default Track