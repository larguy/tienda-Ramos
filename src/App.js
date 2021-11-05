import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import { BrowserRouter , Route, Routes } from "react-router-dom";

const App = () => {
    return( 
        <>

            <BrowserRouter>
                <NavBar/>
                <ItemListContainer greeting="Gracias por visitarnos espero que encuentres lo que estas buscando." />
                <ItemDetailContainer/>

            <Routes>
            <Route patch="/" element={<ItemListContainer/>} exact/>

            <Route patch="/categoria/:tipo" element={<ItemListContainer/>} />

            <Route patch="/categoria/:id" element={<ItemListContainer/>} />
            </Routes>

            <footer id="foot" >
                <p >Links de Redes</p>
            </footer>
            </BrowserRouter>
        </>
    )
}

export default App;

