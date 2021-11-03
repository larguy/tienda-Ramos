import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import electrodomesticos from "./productos.json"



const ItemListContainer = (props) => {

    const [productos, setProductos] = useState([]);


    useEffect(() => {
        setTimeout(() => {
            setProductos(electrodomesticos);
        },2000);
    }, [productos]);

    if (productos.length === 0) {
        return <p> Aguarde estamos buscando los productos. </p>;
    } 
    
    return (
        <>
        <ItemList verproductos={productos}/>
        <p id="font"> {props.greeting} </p>
        </>
    )
}

export default ItemListContainer



