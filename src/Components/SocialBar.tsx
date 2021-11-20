import React from 'react'
import Social from './Social'
import "../Css/SocialBar.css"

function SocialBar({...props}) {
    const calledFrom:string = props.location;
    return (
        <div className={calledFrom==="index" ? "SocialBar vertical" : "SocialBar horizontal"}>
            <div className="line"></div>
            <Social name="github" url="https://github.com/thevinitgupta"/>
            <Social name="linkedin" url="https://www.linkedin.com/in/thevinitgupta/" />
            <Social name="devto" url="https://dev.to/thevinitgupta"/>
            <Social name="leetcode" url="https://leetcode.com/thevinitgupta/" />
            <Social name="twitter" url="https://twitter.com/thevinitgupta_" />
            <Social name="instagram" url="https://www.instagram.com/jsdecaf/" />
            <div className="line"></div>
        </div>
    )
}

export default SocialBar
