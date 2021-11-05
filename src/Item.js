import "./css/producto.css";
import { Link } from "react-router-dom";

const Item = (props) => {
    return (
        <div className="center producto"> 
            <>
                    <h1 key={props.FormatoParaProducto.id}>{props.FormatoParaProducto.tipo} {props.FormatoParaProducto.modelo}</h1>                    
                    <img key={props.FormatoParaProducto.id} alt='img' src={props.FormatoParaProducto.img}  width="100px" height="100" />
                    <Link className="boton" to="/producto/:id">Especificaciones</Link>
            </>
        </div>
    )
}

export default Item;
