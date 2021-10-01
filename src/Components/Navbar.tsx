import React from 'react'
import Logo from './Logo'
import "../Css/Navbar.css"

function Navbar() {
    return (
        <div className="Navbar">
            <Logo/>
            <div className="Navbar-menu">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Blog</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
