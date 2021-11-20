import React from 'react'
import "../Css/BoldBtn.css"

function BoldBtn({...props}) {
    const btnText:string = props.text;
    return (
        <div className="BoldBtn">
            {btnText} 
            <div className="btn-arrow">&#8682;</div>
        </div>
    )
}

export default BoldBtn
