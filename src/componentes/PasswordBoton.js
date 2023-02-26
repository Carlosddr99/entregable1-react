import { useState } from "react"

export function PasswordBoton(){

    const[visible, setVisible] = useState("text");

    function cambiarTipo(){
        if(visible === "text"){
            setVisible("password");
        }
        else{
            setVisible("text")
        }
    }
    return(
        <div>

        <input type={visible}/>
        <button onClick={()=> cambiarTipo()}>{visible === "text" ? "Ocultar constraseña" : "Mostrar contraseña"}</button>
        
        </div>
    )
}