import React from 'react'
import { Link } from 'react-router-dom'
import '../css/NavBar.css'

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-links">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-links">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/spotify" className="nav-links">Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
