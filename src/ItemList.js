import Item from "./Item"

const ItemList = (props) => {

    return (
        <>
        <h1 className="center">Nuestros Productos</h1>
        <div className="center">
        
        {props.verproductos.map((Elemento) => {
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

export  default ItemList