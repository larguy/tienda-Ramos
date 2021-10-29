
import ItemList from "./ItemList";




const ItemListContainer = (props) => {


    
    return (
        <>
        <ItemList/>
        <p id="font"> {props.greeting} </p>
        </>
    )
}

export default ItemListContainer



