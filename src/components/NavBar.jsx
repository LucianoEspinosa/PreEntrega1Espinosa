import hotsale from "./img/hotsale.png";
const NavBar = () => {
    return (
        <nav>
            <ul className="nav justify-content-center align-items-center fs-5">
                <li className="nav-item">
                    <a className="nav-link" href="##"><img src={hotsale} alt="hotsale" width={60} /></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white " href="##">Mas Vendidos</a>
                </li>
                <li classlist="nav-item">
                    <a className="nav-link text-white" href="##">Para Ellos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="##">Para Ellas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="##">Contacto</a>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;