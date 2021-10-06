import React, { useState } from 'react'
interface Props {
    letter : string
}

function Bouncy ({letter} : Props) {
    const [animated,setAnimated] = useState(false);
    return (
        <div onMouseEnter={() => setAnimated(() => true)}
        onAnimationEnd={() => setAnimated(() => false)} className={animated? "rubber rubber-bounce" : "rubber"}>
            {letter}
        </div>
    )
}

export default Bouncy
