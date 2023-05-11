import hotsale from "./img/hotsale.png";
const NavBar= ()=>{
    return(
        <nav>
                <ul class="nav justify-content-center align-items-center fs-5">
                    <li class="nav-item">
                        <a class="nav-link" href="##"><img src={hotsale} alt="hotsale" width={60} /></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white " href="##">Mas Vendidos</a>
                    </li>
                    <li classlist="nav-item">
                        <a class="nav-link text-white" href="##">Para Ellos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="##">Para Ellas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="##">Contacto</a>
                    </li>

                </ul>
            </nav>
    )
}
export default NavBar;