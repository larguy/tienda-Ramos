import "./css/producto.css";
import ItemCount from "./ItemCount";

const Item = (props) => {
    return (
        <div className="center producto"> 
            <>
                    <h1 key={props.FormatoParaProducto.id}>{props.FormatoParaProducto.tipo} {props.FormatoParaProducto.modelo}</h1>                    
                    <img key={props.FormatoParaProducto.id} alt='img' src={props.FormatoParaProducto.img}  width="100px" height="100" />
                    <h2 key={props.FormatoParaProducto.id}>Quedan {props.FormatoParaProducto.stock} en stock a solo $ {props.FormatoParaProducto.precio} </h2>
                    <a className="boton" href="#">Especificaciones</a>
                    <ItemCount StockQueHay={props.FormatoParaProducto.stock}/>
            </>
        </div>
    )
}

export default Item;
