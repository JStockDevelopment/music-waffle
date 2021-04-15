import React from 'react'
import '../css/HeroSection.css'
import { Link } from 'react-router-dom'
export default function HeroSection() {
    return (
        <div className='main-container'>
            <Link to='/spotify' className='btn-hero'>Login with Spotify</Link>
        </div>
    )
}

