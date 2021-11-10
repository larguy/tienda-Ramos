import "./css/producto.css";
import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
    return (
        <div className="center producto" key={props.FormatoParaProducto.id}> 
            <>
                    <h1 key={props.FormatoParaProducto.title}>{props.FormatoParaProducto.title} {props.FormatoParaProducto.modelo}</h1>
                    <img key={props.FormatoParaProducto.img} alt='img' src={props.FormatoParaProducto.image}  width="100px" height="100" />
                    <h2 key={props.FormatoParaProducto.precio}>Quedan {props.FormatoParaProducto.stock} en stock a solo $ {props.FormatoParaProducto.precio} </h2>
                    <h2 key={props.FormatoParaProducto.description}>Descripcion {props.FormatoParaProducto.description}</h2>
                    <ItemCount StockQueHay={5}/>
            </>
        </div>
    )
}

export default ItemDetail;