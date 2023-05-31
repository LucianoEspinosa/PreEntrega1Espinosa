import logo from "./img/fragancesnet.png";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header className="bg-black p-2 fixed-top">
        <div className="container">
            <div className="row align-items-center">
            <Link to={"/"} className="col-4"><img src={logo} alt="logo de fragances.net" width={100}/></Link>
            <Link to={"/"} className="col-4 text-white text-decoration-none text-center"><h1>Fragances.net</h1> </Link>
                
                <div className="col-md-4 text-end">
                    <Link to= {"https://www.fragrantica.es/"} className="text-white text-decoration-none">Fragantica.es</Link>
                </div>
            </div>
        </div >
        <NavBar />
        </header>
    )
}
export default Header;