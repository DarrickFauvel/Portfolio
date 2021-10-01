import React from 'react'
import Logo from './Logo'
import "../Css/Navbar.css"
import Navmenu from './Navmenu'

function Navbar() {
    return (
        <div className="Navbar">
            <Logo/>
            <Navmenu/>
        </div>
    )
}

export default Navbar
