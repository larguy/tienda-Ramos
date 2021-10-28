import { useState } from "react";


const ItemCount = () =>{
    let stock = 5;
    const [counter = 1, setContador] = useState();
    const up = () => setContador(counter + 1);
    const down = () => setContador(counter - 1);
    const reset = () => setContador(1);

    if (counter > stock) {
        console.log("no hay tanto stock de este producto");
        setContador(stock);
    }if (counter < 1){
        setContador(1);
    }

    return (
        <>
            <div >
                <p className="center">Cantidad de Productos:</p>
                <p className="center">{counter }</p>
                <div className="center">
                    <button onClick={up}>+</button>
                    <button onClick={down}>-</button>
                </div>
                <div className="center">
                    <button onClick={reset}>Reset</button>
                </div>
            </div>
        </>
    )
    
}


export default ItemCount