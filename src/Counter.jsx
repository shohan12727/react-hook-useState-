import React, {useState} from "react"

function Counter (){

    const [count,setCount] = useState (0);


    const handleDecrement = (e) => {
        e.target.textContent = "decrementing",
        setCount(count-1);
    }
    const handleReset = (e) => {
        e.target.textContent = "reseted",
        setCount(0);
    }
   const handleIncrement = (e) => {
    e.target.textContent = "incrementing",
    setCount(count+1);
   }

    return (  
        <div>
            <p className="count-container">{count}</p>
            <button className="decrement-container" onClick={handleDecrement}>Decrement</button>
            <button className="reset-container" onClick={handleReset}>Reset</button>
            <button className="increment-container" onClick={handleIncrement}>Increment</button>
        </div>

    )
}

export default Counter 