import React from 'react'
import "../Css/Social.css"
function Social({...props}) {
    const name:string = props.name;
    console.log(name)
    const icon =  require(`../Assets/Social/${name}.svg`)
    return (
        <div className="Social">
           <img className="Social-icon" src={icon.default} alt={name} /> 
        </div>
    )
}

export default Social
