import { useState } from "react"

export function ShowMessage(){

    let[value,setValue] = useState(false);


    return(
    
        
        <span>
        <p>{value ? "Ahora puedes leer esto" :""}</p>
        <button onClick={()=>setValue(!value)}>{value ? "Ocultar mensaje": "Mostrar mensaje"}</button>
        </span>

    )
}