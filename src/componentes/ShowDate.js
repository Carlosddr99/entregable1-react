
export function ShowDate(){

    function mostrarFechaActual(){
        const fecha = new Date();
        return "La fecha actual es: "+fecha.toLocaleDateString('en-ES');
    }

    return(
    
        
        <span>{mostrarFechaActual()}
        <p>Mostrandose</p></span>

    )
}