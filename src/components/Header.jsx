import NavBar from "./Navbar";
import logo from "./img/fragancesnet.png";

import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className=" p-2 fixed-top cabecera">
            <div className="container">
                <div className="row">
                    <div className="col-6 col-md-12">
                        <Link to={"/"} className="text-decoration-none text-black  ">
                            <h1 className="text-md-center">FRAGANCES.NET</h1>
                        </Link>
                    </div>
                    <div className="col-6 text-end d-md-none">
                        <Link to={"/"} className="">
                            <img src={logo} alt="logo de fragances.net" width={32} />
                        </Link>
                    </div>
                </div>
            </div >
            <NavBar />
        </div>
    )
}
export default Header;