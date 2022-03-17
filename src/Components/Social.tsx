import React from 'react'
import "../Css/Social.css"

function Social({...props}) {
    const name:string = props.name;
    const url : string = props.url;
    
    function redirectTo(){
        window.open(url);
    }

    const icon =  require(`../Assets/Social/${name}.png`)
    return (
        <div className="Social" onClick={redirectTo}>
           <img className="Social-icon" src={icon} alt={name} /> 
        </div>
    )
}

export default Social
