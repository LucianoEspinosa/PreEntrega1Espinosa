import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";
import logo from "./img/fragancesnet.png";


const NavBar = () => {
    return (
        <nav className="container navbar navbar-expand-md fs-5 d-flex align-items-center">

            <Link to={"/"} className="col-2 d-md-flex  d-none "><img src={logo} alt="logo de fragances.net" width={50} /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse  justify-content-md-center col-md-8" id="navbarNav">
                <ul className="navbar-nav text-center">
                    <li className="nav-item"><NavLink className="nav-link" to={"ofertas"}>Ofertas</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to={"masvendidos"}>Mas Vendidos</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to={"/category/hombre"}>Para Ellos</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to={"/category/mujer"}>Para Ellas</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to={"/category/unisex"}>Para Todos</NavLink></li>
                </ul>
            </div>
            <div className="nav col-md-2">
                <CartWidget />
            </div>

        </nav>
    );
}

export default NavBar;
