import React from 'react';

class Contador extends React.Component() {

    constructor(){
        super();
        this.valor=0;
        this.setValue = this.setValue.bind(this);
    }

    setValue(value){
        this.valor = value;
    }


    render(){
    return(
        <div>
            <button onClick={this.setValue(this.valor-1)}>-</button>
            <span>{this.valor}</span>
            <button onClick={ this.setValue(this.valor+1)}>+</button>
        </div>
    )
    }
}

export default Contador;