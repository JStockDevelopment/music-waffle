import React from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'
import {useEffect, useState} from 'react'


export default function Player({accessToken, trackUri}) {
    const [play, setPlay] = useState(false)

    useEffect(() => setPlay(true), [trackUri])

    if(!accessToken) return null
    return (
        <SpotifyPlayer
        token={accessToken}
        showSaveIcon
        initialVolume={.3}
        callback={state => {
            if(!state.isPlaying) setPlay(false)
        }}
        play={play}
        uris={ trackUri ? [trackUri] : []}
        />
    )
}
