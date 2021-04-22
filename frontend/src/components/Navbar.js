import React from 'react'
import { Link } from 'react-router-dom'
import '../css/style.css'

function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
