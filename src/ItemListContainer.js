import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
    
    return (
        <>
        <ItemCount/>
        <p id="font"> {props.greeting} </p>
        </>
    )
}

export default ItemListContainer
