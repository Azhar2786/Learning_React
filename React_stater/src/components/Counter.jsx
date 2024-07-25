import { useState } from "react";

function Counter() {

    let counter1 = 5;
    let [counter, setCounter] = useState(counter1);


    const addValue = () => {
        counter = counter  + 1;
        if(counter >= 21){
            alert("limit excedd")
        }
        setCounter(counter);
    }

    const decreValue = () => {
        counter = counter - 1 ;
        setCounter(counter)
    }

    return (
        <>
            <h1>Hello ji !</h1>
            <h2>Counter value: {counter}</h2>

            <button onClick={addValue}>Add Value</button>
            <br/>
            <br />
            <button onClick={decreValue}>Decre Value</button>
        </>
    )
}


export default Counter;