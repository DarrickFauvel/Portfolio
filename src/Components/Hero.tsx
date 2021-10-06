import React from 'react'
import "../Css/Hero.css"
import Bouncy from './Bouncy'

function Hero() {
    
    return (
        <div className="Hero">
            <p className="Hero-head">&#60; Developers &#47; &#62;  call me	</p>
            <div className="Hero-name">
                <Bouncy letter="V"/>
                <Bouncy letter="i"/>
                <Bouncy letter="n"/>
                <Bouncy letter="i"/>
                <Bouncy letter="t"/>
                <Bouncy letter=" "/>
                <Bouncy letter="G"/>
                <Bouncy letter="u"/>
                <Bouncy letter="p"/>
                <Bouncy letter="t"/>
                <Bouncy letter="a"/>
                <Bouncy letter="."/>
                </div>
            <div className="Hero-body">
                <div className="Hero-body-header"> Building cool things, everyday.
                </div>
            </div>
        </div>
    )
}

export default Hero
