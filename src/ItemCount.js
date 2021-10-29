import { useState } from "react";


const ItemCount = (props) =>{
    const [counter = 1, setContador] = useState();
    const up = () => setContador(counter + 1);
    const down = () => setContador(counter - 1);
    const reset = () => setContador(1);

    if (counter > props.StockQueHay) {
        console.log("no hay tanto stock de este producto");
        setContador(props.StockQueHay);
    }if (counter < 1){
        setContador(1);
    }

    return (
        <>
            <div >
                <h3 className="center">Cantidad de Productos:</h3>
                <h1 className="center">{counter }</h1>
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