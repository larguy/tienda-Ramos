import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const {id} = useParams()
    console.log("tocaste sobre",id)

    const [producto, setProducto] = useState([]);


    useEffect(() => {
        setTimeout(() => {
            setProducto(producto.filter(producto => producto.id === parseInt(id)))
        },2000);
    }, []);

    if (producto.length === 0) {
        return <p> son solo unos segundos.</p>;
    }else
        return (
        <>
        <ItemDetail FormatoParaProducto={producto}/>
        </>
    )
}

export default ItemDetailContainer