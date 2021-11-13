import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div>
            <nav class="nav">
                <Link to="/" class="navbar-toggler nav-link">REGISTRATION</Link>
                <Link to="/login" class="navbar-toggler nav-link">LOGIN</Link>
                <Link to="/seller" class="navbar-toggler nav-link">SELLER</Link>
                <Link to="/buyer" class="navbar-toggler nav-link">BUYER</Link>
                <Link to="/view" class="navbar-toggler nav-link">VIEW</Link>
            </nav>
        </div>
    )
}
