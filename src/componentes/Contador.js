import { useState } from "react";

export function Contador(){
    const[valor, setValue] = useState(0);

    return(
        <div>
            <button onClick={()=> setValue(valor-1)}>-</button>
            <span>{valor}</span>
            <button onClick={()=> setValue(valor+1)}>+</button>
        </div>
    )
}