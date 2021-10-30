import React, { useState } from 'react'
import "../Css/Hero.css"
import Bouncy from './Bouncy'
import Social from './Social';

function Hero() {
    const [awesomeHovered, setAwesomeHovered] = useState(false);
    // const [linkHovered,setLinkHovered] = useState(0);

    // const openWorkWebsite = ()=>{
    //     window.open("https://tablt.com/", '_blank');
    // }
    return (
        <div className="Hero">
            <div className="Hero-left">
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
                    Making the Web 
                    <span className={awesomeHovered?"awesome awesome-hovered" :"awesome"} 
                    onMouseEnter={()=>{
                        setAwesomeHovered(true);
                    }} 
                    
                    onMouseLeave={()=>{
                        setAwesomeHovered(false);
                    }}
                    >{awesomeHovered? "Versatile": "Awesome"}</span>
                </div>
                <div className="Hero-body-text">
                    <p>I am a Budding Web Developer based in India, cooking up websites. Currently developing websites of Medicinal value at 
                    <a id="current-job" href="https://tablt.com/" target="_blank" rel="noreferrer"
                    >
                        {/* <div className="underline" style={{width : `${linkHovered}px`}}></div> */}
                        Tablt Tech
                    </a></p>
                </div>
            </div>
            </div>
            <div className="Hero-right">
                <Social name="leetcode"/>
                <Social name="github"/>
                <Social name="twitter"/>
                <Social name="linkedin"/>
                <Social name="devto"/>
                <Social name="instagram"/>
            </div>
        </div>
    )
}

export default Hero
