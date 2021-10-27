import { useState } from "react";


const useCounter = (stock = 5,initial = 1) =>{
    const [counter, setContador] = useState(stock,initial);
    const up = () => setContador(counter + 1);
    const down = () => setContador(counter - 1);

    return (
        counter,
        up,
        down,
        stock,
        initial
    )
}


export default function ItemCount (){
    const {counter, Up, Down, stock,initial} = useCounter();
    
    if(counter > stock){
        console.log("No Hay tantos Productos")
    }


    return (
        <div id="center">
            <p>Cantidad de Productos: {counter}</p>
            <button onClick={Up}>+</button>
            <button onClick={Down}>-</button>
            <button onClick={initial}>Reset</button>
        </div>
    );
}
