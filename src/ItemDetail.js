import "./css/producto.css";
import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
    return (
        <div className="center producto"> 
            <>
                    <h1 key={props.FormatoParaProducto.id}>{props.FormatoParaProducto.title} {props.FormatoParaProducto.modelo}</h1>
                    <img key={props.FormatoParaProducto.id} alt='img' src={props.FormatoParaProducto.image}  width="100px" height="100" />
                    <h2 key={props.FormatoParaProducto.id}>Quedan {5} en stock a solo $ {props.FormatoParaProducto.price} </h2>
                    <h2 key={props.FormatoParaProducto.id}>Descripcion {props.FormatoParaProducto.description}</h2>
                    <ItemCount StockQueHay={5}/>
            </>
        </div>
    )
}

export default ItemDetail;