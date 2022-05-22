let accessToken
const clientId = "5b5dd3ed842d4b6b80a051a52bb23302"
const redirectUri = "http://localhost:3000/"

const Spotify = {
    getAccessToken (){
        if(accessToken){
            return accessToken
        }
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
        const expiresInMatch =  window.location.href.match(/expires_in=([^&]*)/)

        if (accessTokenMatch && expiresInMatch){
            accessToken = accessTokenMatch[1]
            const expiresIn = Number(expiresInMatch[1])
            
            window.setTimeout(()=> accessToken = '', expiresIn * 1000)
            window.history.pushState('Access Token', null, '/')
            return accessToken;

        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
            window.location = accessUrl
        }
    },

    async search(term) {
        try {
        let accessToken = Spotify.getAccessToken()
        console.log(accessToken)
        
        const url = `https://api.spotify.com/v1/search?type=track&q=${term}`
        const response = await fetch(url,
        {
            headers: {
                Authorization : `Bearer ${accessToken}`
            }
        }
        )
        
        if(response.ok){
            
            const jsonResponse = await response.json()
            console.log(jsonResponse) 
            if(!jsonResponse.tracks){
                return []
            }
           return jsonResponse.tracks.items.map((track)=>({
                     id : track.id,
                    name : track.name,
                    artist : track.artists[0].name,
                    album : track.album.name,
                    uri : track.uri
        
                }))
                // returns the response in an array with objects
          
                 
        } else {
            throw new Error('search request failed')
        }
        
        } catch (error) {
            console.log(error)
        }

    },

    async savePlayList(name, trackUris){
        try {
            if(!name || !trackUris.length) {
                return
            }
    
            const accessToken = Spotify.getAccessToken()
            const headers = {Authorization: `Bearer ${accessToken}`}
            let userId
            let playListId
            const createUserIdUrl = `https://api.spotify.com/v1/me`
            const response = await fetch(createUserIdUrl, {headers: headers})
            if(response.ok){
                const jsonResponse = await response.json()
                 userId = jsonResponse.id
                 // first gathers the user id before we can save the playlist
                
            } else {
                throw new Error('user Id request failed')
            }

            const createPlaylistIdUrl = `https://api.spotify.com/v1/users/${userId}/playlists/`
            const playListResponse = await fetch(createPlaylistIdUrl,{
                headers: headers,
                method: 'POST',
                body: JSON.stringify({name: name})
            })
            if(playListResponse.ok){
                const playListResponseJsonResponse = await playListResponse.json()
                playListId = playListResponseJsonResponse.id
            } else {
                throw new Error('playlist id request failed')
            }

            // playListresponse is awaiting on the user id but once retrieved it can post the playlist name and then retrieve the playlist id

            const createPlaylistTracksUrl = `https://api.spotify.com/v1/users/${userId}/playlists/${playListId}/tracks`
            const addPlaylistResponse = await fetch(createPlaylistTracksUrl,{
                headers: headers,
                method: 'POST',
                body: JSON.stringify({uris: trackUris})

                // once userid is retrieved and the playlistname is posted(returning playlistid) we can now save the tracks under the playlist via a post method
            })
  
        } catch (error) {
            console.log(error)
        }
        

    }
 
}

export default Spotify
