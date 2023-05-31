import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
const NavBar = () => {
    return (
        <div>
            <div>
                <ul className="nav justify-content-center fs-5">
                    <li className="nav-item">
                        <NavLink className="nav-link text-white" to={"/masvendidos"}>Mas Vendidos</NavLink>
                    </li>
                    <li classlist="nav-item">
                        <NavLink className="nav-link text-white" to={"/category/hombre"}>Para Ellos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-white" to={"/category/mujer"}>Para Ellas</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-white" to={"/category/unisex"}>Para Todos</NavLink>
                    </li>
                    <CartWidget />
                </ul>
            </div>

        </div>

    )
}
export default NavBar;