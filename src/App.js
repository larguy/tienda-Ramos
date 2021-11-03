import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";


const App = () => {
    return( 
        <>
            <NavBar/>
            <ItemListContainer greeting="Gracias por visitarnos espero que encuentres lo que estas buscando." />
            <ItemDetailContainer/>
            <footer id="foot" >
                <p >Links de Redes</p>
            </footer>
        </>
    )
}

export default App;

