import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([]);


    const fakeProduct = () => {
        fetch('https://fakestoreapi.com/products?limit=2')

        .then((data) => {
            return data.json();
        })
        .then((ArrayDeProductos) => {
            return setProductos(ArrayDeProductos)
        })
    }


    useEffect(() => {
        setTimeout(() => {
            fakeProduct()
        },2000);
    }, []);

    if (productos.length === 0) {
        return <p> son solo unos segundos.</p>;
    }else
        return (
        <>
        <ItemDetail FormatoParaProducto={productos[1]}/>
        </>
    )
}

export default ItemDetailContainer