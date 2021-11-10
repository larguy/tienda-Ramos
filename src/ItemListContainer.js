import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import electrodomesticos from "./productos.json"
import { useParams } from "react-router-dom";


const ItemListContainer = (props) => {

    const {categoriaId} = useParams()
    console.log("tocaste sobre",categoriaId)
    
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const prom = new Promise ((resolve, reject) => {
            setTimeout(() => {
                if(categoriaId){
                    const productosFiltrados = electrodomesticos.filter(producto => producto.tipo === categoriaId)
                    console.log(productosFiltrados)
                    resolve(productosFiltrados)
                }else{
                    resolve(electrodomesticos)
                }
            },2000);
        })
        prom.then(data => {
            setTimeout(() => {
                setProductos(electrodomesticos);
            },2000);
        })
        prom.catch(error => {
            console.log(error)
        })
    }, [categoriaId]);

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



