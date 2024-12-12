import React, { useState } from "react";

const FunctionState = () => {
   const [counter,setState] =  useState(0);
   console.log(counter);
    return (
        <div>
            <p>Function State: {counter} </p>
            <button className="border-2 outline-none w-40 border-black-500 p-3 bg-sky-500" onClick={() => setState(counter + 1)}>State button</button>
        </div>
    );
}

export default FunctionState;