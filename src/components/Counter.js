import React, { useState } from "react"

const Counter = () => {
    const [value, setValue] = useState(0)
    return (
        <>
        <h1>Simple Counter</h1>
        <h2>{value}</h2>
        <button className="btn" onClick={() => setValue(value + 1)}>Increase</button>
        <button className="btn" onClick={() => setValue(0)}>Reset</button>
        <button className="btn" onClick={() => setValue(value - 1)}>Decrease</button>
        </>
    )
}

export default Counter