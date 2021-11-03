import "./css/producto.css";


const Item = (props) => {
    return (
        <div className="center producto"> 
            <>
                    <h1 key={props.FormatoParaProducto.id}>{props.FormatoParaProducto.tipo} {props.FormatoParaProducto.modelo}</h1>                    
                    <img key={props.FormatoParaProducto.id} alt='img' src={props.FormatoParaProducto.img}  width="100px" height="100" />
                    <a className="boton" href={props.FormatoParaProducto.id}>Especificaciones</a>
            </>
        </div>
    )
}

export default Item;
