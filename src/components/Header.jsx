import NavBar from "./NavBar";
import logo from "./img/fragancesnet.png";

import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className=" p-2 fixed-top cabecera">
            <div className="container">
                <div className="row align-items-center mb-3">
                    <div className="col-1 d-md-none ">
                        <Link to={"/"} className=""><img src={logo} alt="logo de fragances.net" width={36} /></Link>
                    </div>
                    <div className="col-11 col-md-12">
                        <Link to={"/"} className="text-decoration-none text-black  "><h1 className="text-md-center">FRAGANCES.NET</h1></Link>
                    </div>
                </div>
                <NavBar />
            </div >
        </div>
    )
}
export default Header;