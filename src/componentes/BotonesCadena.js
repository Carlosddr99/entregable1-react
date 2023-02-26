import { useState } from "react";

export function BotonesCadena(){
    const[valor, setValue] = useState("");

    function addLetra(){
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numAle = Math.floor(Math.random()*25);
        setValue(valor+ characters.charAt(numAle));

    }

    function subLetra(){
        setValue(valor.substring(0,valor.length-1))
    }
    return(
        <div>
        <button onClick={()=> subLetra()}>-</button>
        <span>{valor}</span>
        <button onClick={()=> addLetra()}>+</button>
    </div>
    )
}