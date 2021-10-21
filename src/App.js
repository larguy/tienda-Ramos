import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";

const App = () => {
    return( 
        <>
            <NavBar/>
            <ItemListContainer greeting="Gracias por visitarnos espero que encuentres lo que estas buscando." />
            <footer id="foot" >
                <p >Links de Redes</p>
            </footer>
        </>
    )
}

export default App;

