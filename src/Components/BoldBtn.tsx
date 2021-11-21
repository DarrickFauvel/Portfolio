import React from 'react'
import "../Css/BoldBtn.css"

function BoldBtn({...props}) {
    const btnText:string = props.text;
    const btnUrl:string = props.url;
    function hireMe(){
        window.open(btnUrl);
    }

    //in page link
    function contactMe(){
        
    }
    return (
        <div className="BoldBtn" onClick={()=>{
            if(btnText==="Hire Me") hireMe();
            else contactMe();
        }}>
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
