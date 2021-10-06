import React from 'react'
import Navbar from './Navbar'
import "../Css/Home.css"
import Hero from './Hero'

function Home() {
    return (
        <div className="Home">
            <Navbar/>  
            <Hero/>
        </div>
    )
}

export default Home
