import { useState } from "react"

export function TextoEtiqueta(){

    const[textoIntroducido, setTexto] = useState("");

    function cambiarTexto(e){
        
        setTexto(e.target.value)
    }
    return(
        <div>
            <input type={"text"} onInput={cambiarTexto}/>
            <h1>{textoIntroducido}</h1>
        </div>
    )
}