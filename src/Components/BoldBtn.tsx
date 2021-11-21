import React from 'react'
import "../Css/BoldBtn.css"

function BoldBtn({...props}) {
    const btnText:string = props.text;
    return (
        <div className="BoldBtn">
            <div className="Btn-text">
                {btnText} 
                <div className="btn-arrow">&#8682;</div>
            </div>
            <div className="shutter shutter-tl"></div>
            <div className="shutter shutter-br"></div>
        </div>
    )
}

export default BoldBtn
