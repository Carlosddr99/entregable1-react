import { ShowMessage } from "./ShowMessage";

export function Loading(props){

    let mostrar = props.mostrar;

    return(
        <div>
        {mostrar ? props.children : "Loading"}
        </div>
    )
}