// src/components/YourCounter.js

import { useState } from "react"

//함수형 component
function YourCounter(){

    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={()=>{
                setCount(count-1)
            }}>-</button>
            <strong>{count}</strong>
            <button onClick={()=>{
                setCount(count+1)
            }}>+</button>
        </div>
    )
}

export default YourCounter

