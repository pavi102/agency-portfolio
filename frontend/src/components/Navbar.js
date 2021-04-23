import React from 'react'
import { Link } from 'react-router-dom'
import '../styling/style.css'

function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">Projects</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                    
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
