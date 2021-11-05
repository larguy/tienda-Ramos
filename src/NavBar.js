import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <header id="cabecera" className="estilo">
                <NavLink to="/" className="logo" exact >
                <h1 className="title">Venta de Electrodomesticos</h1>
                </NavLink>
                <nav id="menu">
                    <Link to="/categoria/ventilador">Ventilador</Link>
                    <Link to="/categoria/caloventor">Caloventor</Link>
                    <Link to="/categoria/productos">Mas Productos</Link>
                    <Link to="/categoria/contacto">Contacto</Link>
                    <CartWidget/>
                </nav>
            </header>
            
        </>
    )
}

export default NavBar;