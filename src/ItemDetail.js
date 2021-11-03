import "./css/producto.css";
import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
    return (
        <div className="center producto" key={props.FormatoParaProducto.id}> 
            <>
                    <h1 key={props.FormatoParaProducto.title}>{props.FormatoParaProducto.title} {props.FormatoParaProducto.modelo}</h1>
                    <img key={props.FormatoParaProducto.image} alt='img' src={props.FormatoParaProducto.image}  width="100px" height="100" />
                    <h2 key={props.FormatoParaProducto.price}>Quedan {5} en stock a solo $ {props.FormatoParaProducto.price} </h2>
                    <h2 key={props.FormatoParaProducto.descriptionn}>Descripcion {props.FormatoParaProducto.description}</h2>
                    <ItemCount StockQueHay={5}/>
            </>
        </div>
    )
}

export default ItemDetail;