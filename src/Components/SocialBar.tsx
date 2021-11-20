import React from 'react'
import Social from './Social'
import "../Css/SocialBar.css"

function SocialBar({...props}) {
    const calledFrom:string = props.location;
    return (
        <div className={calledFrom==="index" ? "SocialBar vertical" : "SocialBar horizontal"}>
            <div className="line"></div>
            <Social name="github"/>
            <Social name="linkedin"/>
            <Social name="devto"/>
            <Social name="leetcode"/>
            <Social name="twitter"/>
            <Social name="instagram"/>
            <div className="line bottom-line"></div>
        </div>
    )
}

export default SocialBar
