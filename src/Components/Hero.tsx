import React from 'react'
import "../Css/Hero.css"
import Bouncy from './Bouncy'

function Hero() {
    
    return (
        <div className="Hero">
            <p className="Hero-head">&#60; Web Developer &#47; &#62;</p>
            <div className="Hero-name">
                <Bouncy letter="V"/>
                <Bouncy letter="i"/>
                <Bouncy letter="n"/>
                <Bouncy letter="i"/>
                <Bouncy letter="t"/>
                <span className="space"> </span>
                <Bouncy letter="G"/>
                <Bouncy letter="u"/>
                <Bouncy letter="p"/>
                <Bouncy letter="t"/>
                <Bouncy letter="a"/>
                <Bouncy letter="."/>
                </div>
            <div className="Hero-body">
                <div className="Hero-body-header">
                    Making 
                    <span className="awesome">
                        A
                        <span className="w">w</span>
                        <span className="w-space"></span>
                        esome
                    </span> 
                    Websites for a Living.
                </div>
                <div className="Hero-body-text">
                    I am a Budding Web Developer from India, specializing in MERN stack.
                </div>
            </div>
        </div>
    )
}

export default Hero
