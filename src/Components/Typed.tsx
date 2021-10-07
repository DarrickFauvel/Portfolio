import React from 'react'
import "../Css/Typed.css"
interface Props{
    word : string
}
function Typed({word} : Props) {
    const wordArr : Array<string> = word.split("");
    return (
        <div className="Typed awesome">
           {wordArr.map((letter : string,index : number)=>{
               return <span>{letter}</span>
           })} 
        </div>
    )
}

export default Typed
