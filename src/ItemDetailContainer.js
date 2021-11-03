import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import electrodomesticos from "./productos.json"


const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([]);


const fakeProduct = fetch('https://fakestoreapi.com/products?limit=2')
fakeProduct.then((data) => {
    const pedidoArrayDeProductos = data.json();
    return pedidoArrayDeProductos
})
.then((ArrayDeProductos) => {
    return setProductos(ArrayDeProductos)
})

    useEffect(() => {
        setTimeout(() => {
            setProductos(electrodomesticos);
        },2000);
    }, [productos]);

    if (productos.length === 0) {
        return <p> son solo unos segundos.</p>;
    } 
    
    return (
        <>
        <ItemDetail FormatoParaProducto={productos[0]}/>
        </>
    )
}

export default ItemDetailContainer