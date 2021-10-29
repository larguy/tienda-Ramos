import { useEffect, useState } from "react";
import Item from "./Item"



export default function ItemList() {
    const [productos, setProductos] = useState([
        {
            "id": 1,
            "tipo": "Ventilador",
            "modelo": "1EV1610",
            "img": "https://minicuotas.ribeiro.com.ar/images/products/large/P00001023000.jpg",
            "precio": "7000",
            "stock": 7
        },
        {
            "id": 2,
            "tipo": "Caloventor",
            "modelo": "T800",
            "img": "https://www.tiomusa.com.ar/imagenes/archivos/2021-06/28407-caloventorphilcophcf20a1p.jpg",
            "precio": "4000",
            "stock": 2
        },
        {
            "id": 3,
            "tipo": "Caloventor",
            "modelo": "T1000",
            "img": "https://http2.mlstatic.com/D_728515-MLA45482008131_042021-O.jpg",
            "precio": "5000",
            "stock": 5
        }
    ]);


    useEffect(() => {
        setTimeout(() => {
            setProductos(productos);
        },2000);
    }, [productos]);

    if (productos.length === 0) {
        return <p> Aguarde estamos buscando los productos. </p>;
    } else {
        return (
            <>
            <h1 className="center">Nuestros Productos</h1>
            <div className="center">
            
            {productos.map((Elemento) => {
                return (
                <>
                    <Item FormatoParaProducto={Elemento}/>
                </>
                );
            })}
            </div>
            </>
        );
    }
}