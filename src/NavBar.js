import CartWidget from "./CartWidget";


const NavBar = () => {
    return (
        <>
        <header id="cabecera" className="estilo">
            <h1 className="title">Venta de Electrodomesticos</h1>
            <nav id="menu">
                <a href="./#">Inicio</a>
                <a href="./#">Productos</a>
                <a href="./#">Contacto</a>
                <CartWidget/>
            </nav>
            
        </header>
        
    </>
    )
}

export default NavBar;