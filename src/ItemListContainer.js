import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import electrodomesticos from "./productos.json"
import { useParams } from "react-router";


const ItemListContainer = (props) => {

    const {tipo} = useParams()
    console.log(tipo)
    
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const prom = new Promise ((resolve, reject) => {
            if(tipo){
                resolve(electrodomesticos.filter(producto => producto.tipo === tipo))
            }else{
                resolve(electrodomesticos)
            }
        })
        prom.then(data => {
            setTimeout(() => {
                setProductos(electrodomesticos);
            },2000);
        })
        prom.catch(error => {
            console.log(error)
        })
    }, [tipo]);

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



