import React, { useState } from 'react'
import "../Css/Hero.css"
import Bouncy from './Bouncy'

function Hero() {
    const [awesomeHovered, setAwesomeHovered] = useState(false);
    const [linkHovered,setLinkHovered] = useState(false);
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
                    <span className={awesomeHovered?"awesome awesome-hovered" :"awesome"} 
                    onMouseEnter={()=>{
                        setAwesomeHovered(true);
                    }} 
                    
                    onMouseLeave={()=>{
                        setAwesomeHovered(false);
                    }}
                    >{awesomeHovered? "Versatile": "Awesome"}</span>
                    Websites for a Living.
                </div>
                <div className="Hero-body-text">
                    I am a Budding Web Developer based in India, cooking up websites. Currently developing websites of Medicinal value at <a id="current-job" href="https://tablt.com/" rel="noreferrer" target="_blank" onMouseEnter={()=>{
                        setLinkHovered(true);
                    }} 
                    onMouseLeave={()=>{
                        setLinkHovered(false);
                    }}
                    >
                        <div className="unederline" style={{width: linkHovered?"100%": "0"}}></div>
                        Tablt Tech
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero
